"use client"

import Produto from "@/app/componentes/produto";
import {usePathname} from "next/navigation";
import { AdicionarCarrinho } from "@/app/componentes/addToCart";

async function pegaProdutoKey(key: string){
    return fetch(`https://ceublivreapi-1-m0315087.deta.app/product/${key}`).
    then((response) => response.json());
}

export default async function TelaProduto(){
    const pathname = usePathname();
    const produto = await pegaProdutoKey(pathname.replace('/pages/produtos/', ''));

    return(
        <div className="product-card">
            <Produto 
                image={produto.image}
                name={produto.name}
                price={produto.price}
                description={produto.description}
            />
            <AdicionarCarrinho />
        </div>
    )
}