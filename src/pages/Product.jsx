import React from 'react';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import Breadcrumb from "../components/NavBar/Breadcrumb";

const Product = () => {
  return (
    <main>
      <Breadcrumb />
      <ItemDetailContainer />
    </main>
  )
}

export default Product;