import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";



export default async function Home(){
    const products = await getProducts({isFeatured:true});
    const billboard = await getBillboard("8715b5c3-a906-4d0b-83df-40a5cd9a6b55")

    return (
        <div>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>
                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Featured Product" items={products}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}