// src/hooks/useTotalMenuItems.js
import { useState, useEffect } from 'react';
import { db } from '../../context/AuthContext.js'; // Asegúrate que la ruta a tu config de Firebase sea correcta
import { collection, getDocs } from 'firebase/firestore';

export const useTotalMenuItems = () => {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        // Asumimos que la colección se llama 'menuItems'. ¡Cámbialo si es necesario!
        const querySnapshot = await getDocs(collection(db, 'menu'));
        setTotal(querySnapshot.size);
      } catch (err) {
        setError(err);
        console.error("Error obteniendo total de items del menú:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTotal();
  }, []);

  return { total, loading, error };
};