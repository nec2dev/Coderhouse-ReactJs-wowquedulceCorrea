import React from "react";
// import Cover from '../assets/img/cover.png';
// import Ad from'../../assets/img/box002.jpg';

const Home = () => {
  return (
    <main>
      <div className="bg-cover bg-no-repeat bg-center py-36" style={{ backgroundImage: 'url("../assets/img/cover.png")' }}>
        <div className="container">
          <h1 className="text-6xl text-white font-medium mb-4 capitalize" id="titulo">
            Título ecommerce
          </h1>
          <p className="text-3xl text-white font-medium mb-4 w-80" id="maincopy">copy con keywords</p>
          <p className="text-white w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore,
            doloribus, consectetur assumenda illo repudiandae necessitatibus accusantium placeat, adipisci eligendi
            laborum ad molestiae commodi voluptatem id. Doloremque facilis molestiae nihil.</p>
          <div className="mt-12">
            <a href="/tienda" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition">Comprar
              Ahora</a>
          </div>
        </div>
      </div>
      {/* caracteristicas */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-lg px-3 py-6 flex justify-center items-center gap-5">
            <img src="./assets/img/delivery.svg" className="w-12 h-12 object-contain" alt="" srcSet />
            <div>
              <h4 className="font-medium capitalize text-lg">Envíos</h4>
              <p className="text-gray-500 text-sm">compras de +$600</p>
            </div>
          </div>
          <div className="border border-primary rounded-lg px-3 py-6 flex justify-center items-center gap-5">
            <img src="./assets/img/delivery.svg" className="w-12 h-12 object-contain" alt="" srcSet />
            <div>
              <h4 className="font-medium capitalize text-lg">Envíos</h4>
              <p className="text-gray-500 text-sm">compras de +$600</p>
            </div>
          </div>
          <div className="border border-primary rounded-lg px-3 py-6 flex justify-center items-center gap-5">
            <img src="./assets/img/delivery.svg" className="w-12 h-12 object-contain" alt="" srcSet />
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
            <a href="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 1</a>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce002.jpg" className="w-full" alt="" />
            <a href="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 2</a>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce003.png" className="w-full" alt="" />
            <a href="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 3</a>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce004.jpg" className="w-full" alt="" />
            <a href="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 4</a>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce005.jpg" className="w-full" alt="" />
            <a href="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 5</a>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="./assets/img/BoxDulce006.jpg" className="w-full" alt="" />
            <a href="./pages/box.html" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition">Box
              Dulce 6</a>
          </div>
        </div>
      </div>
      {/* Sección de Ads */}
      <div className="container pb-16">
        <a href="./pages/underConstruction.html">
          <img src="./assets/img/BannerAds.jpg" className="w-full" alt="" />
        </a>
      </div>
    </main>
  );
}

export default Home;
