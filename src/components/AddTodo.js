import React, {useState} from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text !== "") {
      await addDoc(collection(db, "todo"), {
        text,
        completed: false,
      })
      setText("")
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          placeholder="enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  )
}

