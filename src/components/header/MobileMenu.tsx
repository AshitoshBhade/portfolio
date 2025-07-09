"use client";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { HeaderItemConfig } from ".";
import { HeaderItem, HeaderItemProps } from "./HeaderItem";

interface PathProps {
	d?: string;
	variants: Variants;
	transition?: { duration: number };
}

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

const navVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};

const sidebarVariants: Variants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: "circle(30px at 260px 40px)",
		transition: {
			delay: 0.2,
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
};

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const { height } = useDimensions(containerRef);

	const Path = (props: PathProps) => <motion.path fill='transparent' strokeWidth='3' stroke='hsl(0, 37.80%, 91.20%)' strokeLinecap='round' {...props} />;

	const MenuToggle = ({ toggle }: { toggle: () => void }) => (
		<button style={toggleContainer} onClick={toggle}>
			<svg width='32' height='32' viewBox='0 0 23 23'>
				<Path
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" }
					}}
				/>
				<Path
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 }
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" }
					}}
				/>
			</svg>
		</button>
	);

	const background: React.CSSProperties = {
		backgroundColor: `${isOpen ? "rgba(17, 24, 39, 0.95)" : "transparent"}`,
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		width: 300
	};
	return (
		<div className='md:hidden absolute right-2 top-1 z-50'>
			<div style={container}>
				<motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} style={nav}>
					<motion.div style={background} variants={sidebarVariants} />
					<Navigation />
					<MenuToggle toggle={() => setIsOpen(!isOpen)} />
				</motion.nav>
			</div>
		</div>
	);
}

const Navigation = () => (
	<motion.ul style={list} variants={navVariants}>
		{HeaderItemConfig.map(item => (
			<MenuItem {...item} key={item.label} />
		))}
	</motion.ul>
);

const MenuItem = ({ icon, label, href, onClick }: HeaderItemProps) => {
	return (
		<motion.li style={listItem} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onClick}>
			<HeaderItem href={href} icon={icon} label={label} onClick={onClick} />
		</motion.li>
	);
};

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
	position: "relative",
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "stretch",
	width: 200,
	height: 350,
	backgroundColor: "var(--accent)",
	borderRadius: 20,
	overflow: "hidden"
};

const nav: React.CSSProperties = {
	width: 300
};

const toggleContainer: React.CSSProperties = {
	outline: "none",
	border: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	cursor: "pointer",
	position: "absolute",
	top: 18,
	right: 15,
	width: 50,
	height: 50,
	borderRadius: "50%",
	background: "transparent"
};

const list: React.CSSProperties = {
	listStyle: "none",
	padding: 25,
	margin: 0,
	position: "absolute",
	top: 80,
	width: 230
};

const listItem: React.CSSProperties = {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	padding: 0,
	margin: 0,
	listStyle: "none",
	marginBottom: 20,
	cursor: "pointer"
};

/**
 * ==============   Utils   ================
 */

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		if (ref.current) {
			dimensions.current.width = ref.current.offsetWidth;
			dimensions.current.height = ref.current.offsetHeight;
		}
	}, [ref]);

	return dimensions.current;
};
