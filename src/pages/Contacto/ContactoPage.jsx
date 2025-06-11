// src/pages/Contacto/ContactoPage.jsx

import React from 'react';

// 1. Importa todo lo necesario para esta página
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';
import ContactSection from '../../components/sections/ContactSection/ContactSection.jsx';
import layoutStyles from '../Home/Home.module.css';

const ContactoPage = () => {
  return (
    // 2. Construimos la página completa aquí
    <div className={layoutStyles.pageContainer}>
      <Navbar />
      <main className={layoutStyles.contentWrap}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactoPage;