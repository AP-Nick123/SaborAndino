// src/components/PanelAdmin.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import MenuManagement from './MenuManagement';
import Reservations from './Reservations';
import Messages from './Messages';

const PanelAdmin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'menu':
        return <MenuManagement />;
      case 'reservations':
        return <Reservations />;
      case 'messages':
        return <Messages />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar setActiveSection={setActiveSection} />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Panel de Administración - El Sabor Andino</h1>
        {renderSection()}
      </div>
    </div>
  );
};

export default PanelAdmin;
