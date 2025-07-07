"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import HeaderComponent from "../header";
import { About } from "./AboutMe/AboutMe";
import { Achievements } from "./Achievements";
import { Intro } from "./Introduction/Intro";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { SmartContracts } from "./SmartContracts";
import { Testinomial } from "./Testinomials";
import { containerVariants, itemVariants, sectionVariants } from "./variants";

// Main Portfolio App component
function AppComponent() {
	return (
		// Main container with the dark theme
		<div className='min-h-screen bg-gradient-to-r from-[#1e293b] via-[#2b3243] to-[#1e293b] flex flex-col items-center justify-start font-sans text-white'>
			{/* Header Section */}
			<HeaderComponent />
			{/* Hero Section - Introduction */}
			{/* <Introduction /> */}
			<Intro />
			{/* About Me Section */}
			<About />

			{/* Skills Section */}
			<Skills />

			{/* Projects Section */}
			<Projects />

			{/* Smart Contract Section */}
			<SmartContracts />

			{/* Testimonials Section */}
			<Testinomial />

			{/* Certifications & Credentials Section */}
			<Achievements />

			{/* Contact Me Section */}
			<motion.section
				id='contact-me'
				className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16 text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={sectionVariants}>
				<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
					Contact Me
				</motion.h2>
				<motion.div className='text-lg text-gray-300 space-y-4' variants={containerVariants}>
					<motion.p className='flex items-center justify-center' variants={itemVariants}>
						<Mail className='mr-2 h-5 w-5 text-blue-400' /> <strong>Email:</strong>{" "}
						<a href='mailto:ashitosh.bhade@gmail.com' className='text-blue-400 hover:underline ml-1'>
							ashitosh.bhade@gmail.com
						</a>
					</motion.p>
					<motion.p className='flex items-center justify-center' variants={itemVariants}>
						<Linkedin className='mr-2 h-5 w-5 text-blue-400' /> <strong>LinkedIn:</strong>{" "}
						<a href='https://linkedin.com/in/ashitosh-bhade-41ba37105' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline ml-1'>
							linkedin.com/in/ashitosh-bhade-41ba37105
						</a>
					</motion.p>
					<motion.p className='flex items-center justify-center' variants={itemVariants}>
						<Github className='mr-2 h-5 w-5 text-blue-400' /> <strong>GitHub:</strong>{" "}
						<a href='https://github.com/ashitosh03' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline ml-1'>
							https://github.com/ashitosh03
						</a>
					</motion.p>
					<motion.p className='flex items-center justify-center' variants={itemVariants}>
						<Phone className='mr-2 h-5 w-5 text-blue-400' /> <strong>Mobile:</strong> +919284309929
					</motion.p>
				</motion.div>
			</motion.section>

			{/* Footer */}
			<footer className='w-full max-w-4xl text-center py-8 text-gray-500 text-sm'>
				<p>&copy; {new Date().getFullYear()} Ashitosh Bhade. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default AppComponent;
