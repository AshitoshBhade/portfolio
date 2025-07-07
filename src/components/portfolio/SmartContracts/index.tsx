import { motion } from "framer-motion";
import { containerVariants, itemVariants, sectionVariants } from "../variants";
import { Blocks, FileText, ShieldCheck, TestTube } from "lucide-react";

interface ISmartContractList {
	name: string;
	link: string;
}

const smartContracts: ISmartContractList[] = [
	{ name: "Private NFT Marketplace", link: "https://bscscan.com/address/0x485B49735Fca73CC209c0560d540B8Bd1f129604#code" },
	{ name: "Public NFT Marketplace", link: "https://bscscan.com/address/0x9959ce45173dD9F1ca07f6E1a3ff7e1A5e903f08#code" },
	{ name: "Ingredients NFT", link: "https://bscscan.com/address/0x2c3f816fB680Bbe745D085dC244CCf0737FcfB9A#code" },
	{ name: "Token Vault", link: "https://bscscan.com/address/0x6C5367897Ee3874e125350D925d8A5016b55b971#code" },
	{ name: "LaCuccina NFTs", link: "https://bscscan.com/address/0x6153A49a657e9D0138feC7f668f2AefAf5c5A4C2#code" },
	{ name: "Talien Traits Factory", link: "https://bscscan.com/address/0x98AEB5E5250e1488a123C971D456BF60D008fD37#code" },
	{ name: "Talien Giveaways", link: "https://bscscan.com/address/0xef1DC68909505646D7F0E4b11deA6f6F70c7e922#code" },
	{ name: "LaCuccina Kitchen", link: "https://bscscan.com/address/0x90C06025c1b28a59fcB3b82396a75f57e92DF5D4#code" },
	{ name: "LaCuccina Dishes", link: "https://bscscan.com/address/0x0142d3b6b241076635DAa5Bcf3bB7E94EC4E9594#code" },
	{ name: "LaCuccina Cooker", link: "https://bscscan.com/address/0x713564bca492914Ad56044043088929f321df466#code" },
	{ name: "Talien Accessories", link: "https://bscscan.com/address/0x93167F6b68386FE92a2C6BF6674EAC4156885cf9#code" },
	{ name: "Collection Factory", link: "https://polygonscan.com/address/0xA885335f989B2e9732f4Ba4B21F3219398490780#code" },
	{ name: "Collection Marketplace", link: "https://polygonscan.com/address/0x27C217bDa6655F3fE4aeEfd9a269591b6245a87c#code" }
];

export const SmartContracts = () => {
	return (
		<motion.section
			id='smart-contracts'
			className='w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 sm:p-10 lg:p-12 mb-16'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}>
			<motion.h2 className='text-3xl sm:text-4xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2' variants={itemVariants}>
				Smart Contract Expertise
			</motion.h2>
			<motion.div className='text-lg text-gray-300 space-y-4' variants={containerVariants}>
				<motion.p variants={itemVariants}>
					I specialize in full lifecycle smart contract development, from rigorous testing to secure deployment and meticulous verification across major
					blockchain networks.
				</motion.p>
				<motion.ul className='list-none list-inside space-y-4' variants={containerVariants}>
					<motion.li className='block space-y-2' variants={itemVariants}>
						<FileText className='inline-block mr-2 h-5 w-5 text-blue-400' />
						<strong>Verified Contracts:</strong> Here are my verified and deployed smart contracts on mainnets -
						<motion.div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 place-items-start' variants={containerVariants}>
							{smartContracts.map(contract => (
								<motion.div className='' key={contract.link} variants={itemVariants}>
									<motion.a href={contract.link} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
										🔗 {contract.name}
									</motion.a>
								</motion.div>
							))}
						</motion.div>
					</motion.li>
					<motion.li variants={itemVariants}>
						<ShieldCheck className='inline-block mr-2 h-5 w-5 text-green-400' />
						<strong>Security & Audits:</strong> My smart contracts have gone through rigorous security audits by third party auditors like{" "}
						<a href='https://pessimistic.io/' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
							Pessimistic
						</a>
						&nbsp; and have been verified.
					</motion.li>
					<motion.li variants={itemVariants}>
						<TestTube className='inline-block mr-2 h-5 w-5 text-red-400' />
						<strong>Test Coverage:</strong> Achieved more than 97% test coverage for smart contracts using the chai.js, hardhat and truffle frameworks.
					</motion.li>
					<motion.li variants={itemVariants}>
						<Blocks className='inline-block mr-2 h-5 w-5 text-purple-400' />
						<strong>Contract Types:</strong> Expertise in ERC-20, ERC-721 (with lazy minting, royalty support), ERC-1155, ERC-2981, ERC-4337 (Account
						Abstraction), ICOs, Giveaways, DAOs, Marketplaces, Bridges, Vaults, Staking, Farming, Swaps and more.
					</motion.li>
				</motion.ul>
			</motion.div>
		</motion.section>
	);
};
