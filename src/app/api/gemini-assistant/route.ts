import { geminiChat } from "@/configs/gemint";
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
		const streamResult = await geminiChat.sendMessageStream(question);

		if (!streamResult || !streamResult.stream) {
			return new NextResponse(JSON.stringify({ error: "No response stream available" }), { status: 500 });
		}

		// Stream the response
		const readableStream = new ReadableStream({
			async start(controller) {
				for await (const chunk of streamResult.stream) {
					const chunkText = chunk.text();
					if (chunkText) {
						controller.enqueue(chunkText);
					}
				}
				controller.close();

				console.log(`[${visitorId}] Updated dynamic history with new turn.`);
			}
		});

		return new NextResponse(readableStream, {
			headers: {
				"Content-Type": "text/plain",
				"Transfer-Encoding": "chunked",
				"Cache-Control": "no-cache",
				Connection: "keep-alive"
			}
		});
	} catch (error) {
		console.error("Gemini error:", error);
		return new NextResponse(JSON.stringify({ error: "Gemini API failed." }), { status: 500 });
	}
}
