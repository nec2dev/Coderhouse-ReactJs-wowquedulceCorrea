import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailList = ({ boxes }) => {
  return (
    <>
      <div className="col-span-3">
          {boxes.map((box) => (
            <ItemDetail key={box.id} box={box} />
          ))}
      </div>
    </>
  );
};

export default ItemDetailList;