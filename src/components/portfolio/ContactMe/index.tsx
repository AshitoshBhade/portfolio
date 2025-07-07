import { motion } from "framer-motion";
import { containerVariants, itemVariants, sectionVariants } from "../variants";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export interface IContact {
	email: string;
	phone: string;
	github: string;
	linkedin: string;
}

const contactDetails: IContact = {
	email: "ashitosh.bhade@gmail.com",
	phone: "+91 9284309929",
	github: "https://github.com/ashitosh03",
	linkedin: "https://www.linkedin.com/in/ashitosh-bhade-41ba37105"
};

export const ContactMe = () => {
	return (
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
					<a href={`mailto:${contactDetails.email}`} className='text-blue-400 hover:underline ml-1'>
						{contactDetails.email}
					</a>
				</motion.p>
				<motion.p className='flex items-center justify-center' variants={itemVariants}>
					<Linkedin className='mr-2 h-5 w-5 text-blue-400' /> <strong>LinkedIn:</strong>{" "}
					<a href={`mailto:${contactDetails.linkedin}`} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline ml-1'>
						{contactDetails.linkedin}
					</a>
				</motion.p>
				<motion.p className='flex items-center justify-center' variants={itemVariants}>
					<Github className='mr-2 h-5 w-5 text-blue-400' /> <strong>GitHub:</strong>{" "}
					<a href={contactDetails.github} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline ml-1'>
						{contactDetails.github}
					</a>
				</motion.p>
				<motion.p className='flex items-center justify-center' variants={itemVariants}>
					<Phone className='mr-2 h-5 w-5 text-blue-400' /> <strong>Mobile:</strong>
					{contactDetails.phone}
				</motion.p>
			</motion.div>
		</motion.section>
	);
};
