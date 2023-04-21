import { useState } from 'react'
import Form from './Form'
import './App.css'
import { nanoid } from 'nanoid'
import Items from './Items'

function App() {
  const [items, setItems] = useState([])
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId
    })
    setItems(newItems)
  }

  const addItem = (addedItem) => {
    const newItem = {
      name: addedItem,
      completed: false,
      id: nanoid(),
    }
    setItems([...items, newItem])
  }
  return (
    <div>
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem}></Items>
    </div>
  )
}

export default App
