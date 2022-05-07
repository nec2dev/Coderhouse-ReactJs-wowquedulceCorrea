import React, { useEffect, useState } from "react";
import { getBox } from "../../assets/utils/getBox";
import ItemDetail from "./ItemDetail";
import LoadingSpinner from "./LoadingSpinner";

const ItemDetailContainer = () => {
  const [box, setBox] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    getBox()
      .then((result) => setBox(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-center">
        {isLoading ? <LoadingSpinner /> :  <ItemDetail box={box}/>}
      </div>
    </>
  );
};

export default ItemDetailContainer;