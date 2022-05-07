import React from 'react';
import { useParams } from "react-router-dom";
import ItemListContainer from '../components/Item/ItemListContainer';

const Box = () => {
  const{id} = useParams();
  return (
    <main>
    <div>Box</div>
    <ItemListContainer id={id}/>
    </main>
  )
}

export default Box