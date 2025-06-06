// src/components/sections/ReservationSection/ReservationSection.jsx

import React, { useState } from 'react';
import styles from './ReservationSection.module.css';
import { FaPaperPlane } from 'react-icons/fa';
// Importamos las funciones de Firestore que necesitamos
import { db } from '../../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ReservationSection = () => {
  // 1. Creamos un estado para cada campo del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');

  // 2. Creamos la función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenimos que la página se recargue

    if (!name || !email || !date || !time) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    try {
      // 3. Usamos addDoc para añadir un nuevo documento a la colección "reservations"
      await addDoc(collection(db, "reservations"), {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        guests: Number(guests), // Convertimos a número
        specialRequests: specialRequests,
        status: "pending", // Un estado inicial
        createdAt: serverTimestamp() // Fecha y hora del servidor
      });

      alert('¡Reserva enviada con éxito! Nos pondremos en contacto para confirmar.');
      
      // 4. Limpiamos el formulario
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setGuests('2');
      setSpecialRequests('');

    } catch (error) {
      console.error("Error al añadir el documento: ", error);
      alert('Hubo un error al enviar tu reserva. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section id="reservas" className={styles.reservationSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hacer una Reserva</h2>
        {/* ... subtitulo ... */}

        {/* 5. Conectamos el formulario al "handleSubmit" */}
        <form className={styles.formCard} onSubmit={handleSubmit}>
          {/* ... (el resto del JSX del formulario) */}
          {/* 6. Conectamos cada input a su estado con "value" y "onChange" */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Nombre Completo *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="phone">Número de Teléfono *</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          {/* ... etc para los otros campos ... */}
          <div className={styles.formGroup}>
            <label htmlFor="date">Fecha *</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time">Hora *</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Seleccionar hora</option>
              <option value="19:00">07:00 PM</option>
              <option value="20:00">08:00 PM</option>
              <option value="21:00">09:00 PM</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="guests">Comensales *</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)} required>
              {/* ... opciones ... */}
              <option value="2">2 Comensales</option>
            </select>
          </div>
          <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="requests">Solicitudes Especiales</label>
            <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} rows="5"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            <FaPaperPlane /> Enviar Reserva
          </button>
        </form>
        {/* ... (resto del componente) ... */}
      </div>
    </section>
  );
};

export default ReservationSection;