
import { Product } from "@/type";
import toast from "react-hot-toast";
import { create } from "zustand"; 
import { createJSONStorage, persist } from "zustand/middleware";


interface CartStore{
   items:Product[]; 
   addItem:(data:Product) =>void; 
   removeItem:(id:string) =>void; 
   removeAll:()=>void;

}

const useCart = create(
    persist<CartStore>((set,get)=>({
        items:[],
        addItem:(data:Product) =>{
            const currentItems= get().items; 
            const existingItems = currentItems.find((item)=>item.id === data.id);

            if (existingItems){
                return toast("Item already in cart.");
            }

            set({items:[...get().items,data]}); 
            toast.success("Items added to cart");
        }, 

        removeItem:(id:string)=>{
            set({items:[...get().items.filter((item)=>item.id !== id)]}); 
            toast.success("Item removed from the card"); 
        }, 

        removeAll:()=>set({items :[]}),

    }), {
        name:"cart-storage", 
        storage:createJSONStorage(()=>localStorage)
    })
); 


  


export default useCart;