import React from "react";
import BoxNavBar from "../NavBar/BoxNavBar";
import Item from "./Item";

const ItemList = ({ boxes }) => {
  return (
    <>
      <div class="col-span-3">
        <BoxNavBar />
        <div class="grid grid-cols-3 gap-6 mt-6">
          {boxes.map((box) => (
            <Item key={box.id} box={box} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
