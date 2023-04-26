import React from 'react'

import SingleItem from './SingleItem'

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            removeItem={removeItem}
            key={item.id}
            editItem={editItem}
          />
        )
      })}
    </div>
  )
}

export default Items
