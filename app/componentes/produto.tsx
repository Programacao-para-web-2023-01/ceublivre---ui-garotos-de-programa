import Image from "next/image";
const url = 'http://127.0.0.1:8000';

export interface ProdutoProps{
    key: string;
    firstKey: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export default function Produto({key, firstKey, name, price, image, description}:ProdutoProps){
    return(
        <div>
            <Image src={url + '/' + {image}} alt="{name}" />
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}