import Produto from "@/app/componentes/produto";
import { ProdutoInterface } from "../page";

async function pegaProdutoKey(key: string){
    
    return fetch(`http://127.0.0.1:8000/product/${key}`).
    then((response) => response.json());
}

export default async function produtoKey({parametros}:{parametros:{key: string}}){

    if (!parametros || !parametros.key) {
        console.log(parametros);
        return <div>Erro: Parâmetro ausente</div>;
      }
    
    const produto = await pegaProdutoKey(parametros.key);

    return(
        <div>
            <Produto
                image={produto.image}
                name={produto.name}
                price={produto.price}
            />
            <p>
            Descrição do produto: {produto.desctiption}
            </p>
        </div>
    )
}