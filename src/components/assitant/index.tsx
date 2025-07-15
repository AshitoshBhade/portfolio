"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, MessageCircle, X } from "lucide-react";

interface IMessages {
	role: "user" | "assistant";
	content: string;
}

export default function PersonalAssistant() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");

	const [chats, setChats] = useState<IMessages[]>([
		{ role: "assistant", content: "Hi! I'm your personal AI assistant. Ask me anything about Ashitosh Bhade!" }
	]);
	const [loading, setLoading] = useState(false);
	const [inputDisabled, setInputDisabled] = useState(false);
	const playerContextResonseId = useRef<string | null>(null);
	const contextFetched = useRef<boolean>(false);
	const visitorId = useRef<string>("1");

	const [isRecording, setIsRecording] = useState(false);

	const recognition = useMemo(() => {
		const LANG = "en-US";

		if (typeof window !== "undefined") {
			// @ts-expect-error it's correct
			const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

			// Set the language of the recognition
			recognition.lang = LANG;

			// Event listeners for the recognition
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			recognition.onresult = async (event: any) => {
				const transcript = event.results[0][0].transcript;
				console.log("Speech recognition result:", transcript);

				const res = await fetch("/api/portfolio-assistant", {
					method: "POST",
					body: JSON.stringify({ question: transcript, playerContextResponseId: playerContextResonseId.current, visitorId: visitorId.current })
				});

				const { answer } = await res.json();

				setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: answer }]);
			};

			recognition.onstart = () => {
				setIsRecording(true);
				console.log("Speech recognition started");
			};
			recognition.onend = () => {
				console.log("Speech recognition ended");
				setIsRecording(false);
			};

			return recognition;
			// Safe to use window here
		}
	}, [visitorId]);

	const onRecordStart = useCallback(() => {
		if (!recognition) {
			console.error("Speech recognition is not supported in this browser.");
		}
		recognition.start();
	}, [recognition]);

	// Simulate AI response
	const handleSend = async (message: string) => {
		if (!message) return;
		setChats([...chats, { role: "user", content: message }]);
		setInput("");

		try {
			const res = await fetch("/api/portfolio-assistant", {
				method: "POST",
				body: JSON.stringify({ question: message, playerContextResponseId: playerContextResonseId.current, visitorId: visitorId.current })
			});

			const { answer } = await res.json();

			setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: answer }]);
		} catch (error) {
			console.error("Error sending message:", error);
		}
	};

	return (
		<>
			{/* Toggle Button */}
			<div className='fixed bottom-6 right-6 z-50'>
				<button onClick={() => setOpen(true)} className='rounded-full p-3 bg-blue-600 hover:bg-blue-700 shadow-xl'>
					<MessageCircle className='text-white' />
				</button>
			</div>

			{/* Assistant Window */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 50 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 50 }}
						transition={{ duration: 0.3 }}
						className='fixed bottom-24 right-6 w-[340px] md:w-[400px] max-h-[80vh] bg-[#1f2937] text-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden'>
						{/* Header */}
						<div className='flex items-center justify-between p-4 border-b border-gray-700 bg-[#111827]'>
							<h2 className='text-lg font-semibold'>Ashitosh's AI Assistant</h2>
							<button onClick={() => setOpen(false)}>
								<X className='text-white' />
							</button>
						</div>

						{/* Messages */}
						<div className='flex-1 overflow-y-auto space-y-2 px-4 py-3'>
							{chats.map((msg, index) => (
								<div
									key={index}
									className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
										msg.role === "assistant" ? "bg-blue-600 text-white self-start" : "bg-gray-300 text-gray-900 self-end ml-auto"
									}`}>
									{msg.content}
								</div>
							))}
						</div>

						{/* Input */}
						<div className='p-3 border-t border-gray-700 bg-[#111827] flex items-center gap-2'>
							<input
								value={input}
								onChange={e => setInput(e.target.value)}
								onKeyDown={e => e.key === "Enter" && handleSend(input)}
								placeholder='Ask a question...'
								className='flex-1 bg-gray-800 text-white px-4 py-2 rounded-md outline-none'
							/>
							<button onClick={onRecordStart} className='text-white'>
								{isRecording ? <MicOff /> : <Mic />}
							</button>
							<button onClick={() => handleSend(input)} className='bg-blue-500 hover:bg-blue-600'>
								Send
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
