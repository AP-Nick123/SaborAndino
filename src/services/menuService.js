// src/services/menuService.js
import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

export const getMenu = async () => {
  const menuRef = collection(db, 'menu');
  const snapshot = await getDocs(menuRef);
  const menuItems = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  console.log('🔥 Datos del menú desde Firestore:', menuItems); // 👈 Agrega esto
  return menuItems;
};