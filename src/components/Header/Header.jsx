import React from "react";
import CartWidget from "./CartWidget";
import HeadLogo from "./Headlogo";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="py-4 shadow-sm bg-white0 content-center">
        <div className="container flex items-center justify-between mx-auto">
                <HeadLogo />
            <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                <input type="text"
                    className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="Buscar" />
                <button
                    className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                    Buscar
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="./listadedeseos" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="text-xs leading-3">Lista Deseos</div>
                    <span
                        className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">0</span>
                </Link>
                <CartWidget />
                <Link to="./iniciarsesion" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="far fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">Cuenta</div>
                </Link>
            </div>
        </div>
    </header>
        );
};
export default Header;