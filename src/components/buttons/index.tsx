import { useMemo } from "react";
import { ButtonType } from "./types";

export interface ButtonWhiteProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "name"> {
	label: React.ReactNode;
	buttonType: ButtonType;
}

export const ButtonElement = ({ label, buttonType, ...props }: ButtonWhiteProps) => {
	const buttonStyle = useMemo(() => {
		switch (buttonType) {
			case ButtonType.WHITE:
				return "text-blue-500 font-semibold text-lg rounded-full px-10 py-4 bg-[#f0f0f3] shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff] transition-all duration-300 hover:shadow-none hover:bg-gray-200";
			case ButtonType.BLUE:
				return "text-white font-semibold text-lg rounded-2xl px-10 py-4 shadow-lg bg-gradient-to-b from-blue-500 to-blue-600 hover:shadow-xl transition-all duration-300";
			case ButtonType.RED:
				return "text-white font-semibold text-lg rounded-2xl px-10 py-4 shadow-lg bg-gradient-to-b from-red-400 to-red-500 hover:shadow-xl transition-all duration-300";
			case ButtonType.GRAY:
				return "text-white font-semibold text-lg rounded-2xl px-10 py-4 shadow-lg bg-gradient-to-b from-gray-500 to-gray-700 hover:shadow-xl transition-all duration-300";
			default:
				return "text-gray-800 font-semibold text-lg rounded-lg px-10 py-4 bg-gray-200 shadow-md";
		}
	}, [buttonType]);

	return (
		<button className={buttonStyle} {...props}>
			{label}
		</button>
	);
};
