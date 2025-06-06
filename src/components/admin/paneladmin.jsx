// src/components/admin/paneladmin.jsx
import React, { useState } from 'react';
// Importaciones corregidas y normalizadas
// Asegúrate de que los nombres de tus archivos coincidan exactamente con estos:
import Sidebar from './SiderBar.jsx';
import Dashboard from './Dashborad.jsx';
import MenuManagement from './MemuManagement.jsx';
import Reservations from './Reservartions.jsx';
import Messages from './Messages.jsx';

// Importa los estilos para el layout general del panel
import './PanelAdmin.css';

const PanelAdmin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'reservations':
        return <Reservations />;
      case 'menu':
        return <MenuManagement />;
      case 'messages':
        return <Messages />;
      default:
        return <Dashboard />; // Por defecto, si activeSection no coincide
    }
  };

  return (
    <div className="admin-overall-container">
      {/* HEADER: Incluye el título del Panel y la navegación (Sidebar) */}
      <div className="admin-header-section">
        <div className="admin-title-area">
          <h1 className="admin-main-title">Panel de Administración</h1>
          <p className="admin-description">Gestiona el contenido y reservas de tu restaurante</p>
        </div>
        {/* El Sidebar ahora es la navegación de pestañas horizontal */}
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      </div>

      {/* Área donde se mostrará el contenido de cada sección */}
      <div className="admin-content-area">
        {renderSection()}
      </div>
    </div>
  );
};

export default PanelAdmin;