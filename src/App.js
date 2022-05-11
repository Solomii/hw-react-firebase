import './App.css';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {collection, onSnapshot, query} from "firebase/firestore";


import { db } from "./firebase";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => { 
    // eslint-disable-next-line no-use-before-define
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
            />
          ))}

      </div>
      
    </div>
  );
}

export default App;
