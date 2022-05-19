// import React, { useContext } from 'react';
import { Link } from "react-router-dom";
// import { CartContext } from '../Context/CartContext';

const WishWidget = () => {
    // const { wishCounter } = useContext(CartContext)
    return (
        <button href="./login"className="text-center text-gray-700 hover:text-primary transition relative">
        <div className="text-2xl">
          <Link to="./listadedeseos"><i className="fas fa-heart"></i></Link>
        </div>
        <div className="text-xs leading-3">Lista Deseos</div>
        <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
        0
        </span>
      </button>
    );
};
export default WishWidget