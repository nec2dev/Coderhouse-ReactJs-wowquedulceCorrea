import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail"
import LoadingSpinner from "../Animations/LoadingSpinner"

function ItemDetailContainer() {
  const {idProduct} = useParams()
    const [isLoading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', idProduct )
        getDoc(queryDb)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .finally(() => setLoading(false))
    }, [idProduct])
  return (
    <div>
      {isLoading ? <LoadingSpinner /> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer
