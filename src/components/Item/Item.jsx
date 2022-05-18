import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../Item/ItemCount';
import { CartContext } from '../Context/CartContext';

function Item({ prod }) {
  const [goToCart, setGoToCart] = useState(false)
  const { addToCart } = useContext(CartContext)
  const onAdd = (quantity) => {
    setGoToCart(true)
    addToCart({ ...prod, quantity: quantity })
  }
  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden group p-1 ">
        <div className="relative">
          <img src={prod.imagen} alt={prod.nombre} className="rounded-lg w-full" />
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
            <i className='fas fa-heart text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'></i>
            <Link to={`/producto/${prod.id}`} className='fas fa-search text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'>
            </Link>
            <div className="uppercase font-medium text-xl text-center mb-2 text-gray-800 hover:text-primary transition">
            </div>
          </div>
        </div>
        <h4>{prod.nombre}</h4>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
        <p className="text-xl text-primary font-semibold text-center">${prod.precio.toFixed(2)}</p>
        <p className="text-sm text-gray-400 line-through text-center">${prod.precioAnterior.toFixed(2)}</p>
        <div>Medidas: {prod.medidas}</div>
        <div>N° de piezas: {prod.numpiezas} un.</div>
        <div>Peso: {prod.peso} Kg.</div>
        <div className="mt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Cantidad</h3>
          {!goToCart ? <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} /> :
            <div>
              <Link to={`/carrito`} className="block w-full mt-5 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                Agregar al Carrito
              </Link>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Item;
