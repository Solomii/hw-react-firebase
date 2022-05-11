import './App.css';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {collection, onSnapshot, query, deleteDoc, doc, updateDoc} from "firebase/firestore";


import { db } from "./firebase";

function App() {
  const [todo, setTodo] = useState([]);

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
  
  
  return (
    <div className="App">
      <Title />
      <AddTodo />
      <div>
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
      
    </div>
  );
}

export default App;
