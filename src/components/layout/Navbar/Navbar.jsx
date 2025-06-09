// src/components/layout/Navbar/Navbar.jsx

import React, { useState, useContext } from 'react'; // 1. Importa useContext
import { NavLink, Link, useNavigate } from 'react-router-dom'; // 2. Importa Link y useNavigate
import styles from './Navbar.module.css';
import logo from '../../../assets/images/logo.png';
import { FaGlobe, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

// 3. Importa lo necesario para la autenticación
import { AuthContext } from '../../../context/AuthContext.jsx';
import { auth } from '../../../firebase/config.js';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 4. Obtiene el estado del usuario y la función de navegación
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };
  
  // 5. Crea una función para manejar el cierre de sesión
  const handleLogout = async () => {
    closeMobileMenu(); // Cierra el menú móvil si está abierto
    try {
      await signOut(auth);
      // Redirige al login después de cerrar sesión
      navigate('/login'); 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // 6. Componente pequeño para renderizar los controles de cuenta (para no repetir código)
  const AccountControls = () => (
    <>
      {currentUser ? (
        // --- SI EL USUARIO ESTÁ LOGUEADO ---
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
        // --- SI EL USUARIO NO ESTÁ LOGUEADO ---
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
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Reservas</NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? styles.active : '')}>Contacto</NavLink>
          </li>
          
          {/* 7. Renderiza los controles de cuenta para la vista MÓVIL */}
          <li className={styles.mobileOnlyControls}>
             <div className={styles.languageSelector}><FaGlobe /><span>Español</span></div>
             <div className={styles.account}>
                <AccountControls />
             </div>
          </li>
        </ul>
        
        {/* 8. Renderiza los controles de cuenta para la vista de ESCRITORIO */}
        <div className={styles.desktopOnlyControls}>
          <div className={styles.languageSelector}><FaGlobe /><span>Español</span></div>
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