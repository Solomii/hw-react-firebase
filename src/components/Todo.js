import React, { useState } from 'react'

export default function Todo({todo}) {
  const [newText, setNewText] = useState(todo.text);
  return (
    <div>
      <input
        type="text"
        value ={todo.text==="" ? newText : todo.text}
      />
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}
