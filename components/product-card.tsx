"use client"

import { Product } from "@/type"
import Image from "next/image"
import { IconBtn } from "./ui/icon-btn"
import { Expand, ShoppingCart } from "lucide-react"
import { Currency } from "./ui/currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
// import PreviewModal from "./preview-modal"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/useCart"

interface ProductCardProps {
    data:Product,
}

export const ProductCard:React.FC<ProductCardProps> =({
    data
})=>{

    const cart = useCart(); 
    const previeModal = usePreviewModal(); 
    const router = useRouter();
    const handleClick = () =>{
       router.push(`/product/${data?.id}`); 
    }

    const onPreview :MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation(); 
        previeModal.onOpen(data);
        console.log("hi there")
    }   



    
    const onAddtoCart :MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation(); 
        cart.addItem(data);
        console.log("hi form the cart"); 
    }   
    



    return(
        <div onClick={handleClick} className="bg-white border group cursor-pointer rounded-xl p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    alt="Images"
                    fill
                    className="aspect-square object-cover rounded-md"/>
                    <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                        <div className="flex gap-x-6 justify-center">
                            <IconBtn
                                onClick={onPreview}
                                icon={<Expand size={20} className="text-gray-600"/>}

                                />
                                 <IconBtn
                                onClick={onAddtoCart}
                                icon={<ShoppingCart size={20} className="text-gray-600"/>}

                                />
                        </div>
                    </div>
            </div>   

            {/*description*/}
            <div>
                <p className="font-semibold text-lg ">
                   {data.name} 
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>

            </div>

            {/* price */}

            <div className="flex items-center justify-between ">
                <Currency value={data.price}/>
            </div>

        </div>   
    )
}