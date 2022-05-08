import React, { useEffect, useState } from "react";
import { getBox } from "../../assets/utils/getBox";
import ItemDetail from "./ItemDetail";
import LoadingSpinner from "../Item/LoadingSpinner";

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
    <div>
      {isLoading ? <LoadingSpinner /> :  <ItemDetail box={box}/>}
    </div>
  )
};

export default ItemDetailContainer;