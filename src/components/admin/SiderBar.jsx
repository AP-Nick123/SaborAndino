// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ setActiveSection }) => {
  return (
    <div style={{
      width: '220px',
      backgroundColor: '#2c3e50',
      color: '#fff',
      padding: '20px'
    }}>
      <h2>Admin</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li onClick={() => setActiveSection('dashboard')} style={{ cursor: 'pointer', margin: '10px 0' }}>📊 Dashboard</li>
        <li onClick={() => setActiveSection('menu')} style={{ cursor: 'pointer', margin: '10px 0' }}>🍽️ Menú</li>
        <li onClick={() => setActiveSection('reservations')} style={{ cursor: 'pointer', margin: '10px 0' }}>📅 Reservas</li>
        <li onClick={() => setActiveSection('messages')} style={{ cursor: 'pointer', margin: '10px 0' }}>💬 Mensajes</li>
      </ul>
    </div>
  );
};

export default Sidebar;
