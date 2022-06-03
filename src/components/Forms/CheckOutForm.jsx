import React from 'react'
import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc } from 'firebase/firestore'
import { CartContext } from '../Cart/CartContext'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../Animations/LoadingSpinner'

const CheckOutForm = () => {
  const [orderId, setOrderId] = useState("");
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [formData, setFormData] = useState({ name: "", lastname: "", adress: "", city: "", zipcode: "", phone: "" });
  const { cartList, totalBuy, emptyCart } = useContext(CartContext);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const createOrder = (e) => {
    e.preventDefault();
    setCreatingOrder(true);
    delete formData.emailConfirm;
    let order = {};
    order.date = Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.total = totalBuy();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.nombre;
      const price = cartItem.precio;
      const quantity = cartItem.quantity;
      const totalPrice = cartItem.precio * cartItem.quantity;
      return { id, name, price, quantity, totalPrice };
    });
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((resp) => setOrderId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        setCreatingOrder(false);
        updateStock();
        emptyCart();
        setFormData({ name: "", lastname: "", adress: "", city: "", zipcode: "", phone: "" });
      });
    function updateStock() {
      const batch = writeBatch(db);
      order.items.forEach((el) => {
        let updateDoc = doc(db, "items", el.id);
        let currentStock = cartList.find((item) => item.id === el.id).stock;
        batch.update(updateDoc, {
          stock: currentStock - el.quantity,
        });
      });
      batch.commit();
    }
  };
  return (
    <>
      {creatingOrder ? (
        <>
          <h4>Procesando su orden, espere un momento...</h4>
          <LoadingSpinner />
        </>
      ) : orderId ? (
        <div className="bg-gray-100">
          <div className="w-screen bg-white flex items-center py-10">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
              <div className="w-full lg:w-1/2 mx-8">
                <div className="text-7xl text-primary font-dark font-semibold mb-8">¡Gracias por elegirnos!</div>
                <p className="text-2xl md:text-3xl font-light leading-normal mb-8">La compra se ha realizado exitosamente.</p>
                <Link to="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary active:bg-red-600 hover:bg-red-700">
                  Volver al inicio
                </Link>
              </div>
              <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                <img src="../../assets/img/cartBill.png" alt="Cart bill" />
                <p className="text-2xl md:text-3xl font-light leading-normal mb-8">El ID de tu compra es {orderId}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={createOrder} onChange={handleChange} className="bg-gray-100">
          <div className="container grid grid-cols-12 items-start pb-16 pt-4" >
            <div className="col-span-8 border border-gray-200 p-4 rounded-lg bg-white">
              <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      Nombre <span className="text-primary">*</span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Nombre"
                      defaultValue={formData.name}
                      required
                      className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      Apellido <span className="text-primary">*</span>
                    </label>
                    <input
                      type="name"
                      name="lastname"
                      placeholder="Apellido"
                      defaultValue={formData.lastname}
                      required
                      className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Pais/Región <span className="text-primary">*</span>
                  </label>
                  <input
                    type="name"
                    name="country"
                    placeholder="País/Región"
                    defaultValue={formData.country}
                    required
                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Dirección <span className="text-primary">*</span>
                  </label>
                  <input
                    type="name"
                    name="adress"
                    placeholder="Dirección"
                    defaultValue={formData.adress}
                    required
                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Ciudad <span className="text-primary">*</span>
                  </label>
                  <input
                    type="name"
                    name="city"
                    placeholder="Ciudad"
                    defaultValue={formData.city}
                    required
                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Código postal <span className="text-primary">*</span>
                  </label>
                  <input
                    type="name"
                    name="zipcode"
                    placeholder="Código postal"
                    defaultValue={formData.zipcode}
                    required
                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Teléfono <span className="text-primary">*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Teléfono"
                    defaultValue={formData.phone}
                    required
                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0 "
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 border border-gray-200 p-4 rounded-lg ml-3 bg-red-50">
              <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">Resumen del pedido</h4>
              <div className="space-y-2 divide-y divide-slate-200">
                {cartList.map(prod =>
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-gray-800 font-medium">{prod.nombre}</h5>
                      <p className="text-sm text-gray-600">Breve Descripción</p>
                    </div>
                    <p className="text-gray-600">{prod.quantity} un.</p>
                    <p className="text-gray-800 font-medium">${prod.quantity * prod.precio}</p>
                  </div>
                )}
                <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                  <p>Envío</p>
                  <p>Gratis</p>
                </div>
                <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                  <p className="font-semibold">Total</p>
                  <p>$ {totalBuy()}</p>
                </div>
                <div className="flex items-center mb-4 mt-2">
                  <input type="checkbox" className="text-primary focus:ring-0 rounded-md cursor-pointer w-3 h-3" />
                  <label className="text-gray-600 ml-3 cursor-pointer text-sm">Estoy de acuerdo con los
                    <a href="#!" className="text-primary"> Términos y condiciones</a>
                  </label>
                </div>
                <button disabled={
                  !formData.name ||
                  !formData.lastname ||
                  !formData.adress ||
                  !formData.city ||
                  !formData.zipcode ||
                  !formData.phone ||
                  cartList.length === 0
                } className="w-full block text-center bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default CheckOutForm;
