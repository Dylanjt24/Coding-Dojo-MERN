import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;