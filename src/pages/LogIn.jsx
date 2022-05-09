import React from 'react'

const LogIn = () => {
  return (
    <main>
      <div className="container py-2">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">login</h2>
            <p className="text-gray-600 mb-6 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sequi
                nisi ullam sunt provident eaque deserunt aspernatur ipsam porro.</p>
            <form action="#">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="text-gray-600 mb-2 block">Nombre</label>
                        <input type="name"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            id="inputNombre" placeholder="Ingrese su nombre y apellido"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Dirección de Email</label>
                        <input type="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            id ="inputEmail" placeholder="Ingrese su email"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            id = "password" placeholder="Ingrese su contraseña"/>
                    </div>
                    <div>
                        <label htmlFor="passwordconfirm" className="text-gray-600 mb-2 block">Confirmar Contraseña</label>
                        <input type="passwordconfirm"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            id="passwordconfirm" placeholder="Confirme su contraseña"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer">Recuérdame</label>
                    </div>
                    <a href="#!">Te olvidaste la contraseña?</a>
                </div>
                <div className="mt-4">
                    <button type="submit" className="block w-full py-2 text-center bg-primary border border-primary text-white px-8 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition">Log In</button>
                </div>
            </form>
            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">O ingresá con:</div>
                <div className="absolute left-0 top-3 w-full border-gray-200"></div>
            </div>
            <div className="flex mt-4 gap-4">
                <a href="#!" className="w-1/2 py-2 text-center text-white bg-blue-800 rounded font-roboto font-medium text-sm hover:bg-blue-700">Facebook</a>
                <a href="#!" className="w-1/2 py-2 text-center text-white bg-violet-800 rounded font-roboto font-medium text-sm hover:bg-violet-700">Instagram</a>
            </div>
            <p className="mt-4 text-gray-600 text-center">No tenés una cuenta? <a href="#!">Registrate ahora</a></p>
        </div>
    </div>
    </main>
  )
}

export default LogIn