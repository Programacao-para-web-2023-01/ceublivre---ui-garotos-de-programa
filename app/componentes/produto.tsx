import Image from "next/image";
import {describe} from "node:test";


export interface produtoInterface{
    name: string;
    price: number;
    image: string;
    description?: string;
}

export default function Produto({name, price, image, description}:produtoInterface){
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);

    return(
        <>
        <div>
            <h1>{name}</h1>
            <Image src={`/${image}`} alt={name} width={400} height={300}/>
            <p>{formattedPrice}</p>
            <p>{description}</p>
        </div>
        </>
    )
}