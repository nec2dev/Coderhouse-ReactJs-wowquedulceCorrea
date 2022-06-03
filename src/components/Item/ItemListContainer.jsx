import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from './ItemList'
import LoadingSpinner from '../Animations/LoadingSpinner'


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();
  useEffect(() => {
    const db = getFirestore();
    if (idCategory) {
      const queryCollectionCategory = query(collection(db, 'items'), where('categoria', '==', idCategory));
      getDocs(queryCollectionCategory)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      .finally(() => setIsLoading(false))
  } else {
    const queryCollection = collection(db, 'items');
    getDocs(queryCollection)
    .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
    .finally(() => setIsLoading(false))
  }}, [idCategory]);

  return (
    <>
      {isLoading ? <LoadingSpinner className="container flex mx-auto"/> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer