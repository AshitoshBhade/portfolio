import { Variants } from "framer-motion";

export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};

// Framer Motion Variants for list item staggering
export const containerVariants: Variants = {
	visible: {
		transition: {
			staggerChildren: 0.1 // Stagger children by 0.1 seconds
		}
	}
};

// Framer Motion Variants for section entry animations
export const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const cardAnimationVariants: Variants = {
	offscreen: {
		y: 50, // Starts 100px below
		opacity: 0,
		rotate: 0 // No rotation for a professional look
	},
	onscreen: {
		y: 0, // Moves to original position
		opacity: 1,
		rotate: 0, // No rotation
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8
		}
	}
};
