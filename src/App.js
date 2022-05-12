import './App.css';
import React from 'react';

import Title from './components/Title';
import Singup from './components/Singup'


import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/singup" element={ <Singup/>} />
      </Routes>
     
    </div>
  );
}

export default App;
