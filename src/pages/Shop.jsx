import React from "react";
import ItemListContainer from "../components/Item/ItemListContainer";
import Breadcrumb from "../components/NavBar/Breadcrumb";

const Shop = () => {
  return (
    <main>
      <Breadcrumb />
      <ItemListContainer/>
    </main>
  );
};

export default Shop;
