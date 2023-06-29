import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AdicionarCarrinho = () => {
    const [message, setMessage] = useState<string>('');
    const handleAddToCart = () => {
        toast.success(`Produto adicionado ao carrinho`);
    };

    return (
        <div>
            <button className="btn btn-primary button float-right" onClick={handleAddToCart}>
                Adicionar ao carrinho
            </button>
            <ToastContainer />
        </div>
    )

}