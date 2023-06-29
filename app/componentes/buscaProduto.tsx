import { useState } from "react";
import axios from "axios";

const link = axios.create({
    baseURL:'http://127.0.0.1:8000'
});

export default function BuscaProdutoComponent(){
    const [buscaProdutoTermo, setBuscaProdutoTermo] = useState("");
    const [buscaProdutoResultado, setBuscaProdutoReultado] = useState([]);

    async function handleSubmit(){
        const response = await fetch(`${link}/category`);

        const data = await response.json();

        setBuscaProdutoReultado(data.results);
    }

    return(
        <>
            <div>
                <input type="text"  
                value={buscaProdutoTermo}  
                onChange={(event) => setBuscaProdutoTermo(event.target.value)}/>
                <input type="button" value="Perquisar" onClick={handleSubmit} />
            </div>

            <div>
                { buscaProdutoTermo.length > 0 ?(
                    <ul>
                       {buscaProdutoResultado.map((result: any) => (
                            <li key={result.key}>{result.name}</li>    
                        ))}
                    </ul>
                ) : (
                    <p>Produto não encontrado</p>
                )
                }
            </div>
        </>
    )

}

