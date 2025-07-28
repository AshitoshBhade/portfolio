import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { SiOpensea } from "react-icons/si";

export interface IContact {
	name: string;
	icon: React.ReactNode;
	link: string;
}

const contactDetails: IContact[] = [
	{ name: "Email", icon: <FaEnvelope size={24} />, link: "mailto:ashitosh.bhade@gmail.com" },
	{ name: "LinkedIn", icon: <FaLinkedin size={24} />, link: "https://linkedin.com/in/ashitosh-bhade-41ba37105" },
	{ name: "Github", icon: <FaGithub size={24} />, link: "https://github.com/AshitoshBhade" },
	{ name: "Phone", icon: <FaPhone size={24} />, link: "https://wa.me/+919284309929" },
	{ name: "Opensea", icon: <SiOpensea size={24} />, link: "https://testnets.opensea.io/assets/base_sepolia/0x8214ba3739813d603f0f06be95e2ebcc947c1098/1" }
];

export const Contacts = () => {
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { staggerChildren: 0.2 }
				}
			}}
			className='flex justify-center items-center gap-6 flex-wrap'>
			{contactDetails.map(({ icon, link }, idx) => (
				<motion.a
					key={idx}
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='p-4 rounded-full bg-[#1e293b] text-blue-400 hover:bg-blue-600 hover:text-white transition-colors'
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}>
					{icon}
				</motion.a>
			))}
		</motion.div>
	);
};
