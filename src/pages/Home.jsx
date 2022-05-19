import { Link } from 'react-router-dom';
// import Cover from '../assets/img/cover.png';
import Baker from '../assets/img/bakerGirl.png';
import Delivery from '../assets/img/delivery.png';
import Amasado from '../assets/img/amasado.png';
import Ads from '../assets/img/ads.jpg';

const Home = () => {
  return (
    <main>
      <div className="bg-slate-300 py-36">
        {/* <img src={Cover} alt="" srcSet="" /> */}
        <div className="container">
          <h1 className="text-6xl text-white font-medium mb-4 capitalize" id="titulo">
            Título ecommerce
          </h1>
          <p className="text-3xl text-white font-medium mb-4 w-80" id="maincopy">copy con keywords</p>
          <p className="text-white w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore,
            doloribus, consectetur assumenda illo repudiandae necessitatibus accusantium placeat, adipisci eligendi
            laborum ad molestiae commodi voluptatem id. Doloremque facilis molestiae nihil.</p>
          <div className="mt-12">
            <Link to="/tienda" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition">Comprar
              Ahora</Link>
          </div>
        </div>
      </div>
      {/* caracteristicas */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-lg px-3 py-6 flex justify-center items-center gap-5">
            <img src={Baker} className="w-12 h-12 object-contain" alt="" />
            <div>
              <h4 className="font-medium capitalize text-lg">Recetas</h4>
              <p className="text-gray-500 text-sm">tutoriales completos</p>
            </div>
          </div>
          <div className="border border-primary rounded-lg px-3 py-6 flex justify-center items-center gap-5">
            <img src={Amasado} className="w-12 h-12 object-contain" alt="" />
            <div>
              <h4 className="font-medium capitalize text-lg">Materiales</h4>
              <p className="text-gray-500 text-sm">calidad y amor</p>
            </div>
          </div>
          <div className="border border-primary rounded-lg px-3 py-6 flex justify-center items-center gap-5">
            <img src={Delivery} className="w-12 h-12 object-contain" alt="" />
            <div>
              <h4 className="font-medium capitalize text-lg">Envíos</h4>
              <p className="text-gray-500 text-sm">compras de +$600</p>
            </div>
          </div>
        </div>
      </div>
      {/* categorías */}
      <div className="container py-16">
        <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">Categorías:</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce001.jpg" className="w-full" alt="" />
            <Link to="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 1</Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce002.jpg" className="w-full" alt="" />
            <Link to="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 2</Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce003.png" className="w-full" alt="" />
            <Link to="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 3</Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce004.jpg" className="w-full" alt="" />
            <Link to="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 4</Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce005.jpg" className="w-full" alt="" />
            <Link to="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 5</Link>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce006.jpg" className="w-full" alt="" />
            <Link to="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 6</Link>
          </div>
        </div>
      </div>
      {/* Sección de Ads */}
      <div className="container pb-16">
        <Link to="./pages/underConstruction.html">
          <img src={Ads} className="w-full" alt="" />
        </Link>
      </div>
    </main>
  );
}
export default Home;
