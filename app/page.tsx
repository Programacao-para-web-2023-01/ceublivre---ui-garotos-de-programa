"use client"

import { useEffect, useState } from "react";
import Produto from "./componentes/produto";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

type Produto = {
    key: string;
    firstKey: string;
    category: string;
    name: string;
    desctiption: string;
    price: number;
    image: string;
}

const pegaProduto = async () => {
    const response = await instance.get<Produto[]>("/product");
    return response.data
}

export default function TelaProduto(){
    const [products, setProducts] = useState<Produto[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await pegaProduto();
            console.log(response);
            setProducts(response);
        } catch(error){
            console.error(error);
        }
    };

    return(
        <main>
            {products.map((product) => (
                <div key={product.key}>
                    <Produto
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.desctiption}
                    />
                </div>
            ))}
        </main>
    );
}