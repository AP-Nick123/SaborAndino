import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa las páginas y el componente de ruta protegida
import ReservasPage from './pages/Reservas/ReservasPage.jsx';
import ContactoPage from './pages/Contacto/ContactoPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import PanelAdmin from './components/admin/paneladmin.jsx'; // Nota: se recomienda renombrar a PanelAdmin.jsx
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      {/* --- Rutas Públicas --- */}
      {/* La página principal ahora es la de reservas, como estaba en tu Navbar */}
      <Route path="/" element={<ReservasPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* --- Ruta Privada --- */}
      {/* La ruta /admin está envuelta por ProtectedRoute.
          Solo si el usuario está logueado, se mostrará PanelAdmin.
          Si no, será redirigido a /login. */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <PanelAdmin />
          </ProtectedRoute>
        } 
      />
      
      {/* Puedes añadir una ruta para páginas no encontradas */}
      <Route path="*" element={<h1>404: Página No Encontrada</h1>} />
    </Routes>
  );
}

export default App;