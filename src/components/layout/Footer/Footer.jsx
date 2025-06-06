import React from 'react';
import styles from './Footer.module.css';
import logo from '../../../assets/images/logo.png'; // Reutiliza el logo

// Iconos (ejemplo con react-icons)
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaCommentDots } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="El Sabor Andino Logo" className={styles.logo} />
              <h3>El Sabor Andino</h3>
            </div>
            <p>
              Auténtica cocina andina con un toque moderno, donde cada plato cuenta una historia de tradición y sabor.
            </p>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h4>Contáctanos</h4>
            <ul>
              <li><FaMapMarkerAlt /> Av. Los Andes 123, Lima, Perú 15001</li>
              <li><FaPhone /> +51 1 234-5678</li>
              <li><FaEnvelope /> info@elsaborandino.com</li>
            </ul>
          </div>

          <div className={styles.hoursSection}>
            <h4>Horarios</h4>
            <ul>
              <li><span>Lunes:</span> 11:00 AM – 10:00 PM</li>
              <li><span>Martes:</span> 11:00 AM – 10:00 PM</li>
              <li><span>Miércoles:</span> 11:00 AM – 10:00 PM</li>
              <li><span>Jueves:</span> 11:00 AM – 10:00 PM</li>
              <li><span>Viernes:</span> 11:00 AM – 11:00 PM</li>
              <li><span>Sábado:</span> 11:00 AM – 11:00 PM</li>
              <li><span>Domingo:</span> 10:00 AM – 9:00 PM</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 El Sabor Andino. Todos los derechos reservados.</p>
        </div>
      </footer>
      <div className={styles.chatBubble}>
        <FaCommentDots />
      </div>
    </>
  );
};

export default Footer;