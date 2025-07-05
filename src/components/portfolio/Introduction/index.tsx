import { ButtonElement } from "@/components/buttons";
import { ButtonType } from "@/components/buttons/types";
import { handleNavLinkClick } from "@/utils/handleNavClick";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { sectionVariants } from "../variants";

export const Introduction = () => {
	return (
		<motion.section
			id='hero'
			className='w-full max-w-4xl text-center py-16 px-4 sm:px-6 lg:px-8 mb-16'
			// Framer Motion for section (opacity/y) is still here, but children are anime.js
			initial='hidden'
			animate='visible'
			variants={sectionVariants}>
			<motion.img
				id='profile-pic' // Added ID for anime.js
				src='https://placehold.co/128x128/334155/E2E8F0?text=AB' // Placeholder for profile picture
				alt='Ashitosh Bhade Profile'
				className='rounded-full w-32 h-32 object-cover mx-auto mb-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl'
				onError={e => {
					e.currentTarget.src = "https://placehold.co/128x128/334155/E2E8F0?text=AB";
				}} // Fallback
				// Framer Motion animation props removed as anime.js handles it
			/>
			<h1
				id='portfolio-name' // Added ID for anime.js
				className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg'
				// Framer Motion animation props removed as anime.js handles it
			>
				Ashitosh Bhade
			</h1>
			<p
				id='portfolio-role' // Added ID for anime.js
				className='text-xl sm:text-2xl text-gray-300 mb-8'
				// Framer Motion animation props removed as anime.js handles it
			>
				Sr. Solutions Engineer | Blockchain Developer | dApp Developer
			</p>
			<motion.div
				className='flex justify-center space-x-4 flex-wrap gap-4' // Added flex-wrap and gap for responsiveness
				initial={{ opacity: 0, y: 20 }} // Kept Framer Motion for buttons
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1.8 }} // Adjusted delay to run after anime.js
			>
				<ButtonElement label='View Projects' buttonType={ButtonType.BLUE} onClick={() => handleNavLinkClick("projects")} />
				<ButtonElement label='Contact Me' buttonType={ButtonType.WHITE} onClick={() => handleNavLinkClick("contact-me")} />
				{/* Download CV Button */}
				<a href='/download/AshiitoshCV.pdf' download='AshiitoshCV.pdf' className='inline-block'>
					<ButtonElement
						label={
							<span className='flex items-center'>
								<Download className='mr-2 h-5 w-5' /> Download CV
							</span>
						}
						buttonType={ButtonType.GRAY}
					/>
				</a>
			</motion.div>
		</motion.section>
	);
};
