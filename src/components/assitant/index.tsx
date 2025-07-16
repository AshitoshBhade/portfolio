"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, MessageCircle, X } from "lucide-react";
import ReactMarkdown from "react-markdown";

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
	// const playerContextResonseId = useRef<string | null>(null);
	// const contextFetched = useRef<boolean>(false);
	const visitorId = useRef<string>("1");

	const [isRecording, setIsRecording] = useState(false);
	// automatically scroll to bottom of chat
	const messagesEndRef = useRef<HTMLDivElement | null>(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [chats]);

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
				try {
					const transcript = event.results[0][0].transcript;
					console.log("Speech recognition result:", transcript);
					setChats(prev => [...prev, { role: "user" as "user" | "assistant", content: transcript }]);
					setLoading(true);

					const res = await fetch("/api/gemini-assistant", {
						method: "POST",
						body: JSON.stringify({ question: transcript, visitorId: visitorId.current })
					});

					if (!res.ok) {
						throw new Error("Failed to fetch response from AI assistant");
					}
					const { answer } = await res.json();

					setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: answer }]);
				} catch (error) {
					console.error("Error processing speech recognition result:", error);
					setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: "Something went wrong" }]);
				} finally {
					setLoading(false);
					setInputDisabled(false);
				}
			};

			recognition.onstart = () => {
				setIsRecording(true);
				setInputDisabled(true);

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
		setInputDisabled(true);
		setLoading(true);

		try {
			const res = await fetch("/api/gemini-assistant", {
				method: "POST",
				body: JSON.stringify({ question: message, visitorId: visitorId.current })
			});
			if (!res.ok) {
				throw new Error("Failed to fetch response from AI assistant");
			}
			const { answer } = await res.json();

			setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: answer }]);
		} catch (error) {
			console.error("Error sending message:", error);
			setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: "Something went wrong" }]);
		} finally {
			setLoading(false);
			setInputDisabled(false);
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
						<div className='flex flex-col flex-1 overflow-y-auto space-y-3 p-4 rounded border border-gray-700 bg-gray-800 shadow-inner'>
							{chats.map((msg: IMessages, i) => (
								<div key={i} className={`w-full flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
									<div
										className={`px-4 py-2 rounded-xl break-words max-w-[85%] text-sm md:text-base ${
											msg.role === "user" ? "bg-blue-600 text-white text-right" : "bg-gray-700 text-gray-100 text-left"
										}`}>
										<div className='prose prose-invert prose-sm md:prose-base max-w-none'>
											<ReactMarkdown
												components={{
													a: ({ ...props }) => <a {...props} className='text-blue-400 underline' target='_blank' rel='noopener noreferrer' />,
													strong: ({ ...props }) => <strong className='font-bold text-white' {...props} />,
													ul: ({ ...props }) => <ul className='list-disc list-inside ml-4 text-gray-300' {...props} />,
													ol: ({ ...props }) => <ol className='list-decimal list-inside ml-4 text-gray-300' {...props} />,
													li: ({ ...props }) => <li className='mb-1' {...props} />,
													p: ({ ...props }) => <p className='mb-2' {...props} />
												}}>
												{msg.content}
											</ReactMarkdown>
										</div>
									</div>
								</div>
							))}

							{loading && <div className='text-gray-400 text-sm italic'>Typing...</div>}
							<div ref={messagesEndRef} />
						</div>
						{/* Input */}
						<div className='p-3 border-t border-gray-700 bg-[#111827] flex items-center gap-2'>
							<input
								value={input}
								disabled={inputDisabled}
								onChange={e => setInput(e.target.value)}
								onKeyDown={e => e.key === "Enter" && handleSend(input)}
								placeholder='Ask a question...'
								className='flex-1 bg-gray-800 text-white px-4 py-2 rounded-md outline-none'
							/>
							<button disabled={inputDisabled || isRecording} onClick={onRecordStart} className='text-white'>
								{isRecording ? <MicOff /> : <Mic />}
							</button>
							<button
								disabled={inputDisabled || loading}
								onClick={() => handleSend(input)}
								className='sm:w-auto w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50'>
								{loading ? "Sending" : "Send"}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
