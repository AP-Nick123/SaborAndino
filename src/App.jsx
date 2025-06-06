// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Solo importamos las PÁGINAS completas
import ReservasPage from './pages/Reservas/ReservasPage.jsx';
import ContactoPage from './pages/Contacto/ContactoPage.jsx';

function App() {
  return (
    // 2. Las rutas ahora son una lista simple. No están anidadas.
    <Routes>
      <Route path="/" element={<ReservasPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      {/* Puedes añadir más rutas aquí en el futuro */}
    </Routes>
  );
}

export default App;