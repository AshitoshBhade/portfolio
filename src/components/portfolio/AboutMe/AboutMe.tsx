import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { containerVariants, itemVariants, sectionVariants } from "../variants";
import { CountComponent } from "@/components/counts";

export const About = () => {
	return (
		<motion.section
			id='about-me'
			className='w-full max-w-4xl rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
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
					className='p-6 bg-gradient-to-r from-[#1e293b] via-[#2b3243] to-[#1e293b] rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl flex items-start space-x-4'
					variants={itemVariants}>
					<GraduationCap className='h-8 w-8 text-blue-400 flex-shrink-0 mt-1' />
					<div>
						<h4 className='text-xl font-semibold text-white'>Diploma in Information Technology</h4>
						<p className='text-gray-300'>Government Polytechnic, Pune</p>
					</div>
				</motion.div>
				<motion.div
					className='p-6 bg-gradient-to-r from-[#1e293b] via-[#2b3243] to-[#1e293b] rounded-lg shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl flex items-start space-x-4'
					variants={itemVariants}>
					<GraduationCap className='h-8 w-8 text-blue-400 flex-shrink-0 mt-1' />
					<div>
						<h4 className='text-xl font-semibold text-white'>Bachelor of Engineering in Computer Science</h4>
						<p className='text-gray-300'>Vishwakarma Institute of Information Technology (VIIT), Pune</p>
					</div>
				</motion.div>
			</motion.div>
			<motion.h3 className='text-2xl font-bold text-white mt-8 mb-4' variants={itemVariants}>
				Personal Info
			</motion.h3>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.3 }}
				variants={itemVariants}
				className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center'>
				<motion.div className='p-1 flex items-center flex-col w-[60px]' variants={itemVariants}>
					<p className='text-white-300 font-bold text-center mt-1'>English/Hindi/Marathi</p>
					<p className='text-gray-400 font-bold text-center mt-1'>Languages</p>
				</motion.div>
				<motion.div className='p-1 flex justify-center items-center flex-col w-[60px]' variants={itemVariants}>
					<p className='text-white-300 font-bold text-center mt-1'>Indian</p>
					<p className='text-gray-400 font-bold text-center mt-1'>Nationality</p>
				</motion.div>
				<motion.div className='p-1 flex justify-center items-center flex-col w-[60px]' variants={itemVariants}>
					<p className='text-white-300 font-bold text-center mt-1'>Pune</p>
					<p className='text-gray-400 font-bold text-center mt-1'>City</p>
				</motion.div>
			</motion.div>
			<motion.h3 className='text-2xl font-bold text-white mt-8 mb-4' variants={itemVariants}>
				Career Highlights
			</motion.h3>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.3 }} // Animate when 30% of section is in view
				variants={itemVariants}
				className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center'>
				<motion.div className='p-1 flex justify-center items-center flex-col w-[60px]' variants={itemVariants}>
					<CountComponent value={5} symbol='+' />
					<p className='text-gray-400 font-bold text-center mt-1'>Years of Experience</p>
				</motion.div>
				<motion.div className='p-1 flex justify-center items-center flex-col w-[60px]' variants={itemVariants}>
					<CountComponent value={10} symbol='+' />
					<p className='text-gray-400 font-bold text-center mt-1'>Total Projects</p>
				</motion.div>
				<motion.div className='p-1 flex justify-center items-center flex-col w-[60px]' variants={itemVariants}>
					<CountComponent value={95} symbol='%' />
					<p className='text-gray-400 font-bold text-center mt-1'>Client Satisfaction</p>
				</motion.div>
				<motion.div className='p-1 flex justify-center items-center flex-col w-[60px]' variants={itemVariants}>
					<CountComponent value={25} symbol='K+' />
					<p className='text-gray-400 font-bold text-center mt-1'> Contract Transactions</p>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
