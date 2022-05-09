import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import Breadcrumb from "../components/NavBar/Breadcrumb";

const BoxDetail = () => {
  const { id } = useParams();
  return (
    <main>
      <Breadcrumb />
      <h1 className='text-center uppercase text-primary text-2xl'>Detalle de Producto {id}</h1>
      <ItemDetailContainer id={id} />
    </main>
  )
}

export default BoxDetail;