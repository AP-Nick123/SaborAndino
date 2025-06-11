import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservasPage from './pages/Reservas/ReservasPage.jsx';
import ContactoPage from './pages/Contacto/ContactoPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import Paneladmin from './components/admin/paneladmin.jsx'; // Nota: se recomienda renombrar a PanelAdmin.jsx
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import Home from './pages/Home/Home.jsx';
import Menu from './pages/Home/Menu.jsx'; // Agrega la importación de Menu

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} /> {/* Cambiado para que Home sea la página inicial */}
      <Route path="/reservas" element={<ReservasPage />} /> {/* Movido ReservasPage a /reservas */}
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<Menu />} /> {/* Ruta para la página de menú */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Paneladmin />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<h1>404: Página No Encontrada</h1>} />
    </Routes>
  );
}

export default App;