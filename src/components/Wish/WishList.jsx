import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WishContext } from './WishContext'

const WishList = () => {
    const { wishList, wishCounter, totalBuyWish, removeItemWish, emptyWish } = useContext(WishContext)
    return (
        <>
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex rounded-lg">
                        <div className="w-full bg-white px-6 py-10 m-3 rounded-lg">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="text-lg font-medium capitalize mb-4">Carrito</h1>
                                <h2 className="text-lg font-medium capitalize mb-4">{wishCounter()} Items</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles del producto</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                            </div>
                            {wishList.map(prod =>
                                <div key="{prod}"className="flex items-center hover:bg-gray-100 my-4 px-2 py-2 border border-gray-200 rounded-lg">
                                    <div className="flex w-2/5">
                                        <div className="w-full">
                                            <img src={prod.imagen} alt={prod.nombre} className="h-40 rounded-lg" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-grow">
                                            <span className="text-md uppercase">{prod.nombre}</span>
                                            <span className="text-gray-500 text-md">Aliquam perspiciatis quae ad laboriosam illo.</span>
                                            <div><button onClick={() => removeItemWish(prod.id)} className="font-semibold hover:text-red-500 text-gray-500 text-md">Eliminar</button></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">{prod.quantity} un. </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">${prod.precio}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">${prod.quantity * prod.precio}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-gray-800 font-medium py-3 uppercase border-b">
                                <p>Envío</p>
                                <p>Gratis</p>
                            </div>
                            <div className="flex justify-between text-gray-800 font-large py-3 uppercase border-b">
                                <p className="font-semibold">Total</p>
                                <p>$ {totalBuyWish()}</p>
                            </div>
                            <div className="flex gap-3 pb-1 mt-5">
                                <button onClick={emptyWish} className="w-50 block text-center bg-terciary border border-terciary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary">Vaciar Favs</button>
                                <Link to="/compra">
                                    <button className="w-50 block text-center bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary">Procesar Compra?</button>
                                </Link>
                            </div>
                            <Link to="/tienda" className="flex font-semibold text-primary text-sm mt-10">

                                <svg className="fill-current mr-2 text-primary w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continuar Faveando
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList