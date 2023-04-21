import React from 'react'
import { useState } from 'react'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) return
    addItem(newItemName)
    setNewItemName('')
  }

  return (
    <div className="form-box">
      <h1 className="title-txt">Songs To Learn</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="form-submit" type="submit">
          Add To List
        </button>
      </form>
    </div>
  )
}

export default Form
