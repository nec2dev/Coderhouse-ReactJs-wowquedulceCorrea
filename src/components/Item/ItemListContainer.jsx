import React, { useEffect, useState } from "react";
import { getBoxes } from "../../assets/utils/getBoxes";
import ItemsFilters from "./ItemsFilters";
import ItemList from "./ItemList";
import LoadingSpinner from "./LoadingSpinner";

const ItemListContainer = () => {
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
      <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ItemsFilters />
        {isLoading ? <LoadingSpinner /> :  <ItemList boxes={boxes}/>}
      </div>
    </>
  );
};

export default ItemListContainer;
