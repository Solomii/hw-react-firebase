import React, { useState } from 'react'

export default function Todo({todo, handleDelete, handleEdit, toggleComplete}) {
  const [newText, setNewText] = useState(todo.text);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewText(todo.text)
    } else {
      todo.text = "";
      setNewText(e.target.value);
    }
  }
  return (
    <div>
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.text === "" ? newText : todo.text}
        onChange={handleChange}
      />
      <button onClick={() => toggleComplete(todo)}>Togle</button>
      <button onClick={() => handleEdit(todo, newText)}>edit</button>
      <button onClick={() => handleDelete(todo.id)}>delete</button>
    </div>
  )
}
