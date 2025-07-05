"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export interface CountComponentProps {
	value: number;
	symbol?: string;
}
export const CountComponent = ({ value, symbol }: CountComponentProps) => {
	const count = useMotionValue(0);
	const rounded = useTransform(() => `${Math.round(count.get())}${symbol || ""}`);

	useEffect(() => {
		const controls = animate(count, value, { duration: 0.7, ease: "easeIn" });
		return () => controls.stop();
	}, [count, value]);

	return <motion.pre style={text}>{rounded}</motion.pre>;
};

/**
 * ==============   Styles   ================
 */

const text = {
	fontSize: 48,
	color: "#8df0cc"
};
