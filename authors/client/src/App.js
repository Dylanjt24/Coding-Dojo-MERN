import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import CreateAuthor from './views/CreateAuthor'

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/new' element={<CreateAuthor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;