import { motion } from "framer-motion";
import { containerVariants, itemVariants, sectionVariants } from "../variants";

const testimonials = [
	{
		message:
			"Ashitosh is an exceptional blockchain developer. His ability to quickly understand complex requirements and deliver robust solutions is truly impressive. He was instrumental in integrating our Crossmint checkout, AI Assistant, Marketplaces, developing POCs for our products, exceeding expectations on turnaround time.",
		name: "Anonymous"
	},
	{
		message:
			"Working with Ashitosh was a seamless experience. His deep expertise in ERC-4337 and smart wallets allowed us to implement sponsored transactions, significantly improving user onboarding for our dApp.",
		name: "Anonymous"
	}
];
export const Testinomial = () => {
	return (
		<motion.section
			id='testimonials'
			className='w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				Testimonials & Collaborations
			</motion.h2>
			<motion.div className='text-lg text-gray-300 space-y-6' variants={containerVariants}>
				{testimonials.map((testimonial, index) => (
					<motion.blockquote key={`testimonial-${index}`} className='bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-500' variants={itemVariants}>
						<p className='italic mb-3'>{testimonial.message} </p>
						<footer className='font-semibold text-right'>- {testimonial.name}</footer>
					</motion.blockquote>
				))}
				<motion.p variants={itemVariants} className='text-center mt-6'>
					I thrive in collaborative environments, working closely with product, design, and engineering teams to translate complex ideas into scalable Web3
					products.
				</motion.p>
			</motion.div>
		</motion.section>
	);
};
