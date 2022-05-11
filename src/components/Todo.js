import React, { useState } from 'react'

export default function Todo({todo, handleDelete}) {
  const [newText, setNewText] = useState(todo.text);
  return (
    <div>
      <input
        type="text"
        value ={todo.text==="" ? newText : todo.text}
      />
      <button>edit</button>
      <button onClick={() => handleDelete(todo.id)}>delete</button>
    </div>
  )
}
