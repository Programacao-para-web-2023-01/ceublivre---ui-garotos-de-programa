"use client"

import Produto from "@/app/componentes/produto";
import {usePathname} from "next/navigation";

async function pegaProdutoKey(key: string){
    return fetch(`http://127.0.0.1:8000/product/${key}`).
    then((response) => response.json());
}

export default async function TelaProduto(){
    const pathname = usePathname();
    const produto = await pegaProdutoKey(pathname.replace('/pages/produtos/', ''));

    return(
        <div>
            <Produto
                image={produto.image}
                name={produto.name}
                price={produto.price}
                description={produto.description}
            />
        </div>
    )
}