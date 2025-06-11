// src/components/layout/Navbar/Navbar.jsx
import React, { useState, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../assets/images/logo.png';
import { FaGlobe, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { auth } from '../../../firebase/config.js';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };
  
  const handleLogout = async () => {
    closeMobileMenu();
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const AccountControls = () => (
    <>
      {currentUser ? (
        <>
          <Link to="/admin" className={styles.accountLink} onClick={closeMobileMenu}>
            <FaUserCircle />
            <span>Panel Admin</span>
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Cerrar Sesión
          </button>
        </>
      ) : (
        <Link to="/login" className={styles.accountLink} onClick={closeMobileMenu}>
          <FaUserCircle />
          <span>Cuenta</span>
        </Link>
      )}
    </>
  );

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logoContainer} onClick={closeMobileMenu}>
          <img src={logo} alt="El Sabor Andino Logo" className={styles.logo} />
          <span>El Sabor Andino</span>
        </NavLink>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <li onClick={closeMobileMenu}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
              Inicio
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.active : '')}>
              Menú
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="/reservas" className={({ isActive }) => (isActive ? styles.active : '')}>
              Reservas
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? styles.active : '')}>
              Contacto
            </NavLink>
          </li>
          <li className={styles.mobileOnlyControls}>
            <div className={styles.languageSelector}>
              <FaGlobe />
              <span>Español</span>
            </div>
            <div className={styles.account}>
              <AccountControls />
            </div>
          </li>
        </ul>
        
        <div className={styles.desktopOnlyControls}>
          <div className={styles.languageSelector}>
            <FaGlobe />
            <span>Español</span>
          </div>
          <AccountControls />
        </div>

        <button className={styles.hamburgerButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;