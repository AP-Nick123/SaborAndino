// src/components/admin/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; // Importa estilos específicos para Dashboard

export const Dashboard = () => (
  <div className="dashboard-container">
    <h2 className="dashboard-title">Bienvenido al Panel de Administración</h2>
    <p className="dashboard-description">Visión general del estado actual de tu restaurante.</p>

    <div className="dashboard-stats-grid">
      <div className="stat-card orange">
        <span className="stat-icon">
          {/* Si usas Font Awesome, descomenta la línea de abajo y borra el emoji */}
          {/* <i className="fas fa-utensils"></i> */}
          📊
        </span>
        <h3 className="stat-value">2</h3>
        <p className="stat-label">Total de Reservas</p>
      </div>

      <div className="stat-card green">
        <span className="stat-icon">
          {/* <i className="fas fa-calendar-check"></i> */}
          ✅
        </span>
        <h3 className="stat-value">0</h3>
        <p className="stat-label">Confirmadas Hoy</p>
      </div>

      <div className="stat-card blue">
        <span className="stat-icon">
          {/* <i className="fas fa-list"></i> */}
          ⚙️
        </span>
        <h3 className="stat-value">13</h3>
        <p className="stat-label">Elementos del Menú</p>
      </div>
    </div>
  </div>
);

export default Dashboard;