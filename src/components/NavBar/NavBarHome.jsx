import React from 'react'
import Baker from '../../assets/img/bakerGirl.png'
import Delivery from '../../assets/img/delivery.png'
import Amasado from '../../assets/img/amasado.png'

const NavBarHome = () => {
  return (
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
  )
}

export default NavBarHome