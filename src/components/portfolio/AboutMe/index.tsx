import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { containerVariants, itemVariants, sectionVariants } from "../variants";

export const AboutMe = () => {
	return (
		<motion.section
			id='about-me'
			className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }} // Animate when 30% of section is in view
			variants={sectionVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				About Me
			</motion.h2>
			<motion.p className='text-lg text-gray-300 leading-relaxed' variants={itemVariants}>
				Innovative and detail-oriented Solutions Engineer with deep expertise in blockchain technologies. Skilled in architecting decentralized applications,
				designing smart contracts, and building full-stack Web3 solutions. Strong foundation in Solidity, JavaScript, TypeScript, React.js, Node.js, Next.js,
				Web3.js, and Ethers.js. Proven ability to translate complex product requirements into scalable blockchain products.
			</motion.p>
			<motion.h3 className='text-2xl font-bold text-white mt-8 mb-4' variants={itemVariants}>
				Education
			</motion.h3>
			<motion.div className='grid grid-cols-1 md:grid-cols-2 gap-6' variants={containerVariants}>
				<motion.div
					className='p-6 bg-gray-700 rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl flex items-start space-x-4'
					variants={itemVariants}>
					<GraduationCap className='h-8 w-8 text-blue-400 flex-shrink-0 mt-1' />
					<div>
						<h4 className='text-xl font-semibold text-white'>Diploma in Information Technology</h4>
						<p className='text-gray-300'>Government Polytechnic, Pune</p>
					</div>
				</motion.div>
				<motion.div
					className='p-6 bg-gray-700 rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl flex items-start space-x-4'
					variants={itemVariants}>
					<GraduationCap className='h-8 w-8 text-blue-400 flex-shrink-0 mt-1' />
					<div>
						<h4 className='text-xl font-semibold text-white'>Bachelor of Engineering in Computer Science</h4>
						<p className='text-gray-300'>Vishwakarma Institute of Information Technology (VIIT), Pune</p>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
