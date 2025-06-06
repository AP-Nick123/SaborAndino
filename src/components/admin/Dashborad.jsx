// src/components/admin/Dashborad.jsx
import React from 'react';
import './Dashboard.css';

// 1. Importa los hooks que acabamos de crear
import { useTotalContacts } from '../hooks/useTotalContacts';
import { useTotalReservas } from '../hooks/useTotalReservas.js';
import { useTotalMenuItems } from '../hooks/useTotalMenuItems.js';

// Nota: El hook para "Confirmadas Hoy" es más complejo, lo dejaremos como estático por ahora
// pero la lógica sería similar, con una consulta por fecha.

// Un componente pequeño para mostrar el valor de la estadística de forma limpia
const StatValue = ({ hookResult }) => {
  if (hookResult.loading) return '...';
  if (hookResult.error) return 'X';
  return hookResult.total;
};

export const Dashboard = () => {  
  // 2. Llama a los hooks para obtener los datos
  const totalReservasHook = useTotalReservas();
  const totalMenuItemsHook = useTotalMenuItems();
  const totalContactsHook = useTotalContacts();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Bienvenido al Panel de Administración</h2>
      <p className="dashboard-description">Visión general del estado actual de tu restaurante.</p>

      <div className="dashboard-stats-grid">
        {/* Tarjeta de Total de Reservas */}
        <div className="stat-card orange">
          <span className="stat-icon">📊</span>
          <h3 className="stat-value">
            <StatValue hookResult={totalContactsHook} />
          </h3>
          <p className="stat-label">Total de Reservas</p>
        </div>

        {/* Tarjeta de Confirmadas Hoy (sigue estática por ahora) */}
        <div className="stat-card green">
          <span className="stat-icon">✅</span>
          <h3 className="stat-value">
            <StatValue hookResult={totalReservasHook} />
          </h3>
          <p className="stat-label">Confirmadas Hoy</p>
        </div>

        {/* Tarjeta de Elementos del Menú */}
        <div className="stat-card blue">
          <span className="stat-icon">⚙️</span>
          <h3 className="stat-value">
            <StatValue hookResult={totalMenuItemsHook} />
          </h3>
          <p className="stat-label">Elementos del Menú</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;