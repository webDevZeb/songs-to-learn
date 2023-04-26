import { useState } from 'react'
import Form from './Form'
import './App.css'
import { nanoid } from 'nanoid'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'
// Can be done this way or just the one liner with defaultList
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'))
//   } else {
//     list = []
//   }
//   return list
//   console.log(list)
// }

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

function App() {
  const [items, setItems] = useState(defaultList)
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId
    })
    setItems(newItems)
    setLocalStorage(newItems)
    toast.error('Song removed')
  }

  const addItem = (addedItem) => {
    const newItem = {
      name: addedItem,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Song added')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <div>
      <ToastContainer position="top-center" />
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </div>
  )
}

export default App
