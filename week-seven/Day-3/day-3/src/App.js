import Counter from "./components/Counter";
import './styles.css'
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  const addTodo = (e) => {
    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]))
    setTodos([newTodo, ...todos])
    e.target.value = ""
  }

  const completeTodo = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
  }

  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
    e.target.value = ""
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    localStorage.setItem(
      "todos",
      JSON.stringify([...todosCopy])
    )
    setTodos([...todosCopy])
  }

  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
      <Counter />
    </div>
  );
}

export default App;
