import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';

const Box = () => {
  const{id} = useParams();
  return (
    <main>
    <ItemDetailContainer id={id}/>
    </main>
  )
}

export default Box