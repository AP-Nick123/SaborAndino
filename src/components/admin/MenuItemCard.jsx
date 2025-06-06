import React from 'react';
import './MenuItemCard.css'; // Crearemos este archivo de estilos también

const MenuItemCard = ({ item, onEdit, onDelete }) => {
    // Función para formatear el precio a Soles (PEN)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN'
        }).format(price);
    };

    return (
        <div className="menu-item-card">
            {/* Si un item no tiene imagen, podemos poner una por defecto */}
            <img
                src={item.imagenUrl || 'https://static.wixstatic.com/media/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png/v1/fill/w_568,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png'}
                alt={item.nombre}
                className="menu-item-image"
            />
            <div className="menu-item-content">
                <h4 className="menu-item-title">{item.nombre}</h4>
                <p className="menu-item-description">{item.descripcion}</p>
                <p className="menu-item-price">{formatPrice(item.precio)}</p>
            </div>
            <div className="menu-item-actions">
                <button onClick={() => onEdit(item.id)} className="action-btn">✏️</button>
                <button onClick={() => onDelete(item.id)} className="action-btn">🗑️</button>
            </div>
        </div>
    );
};

export default MenuItemCard;