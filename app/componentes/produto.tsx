import Image from "next/image";

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
            <img src='Image'/>
            <div>name</div>
            <div>price</div>
        </div>
    )
}