import React from 'react'
import './Todo.css'
import {BsCheckLg} from 'react-icons/bs'
import {BsTrash} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
export default function Todo({text,todo, setTodos, todos}) {

  const deleteHandler = () => {
    setTodos(todos.filter(el =>el.id !== todo.id ));
    };
    const completeHandler = () => {
      setTodos(todos.map(item => {
       if(item.id === todo.id) {
         return {
           ...item, completed: !item.completed
         }
       } 
       return item;   
     }))
  }
  const editHandler = () => {

  }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <div>
          <button onClick={completeHandler} className='complete-btn'><BsCheckLg className='completed'size={20}/></button>
          <button onClick={deleteHandler} className='complete-btn'><BsTrash className='delete'size={20}/></button>
          <button onClick={editHandler} className='complete-btn'><FiEdit className='edit' size={20}/></button>
        </div>
    </div>
  )
}
