import './App.css';
import React from 'react';

import Title from './components/Title';
import Signin from './components/Signin';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/singup" element={<Signin />} />
      </Routes>
      </>
  );
}

export default App;
