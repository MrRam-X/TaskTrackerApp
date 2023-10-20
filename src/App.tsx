import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Registration />}/>
    </Routes>
  );
}

export default App;
