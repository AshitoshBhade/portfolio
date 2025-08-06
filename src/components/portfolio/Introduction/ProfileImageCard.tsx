"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ProfileImageCard = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30, rotate: 5 }}
			animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, type: "spring", bounce: 0.7, ease: "easeInOut" } }}
			className='relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] mx-auto'>
			{/* Purple tilted background card */}
			{/* <div className='absolute inset-0 rounded-[30px] bg-purple-600 rotate-1 z-0' /> */}

			{/* Profile Image */}
			<div className='relative z-10 overflow-hidden rounded-[30px]'>
				<Image
					src='/profile-ashitosh.png' // replace with your actual image path
					alt='Profile'
					width={450}
					height={450}
					className='w-full h-[450px] object-cover'
					priority
				/>
			</div>
		</motion.div>
	);
};
