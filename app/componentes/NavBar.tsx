// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Image src="/images/306947757_464870749018363_6980977792487757999_n.png" alt="Logo" width={40} height={40}/>
            </div>
            <div>
                <a className="normal-case text-xl">CeubLivre</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/pages/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link href="/pages/carrinho">Carrinho</Link>
                    </li>
                    <li>
                        <Link href="/pages/perfil">Perfil</Link>
                    </li>
                    <li>
                        <Link href="/pages/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
