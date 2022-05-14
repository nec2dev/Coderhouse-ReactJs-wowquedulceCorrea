import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import Breadcrumb from "../components/NavBar/Breadcrumb";

const Product = () => {
  const { id } = useParams();
  return (
    <main>
      <Breadcrumb />
      <ItemDetailContainer id={id} />
    </main>
  )
}

export default Product;