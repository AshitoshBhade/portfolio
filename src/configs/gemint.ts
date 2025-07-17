import { GoogleGenerativeAI } from "@google/generative-ai";
import { readFileSync } from "fs";
import path from "path";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const filePath = path.resolve(process.cwd(), "src/configs", "instructions.txt");
const instructions = readFileSync(filePath, "utf-8");

const cvfilePath = path.resolve(process.cwd(), "public", "AshitoshCV.pdf");
const cvContent = readFileSync(cvfilePath, "utf-8");

export const geminiModel = genAI.getGenerativeModel({
	model: "gemini-2.5-pro",
	systemInstruction: {
		role: "system",
		parts: [
			{
				text: instructions
			}
		]
	}
});

export const geminiChat = geminiModel.startChat({
	history: [
		{
			role: "user",
			parts: [{ text: `Please refer to Ashitosh's resume for your answers:\n\n${cvContent}` }]
		}
	]
});
