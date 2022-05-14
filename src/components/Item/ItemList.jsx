import React from 'react';
import BoxNavBar from '../NavBar/BoxNavBar';
import Item from './Item';
import ItemsFilters from './ItemsFilters';

const ItemList = ({ products }) => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16">
        <ItemsFilters />
        <div className="col-span-3">
          <BoxNavBar />
          <div className="grid grid-cols-3 gap-6 mt-6">
            {products.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
