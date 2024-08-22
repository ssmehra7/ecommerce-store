import { cn } from "@/lib/util";
import { forwardRef } from "react";


export interface BtnProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{}



export const Button= forwardRef<HTMLButtonElement, BtnProps>(({
    className, 
    children , 
    disabled, 
    type= "button", 
    ...props
}, ref)=>{
    return(
        <button
            className={cn(
                `w-auto rounded-full bg-black border-transparent 
                px-5 py-2 disabled:cursor-not-allowed 
                disabled:opacity-50text-white font-semibold 
                hover:opacity-75 transition`, className
            )}
            ref={ref}
            {...props}
            >
          {children}  
        </button>
    )
}); 

Button.displayName = "Button"; 