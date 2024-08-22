import { Product } from "@/type"
import { Currency } from "./currency";
import { Button } from "./button";
import { ShoppingCartIcon } from "lucide-react";

interface Props {
    data: Product;
}

export const Info: React.FC<Props> = ({
    data
}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">
                {data.name}
            </h1>
            <div className="mt-3 items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />

                </p>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Size
                    </h3>
                    <div className="">
                        {data?.size?.name}
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Color
                    </h3>
                    <div className="h-6 w-6 rounded-full border"
                        style={{
                            backgroundColor: `${data?.color?.value}`
                        }}>
                    </div>
                   
            </div>

            <div className=""> 
                        <Button className="flex items-center gap-x-2 text-white">
                            Add to Cart 
                            <ShoppingCartIcon/>
                        </Button>
                </div>
        </div>

        </div>
    )

}