import React, { useState, useEffect } from 'react';

import AddTodo from './AddTodo';
import Todo from './Todo';

import {collection, onSnapshot, query, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { db } from "../firebase";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase.js";

import { useNavigate } from 'react-router-dom';

export default function Title () {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    const q = query(collection(db, "todo"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
  querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todoArr);
    });
    return () => unsub
   }, []);
  
  const handleDelete = async (id) => {
    const todoDocRef = doc(db, "todo", id)
    try {
      await deleteDoc(todoDocRef)
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = async (todo, text) => {
  try {
     await updateDoc(doc(db, "todo", todo.id), { text: text });
  } catch (err) {
    console.error(err)
  }
  }
  
  const toggleComplete = async (todo) => {
  try {
     await updateDoc(doc(db, "todo", todo.id), { completed: !todo.completed });
  } catch (err) {
    console.error(err)
   }
  }

   useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
       navigate("/")
     }
    })
   }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/singup")
    }).catch((err) => { alert(err.message);
})
}
  
  return (
    <div className="App">
      <h1>Write to Do List</h1>
      <AddTodo />
      <div className="todo__box">
        {
          todo.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              toggleComplete={toggleComplete}
            />
          ))}
      </div>
      <div>
        <button className="sign__out__btn"  onClick={handleSignOut}>sign out</button>
      </div>
    </div>
  );
}
