import React from "react";
import ItemListContainer from "../components/Item/ItemListContainer";
import Breadcrumb from "../components/NavBar/Breadcrumb";

const Tienda = () => {
  return (
    <main>
      <div className="">
        <Breadcrumb />
        <ItemListContainer/>
      </div>
    </main>
  );
};

export default Tienda;
