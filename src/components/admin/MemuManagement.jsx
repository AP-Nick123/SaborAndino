// src/components/admin/MenuManagement.jsx

import React from 'react';
import { useMenuItemsList } from '../hooks/useMenuItemsList'; // Asegúrate de que la ruta sea correcta
import MenuItemCard from './MenuItemCard';
import './MenuManagement.css'; 

const MenuManagement = () => {
  const { menuItems, loading, error } = useMenuItemsList();

  const handleEdit = (id) => {
    console.log("Editar elemento con ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Borrar elemento con ID:", id);
  };

  // ESTA FUNCIÓN CON JSX PERTENECE AQUÍ, EN EL COMPONENTE
  const renderContent = () => {
    if (loading) {
      return <p>Cargando menú...</p>;
    }
    
    if (error) {
      return <p>Error al cargar el menú: {error.message}</p>;
    }
    
    if (menuItems.length === 0) {
      return <p>No hay elementos en el menú. ¡Agrega el primero!</p>;
    }
    
    return (
      <div className="menu-grid">
        {menuItems.map(item => (
          <MenuItemCard
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="menu-management-container">
      <div className="menu-management-header">
        <h2 className="section-title">Gestión de Menú</h2>
        <div className="header-actions">
          <button className="btn btn-primary">+ Agregar Elemento</button>
          <button className="btn btn-secondary">Exportar JSON</button>
        </div>
      </div>
      
      {renderContent()}
    </div>
  );
};

export default MenuManagement;