import React, { useState } from "react";
import {produtoInterface} from "@/app/componentes/produto";

type BuscaProdutoProps = {
    onSearch: (searchTerm: string) => void;
};

export default function BuscaProdutoComponent({onSearch}:BuscaProdutoProps){
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const handleClear = () => {
        setSearchTerm("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Pesquisar"
                value={searchTerm}
                onChange={handleInputChange}
                style={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    outline: 'none',
                }}
            />
            <br />
            <button className="button" type="submit">Buscar</button>
            <button className="button" onClick={handleClear}>Limpar</button>
        </form>
    );
};