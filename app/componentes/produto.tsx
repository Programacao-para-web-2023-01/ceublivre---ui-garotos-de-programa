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
            <div>{{ name }}</div>

            <img src={{image}}/>
        </div>
    )
}