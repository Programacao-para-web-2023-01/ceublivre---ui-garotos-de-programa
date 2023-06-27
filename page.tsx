import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

type productProps = {
    key: string;
    firstKey: string;
    name: string;
    price: number;
    image: string;
    description: string;
};

const getProdutos = async () => {
    const response = await instance.get<productProps[]>("/product")
    return response.data
}

export default async function ObterProduto(){
    const response = await getProdutos();
    console.log(response);
    return (
        <>
            <h2>Axios</h2>
            {response.map((prod) => (
                <div key={prod.key}>
                    <p>Name: {prod.name}</p>
                    <p>Description: {prod.description}</p>
                    <p>Price: R${prod.price}.55</p>
                    <img src={prod.image} alt={prod.name} />
                </div>
            ))}
        </>
    )
}
