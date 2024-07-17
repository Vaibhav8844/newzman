import React from 'react'
import NavBar from './Components/NavBar.js'
import News from './Components/News.js'
import { Route,Routes } from 'react-router-dom';
import F404 from './Components/404.js';
import { useState } from 'react';

export function App() {
  const [category,setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory}/>
      <Routes>
      <Route path="*" element={<News category={category}/>} />
      {/* <Route path="*" element={<F404/>} /> */}
      </Routes>
    </>
  )
}

