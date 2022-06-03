import React from 'react'
// import { Link } from 'react-router-dom';
//import Cover01 from './Cover01';

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className="block w-full" alt="..." />
            <div className="carousel-caption hidden md:block absolute">
              <h5 className="text-3xl mb-4">First slide label</h5>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sed expedita libero amet quaerat velit maxime aut animi tempora ipsum, sit, omnis cum suscipit. Facere?</p>
              <button type="button" className="bg-blue-600 text-white rounded px-6 py-2.5 transition duration-150 ease-in-out hover:bg-blue-700 ">Sign up today</button>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" className="block w-full" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
  }
  
  export default Carousel;