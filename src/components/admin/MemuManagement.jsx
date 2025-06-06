// src/components/admin/MenuManagement.jsx
import React from 'react';
import './MenuManagement.css'; // Estilos para este componente

const MenuManagement = () => (
  <div className="menu-management-container">
    <h2 className="section-title">Gestión del Menú</h2>
    <div className="menu-actions">
      <button className="add-button">➕ Agregar nuevo plato</button>
    </div>
    <div className="menu-table-placeholder">
      <p>Tabla de platos (simulada)</p>
      <div className="table-row-placeholder">Plato 1: Nombre, Descripción, Precio</div>
      <div className="table-row-placeholder">Plato 2: Nombre, Descripción, Precio</div>
    </div>
  </div>
);

export default MenuManagement;