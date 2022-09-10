import React from 'react'
import './Form.css'

import {BsPlusSquare} from 'react-icons/bs'
export default function Form ({ setInputText, todos, setTodos, inputText}) {
  const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
      ]);
      setInputText("");
  };
  
    return (
    <div className='todoList'> 
        <form className='add-todo'>
        <button onClick={submitTodoHandler} className='todo-button'>
            <BsPlusSquare className='add-todo' size={30}/>
        </button>
        <input
            placeholder='Type your task...'
            value={inputText} 
            onChange ={inputTextHandler}
            type="text" 
            className='todo-input' />
        
        </form> 
    </div>
  )
}
