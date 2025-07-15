import { openaiClient } from "@/configs/openai";
import { createVectorStoreForAshitoshCV } from "@/utils/createPortfolioVector";
import fsPromises from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

import path from "path";
// Handle OPTIONS requests (CORS preflight)
export async function OPTIONS() {
	return new NextResponse(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*", // or use specific origin like "http://localhost:3000"
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
			"Access-Control-Max-Age": "86400"
		}
	});
}

export async function POST(req: NextRequest) {
	const { question, responseId, visitorId } = await req.json();

	if (!responseId) {
		return new NextResponse(JSON.stringify({ error: "Missing responseId in request body" }), { status: 400 });
	}

	if (!visitorId) {
		return new NextResponse(JSON.stringify({ error: "Missing visitorId in request body" }), { status: 400 });
	}

	if (!question) {
		return new NextResponse(JSON.stringify({ error: "Missing question in request body" }), { status: 400 });
	}

	const existingVectorStoreId = process.env.NEXT_PUBLIC_PORTFOLIO_VECTOR_ID!;

	if (!existingVectorStoreId) {
		await createVectorStoreForAshitoshCV();
	}

	const filePath = path.resolve(process.cwd(), "src/configs", "instructions.txt");

	const instructions = await fsPromises.readFile(filePath, "utf-8");

	const response = await openaiClient.responses.create({
		model: "gpt-4.1",
		instructions: instructions,
		previous_response_id: responseId,
		user: visitorId,
		store: true,
		input: [
			{
				role: "user",
				content: question
			}
		],
		tools: [{ type: "file_search", vector_store_ids: [existingVectorStoreId] }]
	});

	return new NextResponse(
		JSON.stringify({
			answer: response.output_text,
			responseId: response.id
		}),
		{
			status: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		}
	);
}
