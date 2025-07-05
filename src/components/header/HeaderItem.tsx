export interface HeaderItemProps {
	href: string;
	icon: React.ReactNode;
	label: string;
	onClick: () => void;
}
export const HeaderItem = ({ href, icon, label, onClick }: HeaderItemProps) => {
	return (
		<a
			href={href}
			onClick={e => {
				e.preventDefault(); // Prevent default anchor jump
				onClick();
			}}
			className='flex items-center text-lg lg:text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300'>
			{icon} {label}
		</a>
	);
};
