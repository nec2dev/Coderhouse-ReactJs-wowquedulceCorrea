/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import ItemCount from '../Item/ItemCount';

function itemDetailTest({ product }) {
    const [goToCart, setGoToCart] = useState(false)
    const { addToCart } = useContext(CartContext)
    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart({ ...product, quantity: quantity })
    }
    return (
        <div key={product.id}>
            <div>
                <div>
                    <img src={product.imagen} alt=""></img>
                </div>
                <div>
                    <h3>{product.nombre}</h3>
                    <h4>${product.precio}</h4>
                    <p>{product.medida}</p>
                    <h5>Stock: {product.stock}</h5>

                    {!goToCart ? <ItemCount initial={1} max={product.stock} onAdd={onAdd} />
                        : <div>
                            <Link to={`/carrito`}>
                                <button>Ir al carrito</button>
                            </Link>
                            <Link to={`/`}>
                                <button>Seguir comprando</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default itemDetailTest