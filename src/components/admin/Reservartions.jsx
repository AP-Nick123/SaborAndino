// src/components/admin/Reservations.jsx
import React from 'react';
import './Reservations.css'; // Estilos para este componente

const Reservations = () => (
  <div className="reservations-container">
    <h2 className="section-title">Gestión de Reservas</h2>
    <div className="reservations-actions">
      <button className="filter-button">Filtrar por Fecha</button>
      <button className="filter-button">Ver Pendientes</button>
    </div>
    <div className="reservations-list-placeholder">
      <p>Lista de reservas (simulada)</p>
      <div className="reservation-item">Reserva para Juan Pérez - 05/06/2025 - 2 personas</div>
      <div className="reservation-item">Reserva para María García - 05/06/2025 - 4 personas</div>
    </div>
  </div>
);

export default Reservations;