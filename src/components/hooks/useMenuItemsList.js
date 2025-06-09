import { useState, useEffect } from 'react';
import { db } from '../../firebase/config'; // Revisa que la ruta sea correcta
import { collection, getDocs, query } from 'firebase/firestore'; // Ya no necesitamos orderBy aquí

export const useMenuItemsList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const menuCollectionRef = collection(db, 'menu');
        
        // YA NO ORDENAMOS AQUÍ, solo obtenemos la colección
        const querySnapshot = await getDocs(menuCollectionRef);
        
        const itemsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setMenuItems(itemsList);
      } catch (err) {
        setError(err);
        console.error("Error obteniendo la lista de menú:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, loading, error };
};