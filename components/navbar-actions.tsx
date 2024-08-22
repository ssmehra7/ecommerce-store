"use client"

import { Button } from "@/components/ui/button"
import useCart from "@/hooks/useCart"
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export const NavbarActions =()=>{
    const [ isMounted, setIsMounted] = useState(false); 

    const router = useRouter(); 
    useEffect(()=>{
        setIsMounted(true); 
    },[]); 

    const cart = useCart(); 
    if (!isMounted){
        return null ; 
    }

    



    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={()=>{router.push("/cart")}} className="flex items-center rounded-lg bg-black px-4 py-2">
                    <ShoppingBag
                    size={20}
                    color="white"/>
                    <span className="ml-2 text-sm font-medium text-white">
                        {cart.items.length}
                    </span>
            </Button>
        </div>
    )
} 