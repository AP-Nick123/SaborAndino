// src/components/ui/ReservationForm/ReservationForm.jsx

import React from 'react';
import styles from './ReservationForm.module.css'; // Esta línea ahora funcionará

const ReservationForm = () => {
  return (
    <div className={styles.formContainer}>
      <p>Asegura tu mesa y vive una experiencia inolvidable.</p>
      <form>
        <input type="text" placeholder="Tu Nombre Completo" required />
        <input type="email" placeholder="Tu Email de Contacto" required />
        <input type="date" required />
        <input type="time" required />
        <button type="submit">Reservar Ahora</button>
      </form>
    </div>
  );
};

export default ReservationForm;