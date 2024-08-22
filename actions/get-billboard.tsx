import { BillBoard } from "@/type"; 

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`; 

const getBillboard = async (id: string): Promise<BillBoard> => {
    try {
        const res = await fetch(`${url}/${id}`);
        
        if (!res.ok) {
            throw new Error('Failed to fetch the billboard data');
        }
        
        return res.json();
    } catch (error) {
        console.error('Error fetching billboard:', error);
        throw error;
    }
};

export default getBillboard;
