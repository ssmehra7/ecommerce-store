import { Product } from "@/type"; 

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`; 

const getProduct = async (id: string): Promise<Product> => {
    try {
        const res = await fetch(`${url}/${id}`);
        
        if (!res.ok) {
            throw new Error('Failed to fetch the Product data');
        }
        
        return res.json();
    } catch (error) {
        console.error('Error fetching Product:', error);
        throw error;
    }
};

export default getProduct;
