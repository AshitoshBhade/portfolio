"use client";

import { motion, useSpring, useScroll } from "motion/react";
import AppComponent from "../portfolio";

export default function ScrollLinked() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	return (
		<>
			<motion.div
				id='scroll-indicator'
				style={{
					scaleX,
					position: "fixed",
					top: 70,
					left: 0,
					right: 0,
					height: 5,
					originX: 0,
					opacity: 0.8,
					backgroundImage: "linear-gradient(90deg, #00c6ff, #0072ff)",
					zIndex: 1000
				}}
			/>
			<AppComponent />
		</>
	);
}
