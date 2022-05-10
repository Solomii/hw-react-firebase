import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


export default function AddTodo() {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="enter todo..."
        />
        <button>Add</button>
      </form>
    </>
  )
}

