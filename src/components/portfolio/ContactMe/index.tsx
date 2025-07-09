import { motion } from "framer-motion";
import { sectionVariants } from "../variants";
import GetInTouch from "./GetInTouch";

export default function ContactMe() {
	return (
		<motion.section
			id='contact-me'
			className='w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-8 text-center'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}>
			<GetInTouch />
		</motion.section>
	);
}
