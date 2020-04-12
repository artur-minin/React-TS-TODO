import React from 'react'

type TodoListProps = {
  todos: any[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      <li className='todo'>
        <label>
          <input type='checkbox' />
          <span></span>
          <i className='material-icons red-text'>delete</i>
        </label>
      </li>
    </ul>
  )
}

export default TodoList
