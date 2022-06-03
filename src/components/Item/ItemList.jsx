import React from 'react'
import { memo } from 'react'
import BoxNavBar from '../NavBar/NavBarBox'
import Item from './Item'
import ItemsFilters from './ItemsFilters'

const ItemList = memo(({ products }) => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 bg-gray-100">
        <ItemsFilters />
        <div className="col-span-3">
          <BoxNavBar />
          <div className="grid grid-cols-3 gap-6 mt-6">
            {products.map((prod) => (
              <Item key={prod.id} prod={prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
)

export default ItemList
