// src/pages/Reservas/ReservasPage.jsx

import React from 'react';

// 1. Importa todo lo necesario para esta página
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';
import ReservationSection from '../../components/sections/ReservationSection/ReservationSection.jsx';
import layoutStyles from '../Home/Home.module.css'; // Importamos los estilos para el sticky footer
import Home from '../Home/Home.jsx';

const ReservasPage = () => {
  return (
    // 2. Construimos la página completa aquí
    <div className={layoutStyles.pageContainer}>
      <Navbar />
      <main className={layoutStyles.contentWrap}> 
        
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default ReservasPage;