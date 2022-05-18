import { Link, NavLink } from "react-router-dom";
import Box from '../../assets/img/box.png';
import Event from '../../assets/img/eventos.png';

const NavBar = () => {
  return (
    <nav className="bg-gray-400">
        <div className="container flex mx-auto">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fas fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">Todas las categorías</span>
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <NavLink to="/categoria/1" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Box} className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Boxes</span>
                    </NavLink>
                    <NavLink to="/categoria/2" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Event} className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Eventos</span>
                    </NavLink>
                    {/* <Link to="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 003</span>
                    </Link>
                    <Link to="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 004</span>
                    </Link>
                    <Link to="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 005</span>
                    </Link>
                    <Link to="/" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 006</span>
                    </Link> */}
                </div>
            </div>
            <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                    <Link to="/" className="text-gray-200 hover:text-white transmition">Home</Link>
                    <Link to="/tienda" className="text-gray-200 hover:text-white transmition">Tienda</Link>
                    <Link to="/nosotros" className="text-gray-200 hover:text-white transmition">Nosotros</Link>
                    <Link to="/contactos" className="text-gray-200 hover:text-white transmition">Contactos</Link>
                </div>
                <a href="/iniciarsesion" className="text-gray-200 hover:text-white transmition">Loguearse/Registrarse</a>
            </div>
        </div>
    </nav>
  );
};
export default NavBar;