"use client"

import React, { useEffect } from 'react'
import axios from 'axios';
import { Currency } from '@/components/ui/currency';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/useCart';
import { useSearchParams } from 'next/navigation';
import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import toast from 'react-hot-toast';

function Summary() {

    const items = useCart((state) => state.items);

    const removeAll = useCart((state) => state.removeAll);
    const searchParams = useSearchParams();

    useEffect(()=>{
        if(searchParams.get("success")){
            toast.success("Payment Completed");
            removeAll(); 
            
        }

        if(searchParams.get("canceled")){
            toast.error("Something went wrong");
        }
           
    },[searchParams, removeAll]);

    const total = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0)

    const onCheckOut = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
        });

        window.location = response.data.url;

    }


    // useEffect(() => {
    //     const loadRazorpayScript = () => {
    //       const script = document.createElement("script");
    //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
    //       script.async = true;
    //       script.onload = () => console.log("Razorpay script loaded");
    //       script.onerror = () => console.error("Failed to load Razorpay script");
    //       document.body.appendChild(script);
    //     };
    
    //     loadRazorpayScript();
    //   }, []);
    

    // const onCheckOut = async () => {
    //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
    //       productIds: items.map((item) => item.id),
    //     });
      
    //     const { id } = response.data;
      
    //     const options = {
    //       key: process.env.RAZORPAY_KEY_ID!,
    //       amount: total * 100, // Convert to paisa
    //       currency: "INR",
    //       name: "Your Store Name",
    //       description: "Order Description",
    //       order_id: id,
    //       handler: function (response) {
    //         // Handle successful payment here
    //         alert(`Payment successful: ${response.razorpay_payment_id}`);
    //       },
    //       prefill: {
    //         name: "Your Name",
    //         email: "your.email@example.com",
    //         contact: "9999999999",
    //       },
    //       notes: {
    //         address: "Your Address",
    //       },
    //       theme: {
    //         color: "#F37254",
    //       },
    //     };
      
    //     const razorpay = new window.Razorpay(options);
    //     razorpay.open();
    //   };
      



    return (
        <div className='mt-16 rounded-lg[ bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
            <h2 className='text-lg font-medium text-gray-900'>
                Order Summary
            </h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                    <div className='text-base font-medium text-gray-900'>
                        Order Total
                    </div>
                    <Currency value={total} />
                </div>

            </div>
            <Button onClick={onCheckOut} className='w-full mt-6 text-white'>
                Checkout
            </Button>
        </div>
    )
}

export default Summary
