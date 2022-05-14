import React, { useEffect, useState } from 'react';
import { getProducts } from '../../assets/utils/getProducts';
import ItemList from './ItemList';
import LoadingSpinner from './LoadingSpinner';

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
      {isLoading ? <LoadingSpinner /> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;