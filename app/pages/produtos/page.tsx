"use client"

import { useEffect, useState } from "react";
import Produto from "@/app/componentes/produto";
import Link from "next/link";
import axios from "axios";


export interface ProdutoInterface{
    key: string;
    firstKey: string;
    category: string;
    name: string;
    desctiption: string;
    price: number;
    image: string;
}

async function pegaProduto(): Promise<ProdutoInterface[]>{
    const data = await fetch(`http://127.0.0.1:8000/product`).
    then((response) => response.json())
    
    return data;
}

export default async function TelaProduto(){
    const products = await pegaProduto();

    
    return(
        <>
            <header>
                <input type="text" id="barra_buscas"/>
            </header>
            <main className="flex flex-col ">
                {products.map((product) => (
                    <div key={product.key}>
                        <Produto
                            image={product.image}
                            name={product.name}
                            price={product.price}
                         />
                         <Link href={`/pages/produtos/${product.key}`}>Mais informações</Link>
                    </div>
                ))}
            </main>
        </>
    );
}