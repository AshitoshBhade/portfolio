// components/GetInTouch.jsx or components/GetInTouch.tsx (if using TypeScript)

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare } from "lucide-react"; // Icons for input fields

// Assuming these variants are defined globally or locally.
const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } }
};
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};

interface IContactForm {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

const gradientBorderCss = `
@keyframes rotateGradient {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
}

.gradient-border-wrap {
    position: relative;
    padding: 2px; /* This controls the thickness of the border */
    border-radius: 12px; /* Match the inner card's border-radius */
    overflow: hidden; /* Crucial to hide the excess gradient */
    z-index: 1; /* Ensure it's above other elements if needed */
    background: linear-gradient(
        45deg,
        #ff00b3, /* Pink */
        #8e2de2, /* Purple */
        #00c2ff, /* Blue */
        #00ff8c, /* Green */
        #ffeb3b, /* Yellow */
        #ff00b3 /* Repeat Pink to ensure smooth loop */
    );
    background-size: 400% 400%; /* Make the gradient large enough to move */
    animation: rotateGradient 10s linear infinite; /* Adjust duration for speed */
}

.gradient-border-inner {
    position: relative;
    z-index: 2; /* Ensure inner content is above the gradient border */
    border-radius: 10px; /* Slightly smaller to create the border effect */
    /* The inner card's background will mask the gradient */
}
`;

// Inject the CSS into the document head (for self-contained example)
if (typeof window !== "undefined") {
	const styleTag = document.createElement("style");
	styleTag.innerHTML = gradientBorderCss;
	document.head.appendChild(styleTag);
}

const GetInTouch = () => {
	const [formData, setFormData] = useState<IContactForm>({
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(""); // 'success', 'error', ''

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("");

		console.log("Submitting form data:", formData);

		const res = await fetch("/api/send-email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData)
		});

		console.log("Response from API:", res);
		try {
			if (res.ok) {
				setSubmitStatus("success");
				setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
				console.log("Form submitted successfully (mock).");
			} else {
				setSubmitStatus("error");
				console.error("Form submission failed (mock).");
			}
		} catch (error) {
			setSubmitStatus("error");
			console.error("Error during form submission (mock):", error);
		} finally {
			setIsSubmitting(false);
			// Clear status message after some time
			setTimeout(() => setSubmitStatus(""), 5000);
		}
	};

	return (
		<motion.section
			id='contact'
			className='w-full max-w-4xl mx-auto mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
			variants={containerVariants}>
			{/* Outer wrapper for the moving gradient border */}
			<div className='gradient-border-wrap rounded-lg shadow-xl'>
				{" "}
				{/* Apply shadow here */}
				{/* Inner content container */}
				<div className='gradient-border-inner w-full bg-gray-800 rounded-lg p-8 sm:p-10 lg:p-12'>
					{" "}
					{/* Original content styles */}
					<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2 text-start' variants={itemVariants}>
						Get In Touch
					</motion.h2>
					<motion.p className='text-gray-300 text-lg text-start mb-8' variants={itemVariants}>
						Have a project in mind or just want to say hello? Feel free to reach out!
					</motion.p>
					<motion.form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6' variants={containerVariants}>
						<motion.div className='relative' variants={itemVariants}>
							<User className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
							<input
								type='text'
								name='name'
								placeholder='Your Name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200 placeholder-gray-400'
								disabled={isSubmitting}
							/>
						</motion.div>

						<motion.div className='relative' variants={itemVariants}>
							<Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
							<input
								type='email'
								name='email'
								placeholder='Your Email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200 placeholder-gray-400'
								disabled={isSubmitting}
							/>
						</motion.div>

						<motion.div className='relative md:col-span-2' variants={itemVariants}>
							<Phone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={20} />
							<input
								type='tel'
								name='phone'
								placeholder='Your Phone (Optional)'
								value={formData.phone}
								onChange={handleChange}
								className='w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200 placeholder-gray-400'
								disabled={isSubmitting}
							/>
						</motion.div>

						<motion.div className='relative md:col-span-2' variants={itemVariants}>
							<MessageSquare className='absolute left-3 top-4 text-gray-400' size={20} />
							<textarea
								name='message'
								placeholder='Your Message'
								value={formData.message}
								onChange={handleChange}
								rows={5}
								required
								className='w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition-all duration-200 placeholder-gray-400 resize-y'
								disabled={isSubmitting}></textarea>
						</motion.div>

						<motion.div className='md:col-span-2 flex flex-col items-center' variants={itemVariants}>
							<button
								type='submit'
								className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
								disabled={isSubmitting}>
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>

							{submitStatus === "success" && (
								<motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='mt-4 text-green-400 text-sm'>
									Message sent successfully! I&apos;ll get back to you soon.
								</motion.p>
							)}
							{submitStatus === "error" && (
								<motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='mt-4 text-red-400 text-sm'>
									Failed to send message. Please try again later.
								</motion.p>
							)}
						</motion.div>
					</motion.form>
				</div>
			</div>
		</motion.section>
	);
};

export default GetInTouch;
