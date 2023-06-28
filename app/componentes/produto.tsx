import Image from "next/image";


export interface produtoInterface{
    name: string;
    price: number;
    image: string;
}



export default function Produto({name, price, image}:produtoInterface){
    
    return(
        <>
        <div>
            <Image src={`/${image}`} alt={name} width={300} height={200}/>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
        </>
    )
}