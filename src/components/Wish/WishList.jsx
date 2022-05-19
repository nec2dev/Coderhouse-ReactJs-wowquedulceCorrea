import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const WishList = () => {
    const { wishList, wishCounter, removeItemWishList, emptyWishList, totalBuy } = useContext(CartContext)
    return (
        <div >
            <div>
                {wishList.map(prod =>
                    <div key={prod.id}>
                        <img src={prod.imagen} alt={prod.nombre} className="rounded-lg w-full" />
                        <div><h5>Nombre: {prod.nombre}</h5></div>
                        <div><h5>Precio: ${prod.precio}</h5></div>
                        <div><h5>Cantidad: {prod.quantity}</h5></div>
                        <div><h5>Total: ${prod.quantity * prod.precio}</h5></div>
                        <div><button onClick={() => removeItemWishList(prod.id)}>Eliminar</button></div>
                    </div>
                )}
                <h3><b>Cantidad Total:</b></h3>
                <h4><b>{wishCounter()} un.</b></h4>
                <h3><b>Precio Total:</b></h3>
                <h4><b>${totalBuy()}</b></h4>
                <div>
                    <button onClick={emptyWishList}>Vaciar Carrito</button>
                    <Link to="/carrito">
                        <button>Que tus deseos se hagan realidad!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WishList