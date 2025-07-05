export const handleNavLinkClick = (sectionId: string) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};
