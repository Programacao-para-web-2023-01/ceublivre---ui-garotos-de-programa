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
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <br />
            <button type="submit">Buscar</button>
            <button onClick={handleClear}>Limpar</button>
        </form>
    );
};