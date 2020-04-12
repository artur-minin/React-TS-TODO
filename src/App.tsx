import React, { useState } from 'react'
import { Navbar, TodoForm, TodoList } from './components'

const App: React.FC = () => {
  const [todos, setTodos] = useState([])

  const onAddHandler = (title: string) => {
    console.log('title', title)
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm onAdd={onAddHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App
