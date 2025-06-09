import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Usaremos un contexto mejorado

// Este componente recibe como "children" la página que queremos proteger (PanelAdmin)
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    // Si no hay un usuario logueado, redirige a la página de login
    return <Navigate to="/login" />;
  }

  // Si hay un usuario, muestra la página protegida
  return children;
};

export default ProtectedRoute;