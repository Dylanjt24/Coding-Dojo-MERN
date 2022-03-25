import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import CreateAuthor from './views/CreateAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <BrowserRouter>
      <h1 className="text-center">Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<CreateAuthor />} />
        <Route path="/:id/edit" element={<EditAuthor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;