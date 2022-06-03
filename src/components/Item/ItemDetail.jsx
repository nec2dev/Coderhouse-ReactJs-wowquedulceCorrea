import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Cart/CartContext'
import ItemCount from './ItemCount'
import BoxDetail001 from '../../assets/img/Wow007-001.png'
import BoxDetail002 from '../../assets/img/Wow007-002.png'
import BoxDetail003 from '../../assets/img/Wow007-003.png'
import BoxDetail004 from '../../assets/img/Wow007-004.png'
import BoxDetail005 from '../../assets/img/Wow007-005.png'

function ItemDetail({ product }) {
    const [goToCart, setGoToCart] = useState(false)
    const { addToCart } = useContext(CartContext)
    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart({ ...product, quantity: quantity })
    }
    return (
        <>
            <div key={product.id} className="container grid grid-cols-2 gap-6 bg-gray-100">
                <div>
                    <img src={product.imagen} alt={product.nombre} className="w-full mt-3" />
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <img src={BoxDetail001} className="w-full cursor-pointer border border-primary" alt="" />
                        <img src={BoxDetail002} className="w-full cursor-pointer border" alt="" />
                        <img src={BoxDetail003} className="w-full cursor-pointer border" alt="" />
                        <img src={BoxDetail004} className="w-full cursor-pointer border" alt="" />
                        <img src={BoxDetail005} className="w-full cursor-pointer border" alt="" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-medium uppercase mb-2">{product.nombre}</h2>
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
                            <span>Medidas: {product.medidas}</span>
                        </p>
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Piezas: {product.numpiezas} un.</span>
                        </p>
                        <div className="text-gray-800 font-semibold space-x-2">
                            <div>Peso: {product.peso} Kg.</div>
                        </div>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-2xl text-primary font-semibold">$ {product.precio}</p>
                        <p className="text-base text-gray-400 line-through">$ {product.precioAnterior}</p>
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
                                <input type="radio" name="people" className="hidden" id="people-1" />
                                <label htmlFor="people-1"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">1</label>
                            </div>
                            <div className="people-selector">
                                <input type="radio" name="people" className="hidden" id="people-2" />
                                <label htmlFor="people-2"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">2</label>
                            </div>
                            <div className="people-selector">
                                <input type="radio" name="people" className="hidden" id="people-3" />
                                <label htmlFor="people-3"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">3</label>
                            </div>
                            <div className="people-selector">
                                <input type="radio" name="people" className="hidden" id="people-5" />
                                <label htmlFor="people-5"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">5</label>
                            </div>
                            <div className="people-selector">
                                <input type="radio" name="people" className="hidden" id="people-10" />
                                <label htmlFor="people-10"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">10</label>
                            </div>
                            <div className="people-selector">
                                <input type="radio" name="people" className="hidden" id="people-20" />
                                <label htmlFor="people-20"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">20</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Cantidad</h3>
                        {!goToCart ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd} /> :
                            <div className="d-flex justify-content-center">
                                <Link to={`/carrito`}>
                                    <button className="btn btn-danger bg-gradient me-3 mt-3">Ir al carrito</button>
                                </Link>
                                <Link to={`/`}>
                                    <button className="btn btn-danger bg-gradient ms-3 mt-3">Seguir comprando</button>
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="flex gap-3 pb-1">
                        <Link to="/listadedeseos" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                            <i className="fas fa-heart"></i>
                        </Link>
                        <Link to="/carrito" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <i className="fas fa-shopping-cart"></i>Carrito
                        </Link>
                    </div>
                    <div className="flex gap-3 pb-1">
                        <Link to="/tienda" className="bg-terciary border border-terciary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-gray-600 transition">
                            <i className="fa-solid fa-basket-shopping"></i>Seguir comprando
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="container pb-16 w-full bg-gray-100">
                    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Detalles de la Box</h3>
                    <div className="w-3/5 pt-6">
                        <div className="text-gray-600 space-y-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ducimus iure? Placeat, qui! Vitae eaque quaerat commodi quidem vero numquam animi perspiciatis ut? Aut quis eveniet exercitationem sit aliquid.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ducimus iure? Placeat, qui! Vitae eaque quaerat commodi quidem vero numquam animi perspiciatis ut? Aut quis eveniet exercitationem sit aliquid.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ducimus iure? Placeat, qui! Vitae eaque quaerat commodi quidem vero numquam animi perspiciatis ut? Aut quis eveniet exercitationem sit aliquid.</p>
                        </div>
                        <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                            <tbody><tr>
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
                            </tbody></table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail