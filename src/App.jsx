import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservasPage from './pages/Reservas/ReservasPage.jsx';
import ContactoPage from './pages/Contacto/ContactoPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import Paneladmin from './components/admin/paneladmin.jsx'; // Nota: se recomienda renombrar a PanelAdmin.jsx
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReservasPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/login" element={<LoginPage />} />
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