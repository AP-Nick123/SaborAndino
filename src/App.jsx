import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Menu from './pages/Home/Menu.jsx';
import Gallery from './pages/Home/Gallery.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);

export default App;