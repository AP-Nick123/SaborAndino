import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { getMenu } from '../../services/menuService';

const categorias = ["Entradas", "Platos Principales", "Postres", "Bebidas"];

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Entradas");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu();
        setMenuItems(data);
      } catch (error) {
        console.error('Error al obtener el menú:', error);
      }
    };
    fetchMenu();
  }, []);

  const itemsFiltrados = menuItems.filter(item => item.categoria === categoriaSeleccionada);

  return (
    <div className={`container py-5 ${styles.menu}`}>
      <h1 className="display-5 text-center mb-3">Nuestro Menú</h1>
      <p className="text-center mb-4">
        Descubre nuestra cuidada selección de platos andinos auténticos, preparados con los mejores ingredientes y técnicas tradicionales.
      </p>

      {/* Botones de categoría */}
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`btn ${categoriaSeleccionada === cat ? 'btn-warning' : 'btn-outline-secondary'}`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tarjetas de menú */}
      <div className="row justify-content-center">
        {itemsFiltrados.map((item) => (
          <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.imagen || 'https://via.placeholder.com/400x250'}
                className="card-img-top"
                alt={item.nombre}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text text-muted">{item.descripcion}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <strong className="text-warning">S/ {item.precio.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
