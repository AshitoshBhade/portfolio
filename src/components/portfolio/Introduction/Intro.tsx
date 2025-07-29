import { ButtonElement } from "@/components/buttons";
import { ButtonType } from "@/components/buttons/types";
import { handleNavLinkClick } from "@/utils/handleNavClick";
import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
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
					className='text-l sm:text-xl text-gray-300 mb-1'
					// Framer Motion animation props removed as anime.js handles it
					initial={{ opacity: 0, y: 20 }} // Kept Framer Motion for buttons
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }} // Adjusted delay to run after anime.js
				>
					A professional Blockchain Developer.
				</motion.p>
				{/* <motion.a
					href='https://testnets.opensea.io/assets/base_sepolia/0x8214ba3739813d603f0f06be95e2ebcc947c1098/1'
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-400 block hover:text-blue-500 transition-colors mb-3'>
					Check me out on Opensea
				</motion.a> */}
				<motion.div
					className='flex flex-row flex-wrap justify-center space-x-4 flex-wrap gap-4' // Added flex-wrap and gap for responsiveness
					initial={{ opacity: 0, y: 20 }} // Kept Framer Motion for buttons
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.8 }} // Adjusted delay to run after anime.js
				>
					<ButtonElement label='Hire Me!' style={{ padding: "15px" }} buttonType={ButtonType.RED} onClick={() => handleNavLinkClick("contact-me")} />

					{/* Download CV Button */}
					<motion.a href='/AshitoshCV.pdf' download='AshitoshCV.pdf' className='inline-block'>
						<ButtonElement
							style={{ padding: "10px" }}
							label={
								<span className='flex items-center'>
									<Download className='mr-2 h-10 w-5' /> Download CV
								</span>
							}
							buttonType={ButtonType.GRAY}
						/>
					</motion.a>
				</motion.div>
			</motion.div>

			<ProfileImageCard />
		</motion.section>
	);
};
