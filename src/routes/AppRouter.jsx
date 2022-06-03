import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from '../components/Cart/CartContext'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Home from '../pages/Home'
import Tienda from '../pages/Shop'
import Carrito from '../pages/ShopCart'
import Compra from '../pages/CheckOut'
import Listadedeseos from '../pages/WishBox'
import Iniciarsesion from '../components/Forms/LogInForm'
import Producto from '../pages/Product'
import ItemListContainer from '../components/Item/ItemListContainer'
import NotFound404 from '../pages/Error404'
import Footer from '../components/Footer/Footer'

const AppRouter = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tienda" element={<Tienda />} />
          <Route exact path="/compra" element={<Compra />} />
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/listadedeseos" element={<Listadedeseos />} />
          <Route exact path="/iniciarsesion" element={<Iniciarsesion />} />
          <Route exact path="/producto/:idProduct" element={<Producto />} />
          <Route exact path="/categoria/:idCategory" element={<ItemListContainer />} />
          <Route exact path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default AppRouter
