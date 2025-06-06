// src/components/admin/Sidebar.jsx
import React from 'react';
import './Sidebar.css'; // Importa tu archivo CSS para este componente

export const Sidebar = ({ setActiveSection, activeSection }) => {
  return (
    <div className="admin-tabs-nav-container">
      <ul className="admin-sidebar-menu">
        <li
          className={`admin-sidebar-item ${activeSection === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveSection('dashboard')}
        >
          <span className="icon">📊</span> Panel Principal
        </li>
        <li
          className={`admin-sidebar-item ${activeSection === 'reservations' ? 'active' : ''}`}
          onClick={() => setActiveSection('reservations')}
        >
          <span className="icon">📅</span> Reservas
        </li>
        <li
          className={`admin-sidebar-item ${activeSection === 'menu' ? 'active' : ''}`}
          onClick={() => setActiveSection('menu')}
        >
          <span className="icon">🍽️</span> Gestión de Menú
        </li>
        <li
          className={`admin-sidebar-item ${activeSection === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveSection('messages')}
        >
          <span className="icon">💬</span> Mensajes
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;