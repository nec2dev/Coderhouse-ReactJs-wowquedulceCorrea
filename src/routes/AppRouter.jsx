import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Breadcrumb from "../components/NavBar/Breadcrumb";
import Home from "../pages/Home";
import Tienda from "../pages/Tienda";
import Carrito from "../pages/CheckOut";
import WishList from "../pages/WhishList";
import LogIn from "../pages/LogIn";
import Nosotros from "../pages/Us";
import Contactos from "../pages/Contacts";
import BoxDetail from "../pages/BoxDetail";
import NotFound404 from "../pages/Error404";
import Footer from "../components/Footer/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/whishlist" element={<WishList />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/box/:id" element={<BoxDetail />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
