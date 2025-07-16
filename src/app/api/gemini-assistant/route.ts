// app/api/assistant/gemini/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { readFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS() {
	return new NextResponse(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
			"Access-Control-Max-Age": "86400"
		}
	});
}

export async function POST(req: NextRequest) {
	const { question, visitorId } = await req.json();

	if (!visitorId) {
		return new NextResponse(JSON.stringify({ error: "Missing visitorId in request body" }), { status: 400 });
	}

	if (!question) {
		return new NextResponse(JSON.stringify({ error: "Missing question in request body" }), { status: 400 });
	}

	try {
		const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
		const model = genAI.getGenerativeModel({
			model: "gemini-2.5-pro"
		});

		const filePath = path.resolve(process.cwd(), "src/configs", "instructions.txt");
		const instructions = await readFile(filePath, "utf-8");

		const cvfilePath = path.resolve(process.cwd(), "public", "AshitoshCV.pdf");
		const cvContent = await readFile(cvfilePath, "utf-8");

		const chat = model.startChat({
			systemInstruction: {
				role: "system",
				parts: [
					{
						text: instructions
					}
				]
			},
			history: [
				{
					role: "user",
					parts: [{ text: `Please refer to Ashitosh's resume for your answers:\n\n${cvContent}` }]
				}
			]
		});

		const result = await chat.sendMessage(question);
		const text = result.response.text();

		return new NextResponse(JSON.stringify({ answer: text }), {
			status: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		console.error("Gemini error:", error);
		return new NextResponse(JSON.stringify({ error: "Gemini API failed." }), { status: 500 });
	}
}
