import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { IProject, projectsData } from ".";
import { containerVariants, itemVariants } from "../variants";

export default function ProjectsList() {
	return (
		<motion.section
			id='projects'
			className='w-full max-w-4xl rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
			variants={containerVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				Major Projects
			</motion.h2>
			<div style={container}>
				{projectsData.map((project, index) => (
					<Card key={project.id} project={project} hueA={index * 40} hueB={index * 60} i={index} />
				))}
			</div>
		</motion.section>
	);
}

interface CardProps {
	project: IProject;
	hueA: number;
	hueB: number;
	i: number;
}

function Card({ project, hueA, hueB, i }: CardProps) {
	const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

	return (
		<motion.div className={`card-container-${i}`} style={cardContainer} initial='offscreen' whileInView='onscreen' viewport={{ amount: 0.8 }}>
			<div style={{ ...splash, background }} />
			<motion.div style={card} variants={cardVariants} className='card'>
				<img
					src={project.imageUrl}
					alt={project.title}
					style={{ width: "100%", height: 200, objectFit: "cover", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
				/>
				<div style={{ padding: 16, textAlign: "left" }}>
					<h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>{project.title}</h3>
					<p style={{ fontSize: 14, marginBottom: 6 }}>
						<strong>Problem:</strong> {project.problemSolved}
					</p>
					<p style={{ fontSize: 14, marginBottom: 6 }}>
						<strong>Role:</strong> {project.myRole}
					</p>
					<p style={{ fontSize: 14, marginBottom: 6 }}>
						<strong>Key Features:</strong> {project.keyFeatures}
					</p>
					<p style={{ fontSize: 14, marginBottom: 6 }}>
						<strong>Tech Stack:</strong> {project.techStack}
					</p>
					{project.liveLink && (
						<a href={project.liveLink} target='_blank' style={{ fontSize: 14, color: "blue" }}>
							Live Link
						</a>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
}

const cardVariants: Variants = {
	offscreen: {
		y: 300
	},
	onscreen: {
		y: 5,
		rotate: -5,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8
		}
	}
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const cardContainer: React.CSSProperties = {
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	paddingTop: 20,
	marginBottom: -120
};

const splash: React.CSSProperties = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	clipPath:
		'path("M 0 303.5 C 0 292.454 12.593 285.101 28 283.5 L 644 219.5 C 658.119 218.033 672 228.454 672 239.5 L 700 430 C 700 441.046 687.464 450 672 450 L 28 450 C 12.536 450 0 441.046 0 430 Z")'
};

const card: React.CSSProperties = {
	fontSize: 16,
	width: 500,
	height: "auto",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	borderRadius: 20,
	background: "#f5f5f5",
	color: "#333",
	paddingBottom: 16,
	boxShadow:
		"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
	transformOrigin: "10% 60%"
};

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
	margin: "100px auto",
	maxWidth: 700,
	paddingBottom: 100,
	width: "100%"
};
