import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';

const BoxDetail = () => {
  const { id } = useParams();
  return (
    <main>
      <h1>Detalle de Producto {id}</h1>
      <ItemDetailContainer id={id} />
    </main>
  )
}

export default BoxDetail;