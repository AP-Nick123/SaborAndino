// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 👈 1. Importa getAuth

const firebaseConfig = {
    // ... (tu configuración se queda igual)
    apiKey: "AIzaSyCXQkSjs1E7vA0OSMHQUKrY_pm9cez94kQ",
    authDomain: "formulario-ebcba.firebaseapp.com",
    projectId: "formulario-ebcba",
    storageBucket: "formulario-ebcba.firebasestorage.app",
    messagingSenderId: "166604505716",
    appId: "1:166604505716:web:b1e7adb7c6c71ec9ca4721"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // 👈 2. Inicializa y exporta el servicio de autenticación