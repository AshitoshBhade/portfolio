/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, MessageCircle, X, SendIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { isMobile } from "@/utils/handleNavClick";

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

			recognition.lang = LANG;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			recognition.onresult = async (event: any) => {
				try {
					const transcript = event.results[0][0].transcript;
					console.log("Speech recognition result:", transcript);

					await handleSend(transcript); // Use the same send handler for consistency
				} catch (error) {
					console.error("Error processing speech recognition result:", error);
					setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: "Something went wrong" }]);
				} finally {
					setLoading(false);
					setInputDisabled(false);
					setIsRecording(false); // Ensure recording state is reset
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
			recognition.onerror = (event: any) => {
				console.error("Speech recognition error:", event.error);
				setIsRecording(false);
				setInputDisabled(false);
				setLoading(false);
				setChats(prev => [...prev, { role: "assistant" as "user" | "assistant", content: "Speech recognition error. Please try again." }]);
			};

			return recognition;
		}
	}, []);

	const onRecordStart = useCallback(() => {
		if (!recognition) {
			console.error("Speech recognition is not supported in this browser.");
			return;
		}
		setIsRecording(true);
		recognition.start();
	}, [recognition]);

	const handleSend = async (message: string) => {
		if (!message) return;

		setChats(prev => [...prev, { role: "user", content: message }]);

		setInput("");
		setInputDisabled(true);
		setLoading(true); // Indicate loading for AI response
		setChats(prev => [...prev, { role: "assistant", content: "" }]); // Placeholder for streaming

		try {
			const res = await fetch("/api/gemini-assistant", {
				method: "POST",
				headers: {
					"Content-Type": "application/json" // Important: specify content type for JSON body
				},
				body: JSON.stringify({ question: message, visitorId: visitorId.current })
			});

			if (!res.ok || !res.body) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder("utf-8");
			let receivedText = "";

			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					break;
				}
				const chunk = decoder.decode(value, { stream: true });
				receivedText += chunk;

				// Update the last assistant message with new chunks
				setChats(prev => {
					const newChats = [...prev];
					newChats[newChats.length - 1].content = receivedText;
					return newChats;
				});
			}
		} catch (error) {
			console.error("Error sending message or streaming response:", error);
			// Update the last assistant message with an error, or add a new one
			setChats(prev => {
				const newChats = [...prev];
				// Check if the last message is the placeholder, update it. Otherwise, add new.
				if (newChats.length > 0 && newChats[newChats.length - 1].role === "assistant" && newChats[newChats.length - 1].content === "") {
					newChats[newChats.length - 1].content = "Oops! Something went wrong while getting the response.";
				} else {
					newChats.push({ role: "assistant", content: "Oops! Something went wrong while getting the response." });
				}
				return newChats;
			});
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
					<>
						{/* Overlay */}
						{isMobile() ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40'
								onClick={() => setOpen(false)}
							/>
						) : null}

						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 50 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 50 }}
							transition={{ duration: 0.3 }}
							className='fixed bottom-24 right-2 w-[95vw] z-20000  sm:w-[400px] max-w-[95vw] max-h-[80vh] bg-[#1f2937] text-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden'>
							{/* Header */}
							<div className='flex items-center justify-between p-4 border-b border-gray-700 bg-[#111827]'>
								<h2 className='text-lg font-semibold'>{`Ashitosh's AI Assistant`}</h2>
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
								{isMobile() ? (
									<SendIcon onClick={() => handleSend(input)} style={{ transform: `rotateZ(45deg)` }} />
								) : (
									<button
										disabled={inputDisabled || loading}
										onClick={() => handleSend(input)}
										className='sm:w-auto w-[80px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50'>
										{loading ? "Sending" : "Send"}
									</button>
								)}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
