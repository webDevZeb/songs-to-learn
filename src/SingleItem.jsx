import React from 'react'
import { useState } from 'react'
const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className="item-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="checkbox"
      />
      <p className={isChecked ? 'item strike' : 'item'}>{item.name}</p>

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
