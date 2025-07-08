import { ButtonElement } from "@/components/buttons";
import { ButtonType } from "@/components/buttons/types";
import { handleNavLinkClick } from "@/utils/handleNavClick";
import { motion, Variants } from "framer-motion";
import { ProfileImageCard } from "./ProfileImageCard";

export const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const Intro = () => {
	return (
		<motion.section
			id='hero'
			className='w-full  max-w-6xl text-center py-8 flex flex-col gap-4 px-4 sm:px-6 lg:px-8 mb-8 lg:flex lg:flex-row lg:items-center lg:justify-center' //
			initial='hidden'
			animate='visible'
			variants={sectionVariants}>
			<motion.div
				className='flex flex-col justify-center space-x-4 flex-wrap gap-4 mb-4' // Added flex-wrap and gap for responsiveness
				initial={{ opacity: 0, y: 20 }} // Kept Framer Motion for buttons
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }} // Adjusted delay to run after anime.js
			>
				<h5
					id='portfolio-name' // Added ID for anime.js
					className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg'
					// Framer Motion animation props removed as anime.js handles it
				>
					{`Hello! I'm`}
				</h5>
				<h1
					id='portfolio-name' // Added ID for anime.js
					className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#db7163] mb-2 drop-shadow-lg'
					// Framer Motion animation props removed as anime.js handles it
				>
					Ashitosh Bhade
				</h1>
				<motion.p
					id='portfolio-role' // Added ID for anime.js
					className='text-l sm:text-xl text-gray-300 mb-4'
					// Framer Motion animation props removed as anime.js handles it
					initial={{ opacity: 0, y: 20 }} // Kept Framer Motion for buttons
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }} // Adjusted delay to run after anime.js
				>
					A professional Blockchain Developer.
				</motion.p>
				<motion.div
					className='flex flex-row justify-center space-x-4 flex-wrap gap-4' // Added flex-wrap and gap for responsiveness
					initial={{ opacity: 0, y: 20 }} // Kept Framer Motion for buttons
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.8 }} // Adjusted delay to run after anime.js
				>
					<ButtonElement label='View Projects' style={{ padding: "10px" }} buttonType={ButtonType.BLUE} onClick={() => handleNavLinkClick("projects")} />
					<ButtonElement label='Contact Me' style={{ padding: "10px" }} buttonType={ButtonType.WHITE} onClick={() => handleNavLinkClick("contact-me")} />
					{/* Download CV Button */}
					{/* <a href='/download/AshiitoshCV.pdf' download='AshitoshCV.pdf' className='inline-block'>
						<ButtonElement
							label={
								<span className='flex items-center'>
									<Download className='mr-2 h-5 w-3' /> Download CV
								</span>
							}
							buttonType={ButtonType.GRAY}
						/>
					</a> */}
				</motion.div>
			</motion.div>

			<ProfileImageCard />
		</motion.section>
	);
};
