import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    const handleSubstract = () => {
        if (count > initial) {
            setCount((counter) => counter - 1);
        }
    };
    const handleAdd = () => {
        if (count < stock) {
            setCount((counter) => counter + 1);
        }
    };
    return (
        <div>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <button onClick={handleSubstract} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</button>
                <span className="h-8 w-8 text-base flex items-center justify-center">{count}</span>
                <button onClick={handleAdd} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</button>
            </div>
            <div className="flex gap-3 pb-1 mt-6 w-max">
                <Link to="/tienda" onClick={() => onAdd(count)} className="bg-primary border border-primary text-white px-8 py-2 w-full font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i className="fas fa-shopping-bag"></i>Agregar al carrito
                </Link>       
            </div>
        </div >
    )
}

export default ItemCount
