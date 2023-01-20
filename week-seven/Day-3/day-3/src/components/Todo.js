import { useState } from "react"

export default function Todo({ todo, completeTodo, editTodoText, deleteTodo }) {
  const [showInput, setShowInput] = useState(false)
  return (
    <li>
      <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {todo.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editTodoText(todo.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        Complete
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            completeTodo(todo.id, e)
          }}
        />
      </label>
      <button
        checked={todo.completed}
        onClick={(e) => {
          deleteTodo(todo.id)
        }}
      >
        Delete Todo
      </button>
    </li>
  )
}