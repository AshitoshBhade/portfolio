import { motion } from "framer-motion";
import {
	Blocks,
	Bolt,
	Book,
	Brain,
	ClipboardList,
	Cloud,
	Code,
	Coins,
	CreditCard,
	Database,
	GitCommit,
	GitFork,
	GitGraph,
	Globe,
	Hammer,
	Key,
	LayoutDashboard,
	Link,
	Mic,
	Paintbrush,
	PenTool,
	Plug,
	RefreshCw,
	Rocket,
	Server,
	ShieldCheck,
	ShoppingCart,
	TestTube,
	Users,
	Wallet
} from "lucide-react";
import { containerVariants, itemVariants, sectionVariants } from "../variants";

export const getTechIcon = (techName: string) => {
	switch (techName.toLowerCase().trim()) {
		case "javascript":
			return <Code className='h-5 w-5 text-yellow-400' />;
		case "typescript":
			return <Code className='h-5 w-5 text-blue-400' />;
		case "react.js":
			return <Code className='h-5 w-5 text-cyan-400' />;
		case "next.js":
			return <Code className='h-5 w-5 text-white' />;
		case "vue.js":
			return <Code className='h-5 w-5 text-green-400' />;
		case "tailwind css":
			return <Code className='h-5 w-5 text-teal-400' />;
		case "styled components":
			return <Code className='h-5 w-5 text-pink-400' />;
		case "web3modal":
			return <Wallet className='h-5 w-5 text-purple-400' />;
		case "walletconnect":
			return <Wallet className='h-5 w-5 text-blue-400' />;

		case "node.js":
			return <Server className='h-5 w-5 text-green-400' />;
		case "express":
			return <Server className='h-5 w-5 text-gray-400' />;
		case "postgresql":
			return <Database className='h-5 w-5 text-blue-400' />;
		case "mongodb":
			return <Database className='h-5 w-5 text-green-400' />;
		case "rest apis":
			return <Plug className='h-5 w-5 text-gray-500' />;
		case "graphql":
			return <GitGraph className='h-5 w-5 text-pink-400' />;
		case "firebase":
			return <Cloud className='h-5 w-5 text-orange-400' />;
		case "gcp":
			return <Cloud className='h-5 w-5 text-blue-400' />;
		case "aws lambda":
			return <Cloud className='h-5 w-5 text-orange-300' />;

		case "solidity":
			return <Blocks className='h-5 w-5 text-gray-400' />;
		case "hardhat":
			return <Hammer className='h-5 w-5 text-gray-500' />;
		case "foundry":
			return <Hammer className='h-5 w-5 text-red-400' />;
		case "ethers.js":
			return <Code className='h-5 w-5 text-blue-400' />;
		case "web3.js":
			return <Code className='h-5 w-5 text-orange-400' />;
		case "viem":
			return <Code className='h-5 w-5 text-blue-500' />;
		case "ipfs":
			return <Cloud className='h-5 w-5 text-blue-300' />;
		case "pinata":
			return <Cloud className='h-5 w-5 text-green-300' />;
		case "filecoin":
			return <Cloud className='h-5 w-5 text-purple-300' />;
		case "chainlink":
			return <Link className='h-5 w-5 text-blue-300' />;
		case "alchemy":
			return <Blocks className='h-5 w-5 text-purple-500' />;
		case "infura":
			return <Blocks className='h-5 w-5 text-blue-500' />;
		case "erc-20":
			return <Coins className='h-5 w-5 text-green-400' />;
		case "erc-721":
			return <Blocks className='h-5 w-5 text-red-400' />;
		case "erc-1155":
			return <Blocks className='h-5 w-5 text-yellow-400' />;
		case "erc20":
			return <Coins className='h-5 w-5 text-green-400' />;
		case "erc721":
			return <Blocks className='h-5 w-5 text-red-400' />;
		case "erc1155":
			return <Blocks className='h-5 w-5 text-yellow-400' />;
		case "erc2981":
			return <Blocks className='h-5 w-5 text-orange-400' />;
		case "erc4337":
			return <Wallet className='h-5 w-5 text-purple-400' />;
		case "eip-4337":
			return <Wallet className='h-5 w-5 text-purple-400' />;
		case "account abstraction":
			return <Wallet className='h-5 w-5 text-purple-400' />;
		case "seaport":
			return <ShoppingCart className='h-5 w-5 text-blue-400' />;
		case "reservoir":
			return <Database className='h-5 w-5 text-orange-400' />;
		case "crossmint":
			return <CreditCard className='h-5 w-5 text-indigo-400' />;
		case "thirdweb":
			return <Globe className='h-5 w-5 text-green-400' />;
		case "uniswap":
			return <Coins className='h-5 w-5 text-pink-400' />;
		case "sushiswap":
			return <Coins className='h-5 w-5 text-orange-400' />;
		case "coinbase":
			return <Wallet className='h-5 w-5 text-blue-500' />;
		case "openzeppelin":
			return <ShieldCheck className='h-5 w-5 text-green-500' />;
		case "polygon":
			return <Blocks className='h-5 w-5 text-purple-400' />;
		case "ethereum":
			return <Blocks className='h-5 w-5 text-gray-400' />;
		case "bsc":
			return <Blocks className='h-5 w-5 text-yellow-400' />;
		case "base":
			return <Blocks className='h-5 w-5 text-blue-400' />;
		case "pixi.js":
			return <Paintbrush className='h-5 w-5 text-red-400' />;
		case "vite":
			return <Bolt className='h-5 w-5 text-purple-400' />;
		case "vercel":
			return <Cloud className='h-5 w-5 text-white' />;
		case "heygen":
			return <Mic className='h-5 w-5 text-gray-400' />;
		case "openai":
			return <Brain className='h-5 w-5 text-green-300' />;
		case "biconomy":
			return <Key className='h-5 w-5 text-green-400' />;

		case "git":
			return <GitFork className='h-5 w-5 text-orange-500' />;
		case "ci/cd":
			return <RefreshCw className='h-5 w-5 text-green-500' />;
		case "agile":
			return <Users className='h-5 w-5 text-blue-500' />;
		case "scrum":
			return <Users className='h-5 w-5 text-green-500' />;
		case "jira":
			return <ClipboardList className='h-5 w-5 text-blue-500' />;
		case "lucidchart":
			return <LayoutDashboard className='h-5 w-5 text-purple-500' />;
		case "postman":
			return <Rocket className='h-5 w-5 text-orange-500' />;
		case "confluence":
			return <Book className='h-5 w-5 text-blue-500' />;
		case "figma":
			return <PenTool className='h-5 w-5 text-pink-500' />;
		case "jest":
			return <TestTube className='h-5 w-5 text-red-500' />;
		case "mocha":
			return <TestTube className='h-5 w-5 text-brown-500' />; // brown for mocha
		case "github actions":
			return <GitCommit className='h-5 w-5 text-blue-500' />;
		case "netlify":
			return <Cloud className='h-5 w-5 text-teal-500' />;

		default:
			return null; // No specific icon
	}
};

export const TechStackDisplay = ({ techStackString }: { techStackString: string }) => {
	const techItems = techStackString.split(",").map(item => item.trim());

	return (
		<motion.div className='flex flex-wrap gap-2 mt-2' variants={containerVariants} initial='hidden' animate='visible'>
			{techItems.map((tech, index) => {
				const icon = getTechIcon(tech);
				return (
					<motion.span
						key={index}
						className='flex items-center bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-all duration-200 hover:bg-blue-600 hover:text-white'
						variants={itemVariants}>
						{icon && <span className='mr-1'>{icon}</span>}
						{tech}
					</motion.span>
				);
			})}
		</motion.div>
	);
};

export const Skills = () => {
	return (
		<motion.section
			id='skills'
			className='w-full max-w-4xl rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				Technical Skills
			</motion.h2>

			<motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} className='mb-8' variants={containerVariants}>
				<motion.h3 className='text-2xl font-bold text-white mb-4' variants={itemVariants}>
					Blockchain Expertise
				</motion.h3>
				<motion.ul className='list-none list-inside text-lg text-gray-300 space-y-4' variants={containerVariants}>
					<motion.li variants={itemVariants}>
						<strong>ERCs:</strong> <TechStackDisplay techStackString='ERC1155, ERC721, ERC20, ERC2981, ERC4337' />
					</motion.li>
					<motion.li variants={itemVariants}>
						<strong>Tools:</strong>{" "}
						<TechStackDisplay techStackString='Truffle, Hardhat, Foundry, Solidity, Web3.js, Ether.js, Chai.js, IPFS, Subgraphs, Viem, Wagmi, Metamask' />
					</motion.li>
					<motion.li variants={itemVariants}>
						<strong>Third Party Integrations:</strong>{" "}
						<TechStackDisplay techStackString='Thirdweb, Reservoir, Crossmint, Magic.link, Heygen, Chainlink, Uniswap, Sushiswap, Coinbase, OpenZeppelin' />
					</motion.li>
					<motion.li variants={itemVariants}>
						<strong>Chains:</strong> <TechStackDisplay techStackString='Polygon, Ethereum, BSC, Base' />
					</motion.li>
					<motion.li variants={itemVariants}>
						<strong>Expertises:</strong> Smart contracts, NFTs, Marketplace, ICO, Vaults, Airdrops, Yield farming, DeFi, External Farming, Upgradable Smart
						Contracts, DAO, Smart Wallets, Token Bridges, Automated Payments.
					</motion.li>
				</motion.ul>
			</motion.div>

			<motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} className='mb-8' variants={containerVariants}>
				<motion.h3 className='text-2xl font-bold text-white mb-4' variants={itemVariants}>
					Languages and Frameworks
				</motion.h3>
				<motion.ul className='list-none list-inside text-lg text-gray-300 space-y-2' variants={containerVariants}>
					<motion.li variants={itemVariants}>
						<TechStackDisplay techStackString='Javascript, Typescript, Node.js, Next.js, Solidity, React.js, Tailwind, CSS' />
					</motion.li>
				</motion.ul>
			</motion.div>

			<motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
				<motion.h3 className='text-2xl font-bold text-white mb-4' variants={itemVariants}>
					Other Technical Expertise
				</motion.h3>
				<motion.ul className='list-none list-inside text-lg text-gray-300 space-y-2' variants={containerVariants}>
					<motion.li variants={itemVariants}>
						<TechStackDisplay techStackString='Git, REST APIs, CI/CD, ChatGPT,Openai' />
					</motion.li>
					<motion.li variants={itemVariants}>
						<strong>Lifecycle Management:</strong> <TechStackDisplay techStackString='Agile, Scrum' />
					</motion.li>
					<motion.li variants={itemVariants}>
						<strong>Tools:</strong>{" "}
						<TechStackDisplay techStackString='Jira, LucidChart, Postman, Confluence, Figma, Vercel, VsCode, Github, Browserstack, OpenAI' />
					</motion.li>
				</motion.ul>
			</motion.div>
		</motion.section>
	);
};
