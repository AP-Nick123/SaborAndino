// src/components/layout/Navbar/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../assets/images/logo.png';
import { FaGlobe, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* El logo ahora también es el enlace a la página de Reservas */}
        <NavLink to="/" className={styles.logoContainer} onClick={closeMobileMenu}>
          <img src={logo} alt="El Sabor Andino Logo" className={styles.logo} />
          <span>El Sabor Andino</span>
        </NavLink>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          {/* 1. El enlace de "Reservas" ahora apunta a la ruta principal "/" */}
          <li onClick={closeMobileMenu}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Reservas</NavLink>
          </li>
          
          {/* 2. El enlace de "Inicio" ha sido eliminado */}
          
          <li onClick={closeMobileMenu}>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? styles.active : '')}>Contacto</NavLink>
          </li>
          
          {/* Aquí puedes añadir los enlaces a Menú y Galería en el futuro */}
          {/* <li onClick={closeMobileMenu}>
            <NavLink to="/menu" className={...}>Menú</NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="/galeria" className={...}>Galería</NavLink>
          </li>
          */}

          {/* ... (el resto del código se queda igual) ... */}
          <li className={styles.mobileOnlyControls}>
             <div className={styles.languageSelector}><FaGlobe /><span>Español</span></div>
             <div className={styles.account}><FaUserCircle /><span>Cuenta</span></div>
          </li>
        </ul>
        
        <div className={styles.desktopOnlyControls}>
          <div className={styles.languageSelector}><FaGlobe /><span>Español</span></div>
          <div className={styles.account}><FaUserCircle /><span>Cuenta</span></div>
        </div>

        <button className={styles.hamburgerButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;