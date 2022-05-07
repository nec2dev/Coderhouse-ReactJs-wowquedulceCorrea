import React from "react";

const Item = ({ box }) => {
  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden group p-5">
        <div className="relative">
          <div className="uppercase font-medium text-xl text-center mb-2 text-gray-800 hover:text-primary transition">
            <h4>{box.nombre}</h4>
          </div>
          <img src={box.imagen} alt={box.name} className="rounded-lg" />
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
          <p className="text-xl text-primary font-semibold text-center">${box.precio.toFixed(2)}</p>
          <p className="text-sm text-gray-400 line-through text-center">${box.precioAnterior.toFixed(2)}</p>
          <div>Medidas: {box.medidas}</div>
          <div>N° de piezas: {box.numpiezas} un.</div>
          <div>Peso: {box.peso} Kg.</div>
        </div>
      </div>
    </>
  );
};

export default Item;
