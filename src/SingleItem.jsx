import React from 'react'
import { useState } from 'react'
const SingleItem = ({ item, removeItem, editItem }) => {
  // const [isChecked, setIsChecked] = useState(item.completed)

  return (
    <div className="item-container">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
        className="checkbox"
      />
      <p className={item.completed ? 'item strike' : 'item'}>{item.name}</p>

      <button
        type="button"
        className="del-btn"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default SingleItem
