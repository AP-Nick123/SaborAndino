// src/components/sections/ContactSection/ContactSection.jsx

import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import { FaPaperPlane } from 'react-icons/fa';
import { db } from '../../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactSection = () => {
  // Estados para el formulario de contacto
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usamos la colección "contacts"
      await addDoc(collection(db, "contacts"), {
        nombre: nombre,
        correo: correo,
        celular: telefono, // Coincide con tu campo "celular" en Firestore
        asunto: asunto,
        mensaje: mensaje,
        createdAt: serverTimestamp()
      });
      alert('¡Mensaje enviado con éxito!');
      // Limpiamos el formulario
      setNombre('');
      setCorreo('');
      setTelefono('');
      setAsunto('');
      setMensaje('');
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      alert('Hubo un error al enviar tu mensaje.');
    }
  };

  return (
    <section id="contacto" className={styles.contactSection}>
      <div className={styles.container}>
        {/* ... (títulos y columna izquierda) ... */}
        <div className={styles.contentGrid}>
            {/* ... Columna Izquierda ... */}
            <div className={styles.contactForm}>
                <h3>Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label>Nombre *</label>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Correo *</label>
                            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Teléfono</label>
                            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Asunto *</label>
                            <input type="text" value={asunto} onChange={(e) => setAsunto(e.target.value)} required />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Mensaje *</label>
                        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows="6" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        <FaPaperPlane /> Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;