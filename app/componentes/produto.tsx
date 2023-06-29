import Image from "next/image";
import {describe} from "node:test";


export interface produtoInterface{
    name: string;
    price: number;
    image: string;
    description?: string;
}

export default function Produto({name, price, image, description}:produtoInterface){
    
    return(
        <>
        <div>
            <Image src={`/${image}`} alt={name} width={300} height={200}/>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
        </>
    )
}