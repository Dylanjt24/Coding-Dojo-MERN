import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EditProduct from './views/EditProduct';
import Main from './views/Main';
import OneProduct from './views/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<OneProduct />} />
        <Route path="/:id/edit" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;