import React, { useEffect, useState } from "react";
import { getProducts } from "../../assets/utils/getProducts";
import LoadingSpinner from "../Item/LoadingSpinner";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((result) => setProducts(result))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div>
        {isLoading ? <LoadingSpinner /> :  <ItemDetail product={product}/>} 
      </div>
    </>
  );
};

export default ItemDetailContainer;