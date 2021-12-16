import TodoList from "./TodoList";
import React, {useEffect, useState, useRef} from 'react';
import * as uuid from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameref = useRef()

  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameref.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuid.v4()  , name: name, complete: false}] 
    })
    todoNameref.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/> 
      <input ref={todoNameref} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
    
  )
}

export default App;
