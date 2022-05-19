import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import WishList from './WishList';

function Wish() {
    const { wishtList } = useContext(CartContext)
    return (
        <>
            {wishtList.length === 0? 
                <div>
                    <div>
                        <h3><strong>No hay productos en tu caja de deseos</strong></h3>
                        <h4>¿Qué te parece si agregás algunos?</h4>
                        <Link to="/tienda">
                            Ir a meGustear!
                        </Link>
                    </div>
                </div>
            :<WishList />
            }
        </>
    )
}

export default Wish