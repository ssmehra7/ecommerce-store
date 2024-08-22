import { cn } from "@/lib/util";
import { MouseEventHandler } from "react";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon: React.ReactElement;
    className?: string;  // Corrected to lowercase `string`
}

export const IconBtn: React.FC<IconButtonProps> = ({
    onClick,
    className,
    icon
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                `rounded-full
                flex
                items-center
                justify-center
                bg-white
                border
                shadow-md
                p-2
                hover:scale-110
                transition`,
                className 
            )}
        >
            {icon}
        </button>
    );
};
