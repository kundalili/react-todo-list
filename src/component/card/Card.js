import React from 'react'
import Todo from './Todo'
import './Card.css'

export default function Card({ todos, setTodos }) {
  const deleteHandler = () => {

  }
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.map(todo => (
          <Todo todo ={todo}
          setTodos={setTodos} 
          todos={todos} 
          text={todo.text} 
          key ={todo.id}/>
        ))}
      </ul>
    </div>
  )
}
