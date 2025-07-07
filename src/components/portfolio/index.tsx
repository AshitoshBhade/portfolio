"use client";

import HeaderComponent from "../header";
import { About } from "./AboutMe/AboutMe";
import { Achievements } from "./Achievements";
import ContactMe from "./ContactMe";
import { Intro } from "./Introduction/Intro";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { SmartContracts } from "./SmartContracts";
import { Testinomial } from "./Testinomials";

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
			<ContactMe />

			{/* Footer */}
			<footer className='w-full max-w-4xl text-center py-8 text-gray-500 text-sm'>
				<p className='text-center text-sm text-gray-400'>
					Made with <span className='text-red-500'>❤️</span> by Ashitosh Bhade.
					<br />
					&copy; {new Date().getFullYear()} Ashitosh Bhade. All rights reserved.
				</p>
			</footer>
		</div>
	);
}

export default AppComponent;
