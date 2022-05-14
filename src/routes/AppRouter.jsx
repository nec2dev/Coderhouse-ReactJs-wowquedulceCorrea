import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home';
import Tienda from '../pages/Shop';
import Carrito from '../pages/Cart';
import Compra from '../pages/CheckOut';
import Listadedeseos from '../pages/WhishList';
import Iniciarsesion from '../pages/LogIn';
import Nosotros from '../pages/Us';
import Contactos from '../pages/Contacts';
import Producto from '../pages/Product';
import Categoria from '../pages/Shop';
import NotFound404 from '../pages/Error404';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tienda" element={<Tienda />} />
          <Route exact path="/compra" element={<Compra />}/>
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/listadedeseos" element={<Listadedeseos />} />
          <Route exact path="/iniciarsesion" element={<Iniciarsesion />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/contactos" element={<Contactos />} />
          <Route exact path="/producto/:idProduct" element={<Producto />} />
          <Route exact path="/categoria/:idCategory" element={<Categoria />} />
          <Route exact path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default AppRouter;
