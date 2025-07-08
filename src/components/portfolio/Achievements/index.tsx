import { motion } from "framer-motion";
import { containerVariants, itemVariants, sectionVariants } from "../variants";
import { Award } from "lucide-react";

export const Achievements = () => {
	return (
		<motion.section
			id='certifications'
			className='w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				Achievements & Certifications
			</motion.h2>
			<motion.ul className='list-disc list-inside text-lg text-gray-300 space-y-3' variants={containerVariants}>
				<motion.li variants={itemVariants} className='flex flex-wrap items-center'>
					<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
					Smart India Hackathon Runner Up (2017)
				</motion.li>
				<motion.li variants={itemVariants} className='flex items-center'>
					<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
					Army Institute of Technology Hackathon Winner (2018)
				</motion.li>
				<motion.li variants={itemVariants} className='flex items-center'>
					<Award className='mr-2 h-5 w-5 text-yellow-400 flex-shrink-0' />
					HackerRank Problem Solving Certification
					<a
						href='https://www.hackerrank.com/certificates/08e0646e091e'
						target='_blank'
						rel='noopener noreferrer'
						className='ml-2 text-blue-400 hover:underline'>
						View Credentials
					</a>
				</motion.li>
			</motion.ul>
		</motion.section>
	);
};
