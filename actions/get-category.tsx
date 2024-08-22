import { Category } from "@/type"; 

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`; 

const getCategory = async (id: string): Promise<Category> => {
    try {
        const res = await fetch(`${url}/${id}`);
        
        if (!res.ok) {
            throw new Error('Failed to fetch the Category data');
        }
        
        return res.json();
    } catch (error) {
        console.error('Error fetching Category:', error);
        throw error;
    }
};

export default getCategory;
