"use client";

import { handleNavLinkClick } from "@/utils/handleNavClick";
import { Code, FolderGit2, Home, Mail, User } from "lucide-react";
import { HeaderItem, HeaderItemProps } from "./HeaderItem";
import MobileMenu from "./MobileMenu";

export const HeaderItemConfig: HeaderItemProps[] = [
	{
		label: "Home",
		href: "#hero",
		onClick: () => handleNavLinkClick("hero"),
		icon: <Home className='mr-2 h-5 w-5 sm:h-6 sm:w-6' />
	},
	{
		label: "About Me",
		href: "#about-me",
		onClick: () => handleNavLinkClick("about-me"),
		icon: <User className='mr-2 h-5 w-5 sm:h-6 sm:w-6' />
	},
	{
		label: "Skills",
		href: "#skills",
		onClick: () => {
			console.log("skills clicked");
			handleNavLinkClick("skills");
		},
		icon: <Code className='mr-2 h-5 w-5 sm:h-6 sm:w-6' />
	},
	{
		label: "Projects",
		href: "#projects",
		onClick: () => handleNavLinkClick("projects"),
		icon: <FolderGit2 className='mr-2 h-5 w-5 sm:h-6 sm:w-6' />
	},
	{
		label: "Contact Me",
		href: "#contact-me",
		onClick: () => handleNavLinkClick("contact-me"),
		icon: <Mail className='mr-2 h-5 w-5 sm:h-6 sm:w-6' />
	}
];
export const HeaderComponent = () => {
	return (
		<header className='w-full py-6 px-4 h-[80px] sm:px-6 lg:px-8 flex justify-between items-center sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg relative'>
			<div className='text-2xl font-bold text-white hidden md:block absolute left-8'>Ashitosh Bhade</div>

			{/* Desktop Navigation */}
			<nav className='hidden md:flex space-x-6 lg:space-x-10 ml-auto'>
				{HeaderItemConfig.map((item, i) => (
					<HeaderItem key={`nav-item-${i}`} {...item} />
				))}
			</nav>
			<MobileMenu />
		</header>
	);
};

export default HeaderComponent;
