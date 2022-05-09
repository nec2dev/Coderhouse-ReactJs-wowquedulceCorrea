import React, { useEffect, useState } from "react";
import { getBoxes } from "../../assets/utils/getBoxes";
import ItemDeatilList from "./ItemDeatilList";
import LoadingSpinner from "../Item/LoadingSpinner";

const ItemDetailContainer = () => {
  const [boxes, setBoxes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    getBoxes()
      .then((result) => setBoxes(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
        {isLoading ? <LoadingSpinner /> :  <ItemDeatilList boxes={boxes}/>} 
        {/* {box ? <ItemDetail box = {box} /> : <LoadingSpinner />} */}
      </div>
    </>
  );
};

export default ItemDetailContainer;