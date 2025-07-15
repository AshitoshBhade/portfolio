import OpenAI from "openai";

export const openaiClient = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });
export const model = "gpt-4.1";
