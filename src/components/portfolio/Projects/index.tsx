import { motion } from "framer-motion";
import { ExternalLink, FileText, Github } from "lucide-react";
import { TechStackDisplay } from "../Skills";
import { cardAnimationVariants, containerVariants, itemVariants } from "../variants";

export interface IProject {
	id: string;
	title: string;
	imageUrl: string;
	liveLink: string | null;
	problemSolved: string;
	myRole: string;
	keyFeatures: string;
	techStack: string;
	thirdPartyServices: string | null;
	githubLink: string | null;
	caseStudyLink: string | null;
}

// Project Data
export const projectsData: IProject[] = [
	{
		id: "cityverse-tycoon",
		title: "Cityverse Tycoon",
		imageUrl: "https://placehold.co/600x300/334155/E2E8F0?text=Cityverse+Tycoon",
		liveLink: "https://www.cityversetycoon.com/",
		problemSolved: "Enabled seamless Web3 game interactions with advanced wallet and payment solutions.",
		myRole: "Fullstack Developer, UI development, Smart Contract Creation and Integration, Secondary Marketplace Integration, NFT Checkouts, POCs.",
		keyFeatures:
			"Vanills js UI development, Thirdweb passkey login, Google account based smart wallet generation, Crossmint NFT checkout (credit cards/crypto), Reservoir secondary marketplace, ERC4337 sponsored transactions, AI Avatar host (Heygen/OpenAI), POCs for transforming ideas to well working solutions.",
		techStack: "Javascript, Typescript, React.js, Solidity, Thirdweb, Crossmint, Next.js, Tailwind CSS, Reservoir",
		thirdPartyServices: "Thirdweb, Reservoir, Crossmint, Heygen, OpenAI, Vercel",
		githubLink: null, // Placeholder
		caseStudyLink: null // Placeholder
	},
	{
		id: "blink-planet",
		title: "Blink Planet",
		imageUrl: "https://placehold.co/600x300/334155/E2E8F0?text=Blink+Planet",
		liveLink: "https://www.blinkplanet.com/",
		problemSolved: "Created a robust NFT marketplace for diverse token types with seamless user experience.",
		myRole:
			"dApp Developer, Smart Contract Development, UI Integration, Event Monitoring, Wallet Connect Integration, API Development and Integration, NFT Marketplace Integration, Payment Integration.",
		keyFeatures:
			"Credit Card & Crypto NFT Checkout, Multichain Support, MultiCurrency Support, NFT Collections, NFT Challengs, NFT Drops, NFT marketplace (ERC721/ERC1155), Wallet Integration, Dynamic NFT collection factory contract.",
		techStack: "Javascript, Typescript, React.js, Node.js, Nest.js, Solidity, Chai, Truffle, Hardhat, Material UI, Blockchains, Postgres, IPFS",
		thirdPartyServices: "Chainlink, Magic",
		githubLink: null, // Placeholder
		caseStudyLink: null // Placeholder
	},
	{
		id: "pumapay",
		title: "PumaPay",
		imageUrl: "https://placehold.co/600x300/334155/E2E8F0?text=PumaPay",
		liveLink: "https://app.pumapay.io/#/connect",
		problemSolved: "Automated recurring blockchain payments and token swaps for various billing models.",
		myRole: "Smart Contract Developer, Fronted Developer, Subgraph Developer. Event Monitoring, Chainlink Upkeeps Integration.",
		keyFeatures:
			"Blockchain based subscription models, Automated recurring payments, dApp development, Chainlink Upkeeps integration, Uniswap/SushiSwap DEX integration for token swaps.",
		techStack: "Javascript, Typescript, React.js, Nest.js, Subgraph, Solidity, Chai, Truffle",
		thirdPartyServices: "Chainlink, The Graph, Uniswap, SushiSwap",
		githubLink: null, // Placeholder
		caseStudyLink: null // Placeholder
	},
	{
		id: "la-cucina",
		title: "La-Cucina",
		imageUrl: "https://placehold.co/600x300/334155/E2E8F0?text=La-Cucina",
		liveLink: "https://app.lacucina.io/dashboard",
		problemSolved: "Developed a comprehensive Web3 external farming solution for staking and yield farming by leveraging onchain unique NFTs and tokenomics.",
		myRole:
			"Designed product architecture, developed ERC721/ERC1155 NFT contracts with royalties, built the marketplace, developed subgraphs, and integrated UI with blockchain.",
		keyFeatures: "ERC721/ERC1155 Unique NFT contracts with ERC2981 royalties, NFT marketplace, Crypto Payment, External Farming, Staking, Vaults.",
		techStack: "Javascript, Typescript, React.js, GraphQL, Solidity, Chai, Truffle, IPFS, BSC Chain",
		thirdPartyServices: "The Graph, Pinata, IPFS",
		githubLink: null, // Placeholder
		caseStudyLink: null // Placeholder
	},
	{
		id: "zapper-fi",
		title: "Zapper.fi",
		imageUrl: "https://placehold.co/600x300/334155/E2E8F0?text=Zapper.fi",
		liveLink: "https://zapper.xyz/",
		problemSolved: "Simplified liquidity provision/removal across multiple DeFi protocols with single-token interactions.",
		myRole: 'Developed and tested smart contracts for "zap-in" and "zap-out" functionalities.',
		keyFeatures:
			"Zap-in/zap-out contracts for Uniswap, Bancor, Curve, Balancer, SushiSwap, single-token liquidity provision/removal, ICO contract with Biconomy meta-transaction support.",
		techStack: "Ethereum, Truffle, Solidity, Chai, Node.js",
		thirdPartyServices: null,
		githubLink: null, // Placeholder
		caseStudyLink: null // Placeholder
	},
	{
		id: "real-asset",
		title: "Real Asset",
		imageUrl: "https://placehold.co/600x300/334155/E2E8F0?text=Real+Asset",
		liveLink: null,
		problemSolved: "Established a decentralized autonomous organization (DAO) and a custom token for real asset management.",
		myRole: "Created ERC20 token and DAO contract.",
		keyFeatures: "ERC20 token creation, DAO contract implementation for decentralized governance.",
		techStack: "Ethereum, Truffle, Solidity, Chai",
		thirdPartyServices: null,
		githubLink: null, // Placeholder
		caseStudyLink: null // Placeholder
	}
];

// Project Card Component
interface ProjectCardProps {
	project: (typeof projectsData)[0]; // Type based on the project data structure
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.div
			className='w-full bg-gradient-to-r from-[#1e293b] via-[#2b3243] to-[#1e293b] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ amount: 0.3, once: true }} // Animate when 30% in view, only once
			variants={cardAnimationVariants}>
			<motion.img
				src={project.imageUrl}
				alt={project.title}
				className='w-full h-48 object-cover' // Fixed height for consistency
				onError={e => {
					e.currentTarget.src = `https://placehold.co/600x300/334155/E2E8F0?text=${encodeURIComponent(project.title)}`;
				}}
			/>
			<div className='p-6'>
				<h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
				{project.liveLink && (
					<p className='text-blue-400 mb-2 flex items-center'>
						<ExternalLink className='h-4 w-4 mr-1' />
						<a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='hover:underline'>
							Live Link
						</a>
					</p>
				)}
				{project.githubLink && (
					<p className='text-blue-400 mb-2 flex items-center'>
						<Github className='h-4 w-4 mr-1' />
						<a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='hover:underline'>
							GitHub Repo
						</a>
					</p>
				)}
				{project.caseStudyLink && (
					<p className='text-blue-400 mb-2 flex items-center'>
						<FileText className='h-4 w-4 mr-1' />
						<a href={project.caseStudyLink} target='_blank' rel='noopener noreferrer' className='hover:underline'>
							Case Study
						</a>
					</p>
				)}

				<div className='mt-4 text-gray-300 text-base space-y-3'>
					{/* {project.problemSolved && (
						<div>
							<strong>Problem Solved:</strong> {project.problemSolved}
						</div>
					)} */}
					{project.myRole && (
						<div>
							<strong>My Role:</strong> {project.myRole}
						</div>
					)}
					{project.keyFeatures && (
						<div>
							<strong>Key Features:</strong> {project.keyFeatures}
						</div>
					)}
					{project.techStack && (
						<div>
							<strong>Tech Stack:</strong> <TechStackDisplay techStackString={project.techStack} />
						</div>
					)}
					{project.thirdPartyServices && (
						<div>
							<strong>Third Party Services Used:</strong> <TechStackDisplay techStackString={project.thirdPartyServices} />
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export const Projects = () => {
	return (
		<motion.section
			id='projects'
			className='w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
			variants={containerVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				Major Projects
			</motion.h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
				{" "}
				{/* Responsive grid for projects */}
				{projectsData.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</motion.section>
	);
};
