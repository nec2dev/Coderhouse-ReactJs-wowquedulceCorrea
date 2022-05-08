import React from "react";

const ItemDetail = ({ box }) => {
  const { imagen, nombre, id, precio, precioAnterior, medidas, numpiezas, peso } = box;
  return (
    <div className="container grid grid-cols-2 gap-6">
        <div>
            <img src={imagen} className="w-full" alt={nombre}/>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <img src="" className="w-full cursor-pointer border border-primary" alt=""/>
                <img src="" className="w-full cursor-pointer border" alt=""/>
                <img src="" className="w-full cursor-pointer border" alt=""/>
                <img src="" className="w-full cursor-pointer border" alt=""/>
                <img src="" className="w-full cursor-pointer border" alt=""/>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">{ nombre }</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Disponibilidad:</span>
                    <span className="text-green-600">hay Stock</span>
                </p>
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Medidas: {medidas}</span>
                </p>
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Piezas: {numpiezas} Kg.</span>
                </p>
                <p className="text-gray-800 font-semibold space-x-2">
                <div>Peso: {peso} Kg.</div>
                </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-2xl text-primary font-semibold">$ {precio}</p>
                <p className="text-base text-gray-400 line-through"> {precioAnterior}</p>
            </div>
            <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut at asperiores non facilis repudiandae fuga
                pariatur obcaecati nihil aspernatur sapiente, soluta adipisci. Explicabo, corporis deserunt distinctio
                nobis fuga architecto blanditiis!
            </p>
            <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">N° de Personas</h3>
                <div className="flex items-center gap-2">
                    <div className="people-selector">
                        <input type="radio" name="people" className="hidden" id="people-1"/>
                        <label htmlFor="people-1"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">1</label>
                    </div>
                    <div className="people-selector">
                        <input type="radio" name="people" className="hidden" id="people-2"/>
                        <label htmlFor="people-2"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">2</label>
                    </div>
                    <div className="people-selector">
                        <input type="radio" name="people" className="hidden" id="people-3"/>
                        <label htmlFor="people-3"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">3</label>
                    </div>
                    <div className="people-selector">
                        <input type="radio" name="people" className="hidden" id="people-5"/>
                        <label htmlFor="people-5"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">5</label>
                    </div>
                    <div className="people-selector">
                        <input type="radio" name="people" className="hidden" id="people-10"/>
                        <label htmlFor="people-10"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">10</label>
                    </div>
                    <div className="people-selector">
                        <input type="radio" name="people" className="hidden" id="people-20"/>
                        <label htmlFor="people-20"
                            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">20</label>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Sabor</h3>
                <div className="flex items-center gap-2">
                    <div className="sabor-selector">
                        <input type="radio" name="sabor" className="hidden" id="sabor-frutilla"/>
                        <label htmlFor="sabor-frutilla"
                            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm"></label>
                    </div>
                    <div className="sabor-selector">
                        <input type="radio" name="sabor" className="hidden" id="sabor-frutilla"/>
                        <label htmlFor="sabor-frutilla"
                            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm"></label>
                    </div>
                    <div className="sabor-selector">
                        <input type="radio" name="sabor" className="hidden" id="sabor-frutilla"/>
                        <label htmlFor="sabor-frutilla"
                            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm"></label>
                    </div>
                    <div className="sabor-selector">
                        <input type="radio" name="sabor" className="hidden" id="sabor-frutilla"/>
                        <label htmlFor="sabor-frutilla"
                            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm"></label>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Cantidad</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>
            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <a href="#!" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <i className="fas fa-shopping-bag"></i>Agregar al Carrito
                </a>
                <a href="#!" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                    <i className="fas fa-heart"></i>A lista de Deseos
                </a>
            </div>
            <div className="flex gap-3 mt-4">
                <a href="#!" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
      
    <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Detalles de la Box</h3>
        <div className="w-3/5 pt-6">
            <div className="text-gray-600 space-y-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ducimus iure? Placeat, qui! Vitae eaque quaerat commodi quidem vero numquam animi perspiciatis ut? Aut quis eveniet exercitationem sit aliquid.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ducimus iure? Placeat, qui! Vitae eaque quaerat commodi quidem vero numquam animi perspiciatis ut? Aut quis eveniet exercitationem sit aliquid.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ducimus iure? Placeat, qui! Vitae eaque quaerat commodi quidem vero numquam animi perspiciatis ut? Aut quis eveniet exercitationem sit aliquid.</p>
            </div>
            <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Sabor</th>
                    <td className="py-2 px-4 border border-gray-300">Frutilla, Vainilla, Chocolate</td>
                </tr>
                <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Piezas</th>
                    <td className="py-2 px-4 border border-gray-300">tartas, pie, alfajor, brownie</td>
                </tr>
                <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Peso</th>
                    <td className="py-2 px-4 border border-gray-300">2.8 Kg</td>
                </tr>
            </table>
        </div>
    </div>
    </div>
  );
};

export default ItemDetail;