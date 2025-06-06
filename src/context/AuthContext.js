
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
 apiKey: "AIzaSyCXQkSjs1E7vA0OSMHQUKrY_pm9cez94kQ",
 authDomain: "formulario-ebcba.firebaseapp.com",
 projectId: "formulario-ebcba",
 storageBucket: "formulario-ebcba.firebasestorage.app",
 essagingSenderId: "166604505716",
 appId: "1:166604505716:web:b1e7adb7c6c71ec9ca4721"
};  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);