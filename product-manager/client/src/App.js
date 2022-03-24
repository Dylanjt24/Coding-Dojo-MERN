import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './views/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<OneProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;