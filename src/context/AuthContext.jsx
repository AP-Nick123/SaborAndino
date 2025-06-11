import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase/config'; // Importamos auth y db desde el archivo centralizado

// Creamos el contexto
export const AuthContext = createContext();

// Creamos el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged es un observador de Firebase que se activa
    // cada vez que el estado de autenticación cambia (login/logout).
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Limpiamos el observador cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  // Mientras carga, podemos mostrar un spinner o nada
  if (loading) {
    return null; 
  }

  // El proveedor pasa el usuario actual a todos sus hijos
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportamos la instancia de la base de datos también para conveniencia
export { db };