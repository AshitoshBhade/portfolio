"use client";

import { motion } from "framer-motion";
import { Award, Blocks, Code, FileText, GitCommit, Github, Linkedin, Mail, Newspaper, Phone, RefreshCw, ShieldCheck, TestTube } from "lucide-react";
import { useEffect } from "react";
import HeaderComponent from "../header";
import { About } from "./AboutMe/AboutMe";
import { Intro } from "./Introduction/Intro";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { containerVariants, itemVariants, sectionVariants } from "./variants";

// Main Portfolio App component
function AppComponent() {
	// Dynamically load anime.js from CDN inside the component
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
		script.async = true;
		document.body.appendChild(script);

		// Cleanup function to remove the script when the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []); // Empty dependency array means this runs once on mount

	// useEffect for anime.js animations after anime.js script is loaded
	useEffect(() => {
		// Check if anime.js is available globally
		// @ts-expect-error valid

		if (typeof window !== "undefined" && window.anime) {
			// Profile Picture animation
			// @ts-expect-error valid

			window.anime({
				targets: "#profile-pic",
				scale: [0, 1],
				opacity: [0, 1],
				duration: 800,
				easing: "easeOutElastic(1, .8)",
				delay: 200
			});

			// Name animation (splitting text into characters)
			const nameText = document.querySelector("#portfolio-name");
			if (nameText) {
				// Clear existing content to prevent re-appending spans on re-renders
				if (nameText.textContent) {
					nameText.innerHTML = nameText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
				}
				// @ts-expect-error valid
				window.anime({
					targets: "#portfolio-name .letter",
					translateY: [40, 0],
					opacity: [0, 1],
					easing: "easeOutExpo",
					duration: 1000,
					// @ts-expect-error valid
					delay: (el, i) => 800 + 30 * i // Staggered delay
				});
			}
			// @ts-expect-error valid

			// Role animation
			window.anime({
				targets: "#portfolio-role",
				translateY: [20, 0],
				opacity: [0, 1],
				duration: 800,
				easing: "easeOutExpo",
				delay: 1500 // After name animation
			});
		}
	}, []); // Empty dependency array means this runs once on mount

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
			<motion.section
				id='smart-contracts'
				className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={sectionVariants}>
				<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
					Smart Contract Expertise
				</motion.h2>
				<motion.div className='text-lg text-gray-300 space-y-4' variants={containerVariants}>
					<motion.p variants={itemVariants}>
						I specialize in full lifecycle smart contract development, from rigorous testing to secure deployment and meticulous verification across major
						blockchain networks.
					</motion.p>
					<motion.ul className='list-disc list-inside space-y-2' variants={containerVariants}>
						<motion.li variants={itemVariants}>
							<FileText className='inline-block mr-2 h-5 w-5 text-blue-400' />
							<strong>Verified Contracts:</strong> Links to verified contracts on Etherscan/Testnet for transparency and auditability. (e.g.,{" "}
							<a href='https://etherscan.io/address/0x...' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
								ERC-721 Game Item Contract
							</a>
							)
						</motion.li>
						<motion.li variants={itemVariants}>
							<ShieldCheck className='inline-block mr-2 h-5 w-5 text-green-400' />
							<strong>Security & Audits:</strong> Emphasis on secure coding practices, adherence to OpenZeppelin standards, and experience with external
							security audits.
						</motion.li>
						<motion.li variants={itemVariants}>
							<TestTube className='inline-block mr-2 h-5 w-5 text-red-400' />
							<strong>Test Coverage:</strong> High test coverage (e.g., 90%+) using frameworks like Hardhat and Chai to ensure contract reliability and prevent
							vulnerabilities.
						</motion.li>
						<motion.li variants={itemVariants}>
							<Blocks className='inline-block mr-2 h-5 w-5 text-purple-400' />
							<strong>Contract Types:</strong> Expertise in ERC-20, ERC-721 (with lazy minting, royalty support), ERC-1155, ERC-2981, ERC-4337 (Account
							Abstraction), ICOs, Crowdsales, DAOs, and more.
						</motion.li>
					</motion.ul>
				</motion.div>
			</motion.section>

			{/* Testing & DevOps Section */}
			<motion.section
				id='testing-devops'
				className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={sectionVariants}>
				<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
					Testing & DevOps
				</motion.h2>
				<motion.div className='text-lg text-gray-300 space-y-4' variants={containerVariants}>
					<motion.p variants={itemVariants}>
						Ensuring robust and reliable decentralized applications through comprehensive testing and streamlined deployment pipelines.
					</motion.p>
					<motion.ul className='list-disc list-inside space-y-2' variants={containerVariants}>
						<motion.li variants={itemVariants}>
							<TestTube className='inline-block mr-2 h-5 w-5 text-green-400' />
							<strong>Smart Contract Testing:</strong> Rigorous unit and integration testing using Hardhat, Foundry, and Chai for Solidity contracts.
						</motion.li>
						<motion.li variants={itemVariants}>
							<Code className='inline-block mr-2 h-5 w-5 text-cyan-400' />
							<strong>Frontend/Backend Testing:</strong> Unit and end-to-end testing for dApp interfaces and backend services using Jest/Mocha.
						</motion.li>
						<motion.li variants={itemVariants}>
							<GitCommit className='inline-block mr-2 h-5 w-5 text-blue-500' />
							<strong>CI/CD Pipelines:</strong> Automated testing and deployment workflows with GitHub Actions, Vercel, and Netlify for continuous delivery and
							preview environments.
						</motion.li>
						<motion.li variants={itemVariants}>
							<RefreshCw className='inline-block mr-2 h-5 w-5 text-green-500' />
							**Automated Deployment:** Experience setting up automated deployments to testnets and mainnets, ensuring efficient and error-free releases.
						</motion.li>
					</motion.ul>
				</motion.div>
			</motion.section>

			{/* Testimonials Section */}
			<motion.section
				id='testimonials'
				className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={sectionVariants}>
				<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
					Testimonials & Collaborations
				</motion.h2>
				<motion.div className='text-lg text-gray-300 space-y-6' variants={containerVariants}>
					<motion.blockquote className='bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-500' variants={itemVariants}>
						<p className='italic mb-3'>
							{`"Ashitosh is an exceptional blockchain developer. His ability to quickly understand complex requirements and deliver robust solutions is truly
							impressive. He was instrumental in integrating our Crossmint checkout, exceeding expectations on turnaround time."`}
						</p>
						<footer className='font-semibold text-right'>- [Client Name/Role], [Company/Studio Name]</footer>
					</motion.blockquote>
					<motion.blockquote className='bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-500' variants={itemVariants}>
						<p className='italic mb-3'>
							{`"Working with Ashitosh was a seamless experience. His deep expertise in ERC-4337 and smart wallets allowed us to implement sponsored transactions, significantly improving user onboarding for our dApp."`}
						</p>
						<footer className='font-semibold text-right'>- [Collaborator Name/Role], [Project Name]</footer>
					</motion.blockquote>
					<motion.p variants={itemVariants} className='text-center mt-6'>
						I thrive in collaborative environments, working closely with product, design, and engineering teams to translate complex ideas into scalable Web3
						products.
					</motion.p>
				</motion.div>
			</motion.section>

			{/* Certifications & Credentials Section */}
			<motion.section
				id='certifications'
				className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={sectionVariants}>
				<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
					Certifications & Credentials
				</motion.h2>
				<motion.ul className='list-disc list-inside text-lg text-gray-300 space-y-3' variants={containerVariants}>
					<motion.li variants={itemVariants} className='flex items-center'>
						<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
						<strong>Blockchain Developer Certification:</strong> [e.g., Alchemy University, ConsenSys Blockchain Developer Bootcamp]
					</motion.li>
					<motion.li variants={itemVariants} className='flex items-center'>
						<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
						<strong>DeFi Protocol Development:</strong> [e.g., Encode Club DeFi Course, Chainlink Bootcamp]
					</motion.li>
					<motion.li variants={itemVariants} className='flex items-center'>
						<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
						<strong>Web3 Integrations Specialist:</strong> [e.g., Thirdweb Certified Developer, OpenZeppelin Defender Course]
					</motion.li>
					<motion.li variants={itemVariants} className='flex items-center'>
						<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
						<strong>Hackathon Participation:</strong> ETHGlobal [Event Name] (e.g., Finalist/Winner for [Project Name])
					</motion.li>
					<motion.li variants={itemVariants} className='flex items-center'>
						<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
						**Google/GitHub Developer Badges:** (e.g., Google Cloud Certified, GitHub Actions Certified)
					</motion.li>
				</motion.ul>
			</motion.section>

			{/* Blog / Content Section */}
			<motion.section
				id='blog'
				className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={sectionVariants}>
				<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
					Blog & Content
				</motion.h2>
				<motion.div className='text-lg text-gray-300 space-y-4' variants={containerVariants}>
					<motion.p variants={itemVariants}>I occasionally share insights and technical deep-dives on blockchain development and Web3 trends.</motion.p>
					<motion.ul className='list-disc list-inside space-y-2' variants={containerVariants}>
						<motion.li variants={itemVariants} className='flex items-center'>
							<Newspaper className='mr-2 h-5 w-5 text-blue-400 flex-shrink-0' />
							<a href='#' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
								How I Built a DeFi Dashboard Using Chainlink Price Feeds
							</a>
						</motion.li>
						<motion.li variants={itemVariants} className='flex items-center'>
							<Newspaper className='mr-2 h-5 w-5 text-blue-400 flex-shrink-0' />
							<a href='#' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
								Comparing EIP-4337 Smart Wallets: Pimlico vs Stackup
							</a>
						</motion.li>
						<motion.li variants={itemVariants} className='flex items-center'>
							<Newspaper className='mr-2 h-5 w-5 text-blue-400 flex-shrink-0' />
							<a href='#' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
								Scaling a Web3 App with Off-chain Indexing: The Graph Explained
							</a>
						</motion.li>
					</motion.ul>
				</motion.div>
			</motion.section>

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
