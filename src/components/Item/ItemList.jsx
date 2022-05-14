import React from "react";
import BoxNavBar from "../NavBar/BoxNavBar";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="col-span-3">
        <BoxNavBar />
        <div className="grid grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
