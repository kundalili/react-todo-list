import React, { useEffect, useState } from 'react'
import SearchBar from './component/header/SearchBar';
import './App.css'
import Form from './component/card/Form';
import Card from './component/card/Card';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect (() => {
    getTodos();
  }, []);
  useEffect (() => {
    saveTodos();
  });

  const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
   };
  const getTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }

  return (
    <>
      <SearchBar />
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <Card setTodos={setTodos} todos={todos}  />
    </>
  )
}

export default App;
