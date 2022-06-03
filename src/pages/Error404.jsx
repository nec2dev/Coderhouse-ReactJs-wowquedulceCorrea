import React from 'react'

const Error404 = () => {
  return (
    <main>
      <div className="w-screen bg-white flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-primary font-dark font-extrabold mb-8"> 404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Lo siento, no podemos encontrar lo que estás buscando.
            </p>
            <a href="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary active:bg-red-600 hover:bg-red-700">back to homepage</a>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" alt="Page not found" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Error404