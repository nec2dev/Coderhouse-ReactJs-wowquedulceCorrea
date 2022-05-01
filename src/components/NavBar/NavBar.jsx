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
                    <a href="./pages/box.html" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 001</span>
                    </a>
                    <a href="./pages/box.html" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 002</span>
                    </a>
                    <a href="./pages/box.html" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 003</span>
                    </a>
                    <a href="./pages/box.html" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 004</span>
                    </a>
                    <a href="./pages/box.html" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 005</span>
                    </a>
                    <a href="./pages/box.html" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="" className="w-5 h-5 object-contain" alt=""/>
                        <span className="ml-6 text-gray-600 text-sm">Box 006</span>
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                    <a href="index.html" className="text-gray-200 hover:text-white transmition">Home</a>
                    <a href="./pages/tienda.html" className="text-gray-200 hover:text-white transmition">Tienda</a>
                    <a href="./pages/underConstruction.html" className="text-gray-200 hover:text-white transmition">Nosotros</a>
                    <a href="./pages/underConstruction.html" className="text-gray-200 hover:text-white transmition">Contactos</a>
                </div>
                <a href="./pages/login.html" className="text-gray-200 hover:text-white transmition">Loguearse/Registrarse</a>
            </div>
        </div>
    </nav>
  );
};
export default NavBar;