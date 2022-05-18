import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import CartList from '../Cart/CartList'

function Cart() {
    const { cartList } = useContext(CartContext)
    return (
        <>
            {cartList.length === 0? 
                <div>
                    <div>
                        <h3><strong>No hay productos en tu carrito</strong></h3>
                        <h4>¿Qué te parece si agregás algunos?</h4>
                        <Link to="/tienda">
                            Ir a comprar
                        </Link>
                    </div>
                </div>
            :<CartList />
            }
        </>
    )
}

export default Cart