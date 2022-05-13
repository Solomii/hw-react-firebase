import React, { useState } from 'react';

import { MdDone, MdDelete,MdEdit } from "react-icons/md";

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
    <div className='todo__box'>
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.text === "" ? newText : todo.text}
        onChange={handleChange}
      />
      <button onClick={() => toggleComplete(todo)}><MdDone/></button>
      <button onClick={() => handleEdit(todo, newText)}><MdEdit/></button>
      <button onClick={() => handleDelete(todo.id)}><MdDelete/></button>
    </div>
  )
}
