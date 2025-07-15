import { openaiClient } from "@/configs/openai";
import path from "path";
import fs from "fs";

export const createVectorStoreForAshitoshCV = async () => {
	try {
		console.log("Creating vector store for Ashitosh CV...");
		const filePath = path.resolve(process.cwd(), "public", "AshitoshCV.pdf");

		const file = await openaiClient.files.create({
			file: fs.createReadStream(filePath),
			purpose: "assistants"
		});

		// 2. Create a vector store and add the file to it
		const vectorStore = await openaiClient.vectorStores.create({
			name: "AshitoshCV"
		});

		await openaiClient.vectorStores.files.create(vectorStore.id, {
			file_id: file.id
		});

		console.log("📦 Vector Store created and file added:", vectorStore.id);
		return vectorStore.id;
	} catch (error) {
		console.error("Error creating vector store:", error);
		throw new Error("Failed to create vector store");
	}
};
