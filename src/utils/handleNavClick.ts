export const handleNavLinkClick = (sectionId: string) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

export const isMobile = () => {
	return /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.innerWidth <= 768;
};
