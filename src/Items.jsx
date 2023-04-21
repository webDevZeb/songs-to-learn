import React from 'react'

import SingleItem from './SingleItem'

const Items = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        return <SingleItem item={item} removeItem={removeItem} key={item.id} />
      })}
    </div>
  )
}

export default Items
