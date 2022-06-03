import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WishContext } from './WishContext'
import WishList from '../Wish/WishList'

function Wish() {
    const { wishList } = useContext(WishContext)
    return (
        <>
            {wishList.length === 0 ?
                <div className="w-screen bg-white flex items-center py-10">
                    <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                        <div className="w-full lg:w-1/2 mx-8">
                            <div className="text-7xl text-primary font-dark font-semibold mb-8">No hay productos en tu caja de deseos</div>
                            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">¿Qué te parece si agregás algunos?</p>
                            <Link to="/tienda" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary active:bg-red-600 hover:bg-red-700">
                                Ir a meGustear!
                            </Link>
                        </div>
                        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                            <img src="../../assets/img/emptyWishList.jpg" alt="Wish list empty" />
                        </div>
                    </div>
                </div>
                : <WishList />
            }
        </>
    )
}

export default Wish