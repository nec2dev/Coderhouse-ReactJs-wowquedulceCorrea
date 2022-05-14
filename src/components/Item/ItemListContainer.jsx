import React, { useEffect, useState } from "react";
import { getProducts } from "../../assets/utils/getProducts";
import ItemsFilters from "./ItemsFilters";
import ItemList from "./ItemList";
import LoadingSpinner from "./LoadingSpinner";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
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
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
        <ItemsFilters />
        {isLoading ? <LoadingSpinner /> :  <ItemList products={products}/>}
      </div>
    </>
  );
};

export default ItemListContainer;