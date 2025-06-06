import { useState, useEffect } from 'react';
// Asegúrate que la ruta a tu config de Firebase sea correcta
import { db } from '../../context/AuthContext.js'; 
import { collection, getDocs } from 'firebase/firestore';

export const useTotalContacts = () => {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        // La única diferencia es que apuntamos a la colección "contacts"
        const querySnapshot = await getDocs(collection(db, 'reservations'));
        setTotal(querySnapshot.size);
      } catch (err) {
        setError(err);
        console.error("Error obteniendo total de contactos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTotal();
  }, []);

  return { total, loading, error };
};