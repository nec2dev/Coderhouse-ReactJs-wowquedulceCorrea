import React, { useEffect, useState } from "react";
import { getBoxes } from "../../assets/utils/getBoxes";

const ItemListContainer = () => {
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    getBoxes()
      .then((result) => setBoxes(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div class="col-span-3">
        <div className="flex gap-2 ml-auto">
          <select
            name=""
            className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
          >
            <option value=" ">Orden por defecto</option>
            <option value=" ">Precio menor a mayor</option>
            <option value=" ">Precio mayor a menor</option>
            <option value=" ">Últimos productos</option>
          </select>
          <div className="flex gap-2 ml-auto">
            <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
              <i className="fas fa-th"></i>
            </div>
            <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
              <i className="fas fa-list"></i>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-6">
          {boxes.map((box) => (
            <div key={box.id}>
            <h1>{box.nombre}</h1>
            <img src={box.imagen} alt={box.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
