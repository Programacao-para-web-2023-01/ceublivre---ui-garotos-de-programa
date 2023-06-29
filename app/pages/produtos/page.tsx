"use client"

import { useEffect, useState } from "react";
import Produto from "@/app/componentes/produto";
import Link from "next/link";
import axios from "axios";
import {AdicionarCarrinho} from "@/app/componentes/addToCart";
import BuscaProdutoComponent from "@/app/componentes/buscaProduto";


const instance = axios.create({
    baseURL: 'https://ceublivreapi-1-m0315087.deta.app'
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
    const [searchTerm, setSearchTerm] = useState("");

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
    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <>
            <BuscaProdutoComponent onSearch={handleSearch} />
            <main className="flex flex-col ">
                {filteredProducts.map((product) => (
                    <div key={product.key} className="product-card">
                        <br />
                        <Produto
                            name={product.name}
                            image={product.image}
                            price={product.price}
                        />
                        <AdicionarCarrinho />
                        <Link className="button float-left" href={`/pages/produtos/${product.key}`}>Mais informações</Link>
                    </div>
                ))}
            </main>
        </>
    );
}