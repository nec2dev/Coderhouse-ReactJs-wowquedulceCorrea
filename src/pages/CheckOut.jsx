import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc } from 'firebase/firestore'
import { CartContext } from '../components/Context/CartContext'
import { Link } from 'react-router-dom'
import Breadcrumb from "../components/NavBar/Breadcrumb";
import LoadingSpinner from '../components/Item/LoadingSpinner';

const CheckOut = () => {
    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({
        name: "", email: "", emailConfirm: "", phone: ""
    })
    const { cartList, totalBuy, emptyCart } = useContext(CartContext)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const createOrder = (e) => {
        e.preventDefault();
        setCreatingOrder(true)
        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalBuy()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.nombre
            const price = cartItem.precio
            const quantity = cartItem.quantity
            const totalPrice = cartItem.precio * cartItem.quantity
            return { id, name, price, quantity, totalPrice }
        })
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setCreatingOrder(false)
                updateStock()
                emptyCart()
                setFormData({
                    name: "", email: "", emailConfirm: "", phone: ""
                })
            })
        function updateStock() {
            const batch = writeBatch(db)

            order.items.forEach(el => {
                let updateDoc = doc(db, 'items', el.id)
                let currentStock = cartList.find(item => item.id === el.id).stock

                batch.update(updateDoc, {
                    stock: currentStock - el.quantity
                })
            })
            batch.commit()
        }
    }
    return (
        <main>
            <Breadcrumb />
            <div>
                <div className="col-span-8 border  border-red-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
                    <div className="space-y-4">
                        <div className="grid grids-col-2 gap-4">
                            <div>
                                <label htmlFor="" className="text-gray-600 mb-2 block">Nombre <span className="text-primary">*</span></label>
                                <input type="text" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {creatingOrder ? <><h4>Procesando su orden, espere un momento...</h4><LoadingSpinner /></> :
                orderId ?
                    <div>
                        <div className>
                            <h2>¡Gracias por elegirnos!</h2>
                            <h4>La compra se ha realizado exitosamente.</h4>
                            <strong>El ID de tu compra es {orderId}</strong><br />
                            <Link to={`/`}>
                                <strong>Volver al inicio</strong>
                            </Link>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            <div>
                                <div>
                                    <form onSubmit={createOrder} onChange={handleChange}>
                                        <div>
                                            <label>Nombre</label>
                                            <input type="name" name="name" placeholder="P" defaultValue={formData.name} required />
                                        </div>
                                        <div>
                                            <label>Teléfono</label>
                                            <input type="number" name="phone" placeholder="" defaultValue={formData.phone} required />
                                        </div>
                                        <div>
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder="" defaultValue={formData.email} required />
                                        </div>
                                        <div>
                                            <label>Confirmar Email</label>
                                            <input type="email" name="emailConfirm" placeholder="" defaultValue={formData.emailConfirm} required />
                                        </div>
                                        <button disabled={!formData.name || !formData.phone || !formData.email || formData.email !== formData.emailConfirm || cartList.length === 0}>
                                            Comprar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </main>
    )
}

export default CheckOut;