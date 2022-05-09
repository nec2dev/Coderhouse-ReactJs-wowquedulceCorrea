import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ box }) => {
  const { imagen, nombre, id, precio, precioAnterior, medidas, numpiezas, peso } = box;
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden group p-1 ">
      <div className="relative">
        <img src={imagen} alt={box.nombre} className="rounded-lg w-full" />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
          <i className='fas fa-heart text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'></i>
          <Link to={`/box/${id}`} className='fas fa-search text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'>
          </Link>
          <div className="uppercase font-medium text-xl text-center mb-2 text-gray-800 hover:text-primary transition">
          </div>
        </div>
      </div>
      <h4>{nombre}</h4>
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
      <p className="text-xl text-primary font-semibold text-center">${precio.toFixed(2)}</p>
      <p className="text-sm text-gray-400 line-through text-center">${precioAnterior.toFixed(2)}</p>
      <div>Medidas: {medidas}</div>
      <div>N° de piezas: {numpiezas} un.</div>
      <div>Peso: {peso} Kg.</div>
      <button className="block w-full mt-5 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Item;
