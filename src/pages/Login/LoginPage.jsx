// src/pages/Login/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail 
} from 'firebase/auth';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Controla si estamos en modo Login o Registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos

    try {
      if (isLogin) {
        // --- Iniciar Sesión ---
        await signInWithEmailAndPassword(auth, email, password);
        alert('¡Inicio de sesión exitoso!');
        navigate('/admin'); // Redirige al panel de admin
      } else {
        // --- Crear Cuenta ---
        await createUserWithEmailAndPassword(auth, email, password);
        alert('¡Cuenta creada con éxito! Se ha iniciado sesión.');
        navigate('/admin'); // Redirige al panel de admin
      }
    } catch (err) {
      setError(err.message); // Muestra el mensaje de error de Firebase
    }
  };

  const handlePasswordReset = () => {
    if (!email) {
      setError('Por favor, ingresa tu correo electrónico para recuperar la contraseña.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Se ha enviado un correo para restablecer tu contraseña.');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formCard}>
        <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            {isLogin ? 'Ingresar' : 'Registrarse'}
          </button>
        </form>
        <div className={styles.footerLinks}>
          <button onClick={() => setIsLogin(!isLogin)} className={styles.toggleButton}>
            {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
          </button>
          {isLogin && (
            <button onClick={handlePasswordReset} className={styles.toggleButton}>
              ¿Olvidaste tu contraseña?
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;