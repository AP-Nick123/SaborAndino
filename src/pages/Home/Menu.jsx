// src/pages/Home/Menu.jsx
import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { getMenu } from '../../services/menuService';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';
import layoutStyles from './Home.module.css';

const categorias = ["Entradas", "Platos Principales", "Postres", "Bebidas"];

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Entradas");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const data = await getMenu();
        console.log('Datos recibidos en Menu.jsx:', data);
        setMenuItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el menú:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const itemsFiltrados = menuItems.filter(item => item.categoria && item.categoria === categoriaSeleccionada);

  return (
    <div className={layoutStyles.pageContainer}>
      <Navbar />
      <main className={layoutStyles.contentWrap}>
        <div className={`container-fluid py-5 ${styles.menu}`}>
          <h1 className="display-5 text-center mb-3">Nuestro Menú</h1>
          <p className="text-center mb-4">
            Descubre nuestra cuidada selección de platos andinos auténticos, preparados con los mejores ingredientes y técnicas tradicionales.
          </p>

          {/* Estado de carga o error */}
          {loading && <p className="text-center text-muted">Cargando menú...</p>}
          {error && <p className="text-center text-danger">Error: {error}</p>}

          {/* Botones de filtro por categoría */}
          {!loading && !error && (
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
          )}

          {/* Tabla de menú */}
          {!loading && !error && (
            <div className="px-3">
              {menuItems.length === 0 && <p className="text-center text-muted">No se encontraron elementos en el menú.</p>}
              {menuItems.length > 0 && itemsFiltrados.length === 0 && (
                <p className="text-center text-muted">No hay platos disponibles en la categoría "{categoriaSeleccionada}".</p>
              )}
              {itemsFiltrados.length > 0 && (
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemsFiltrados.map((item) => (
                        <tr key={item.id}>
                          <td>{item.nombre || 'Sin nombre'}</td>
                          <td>{item.descripcion || 'Sin descripción'}</td>
                          <td>{item.categoria || 'Sin categoría'}</td>
                          <td>S/ {typeof item.precio === 'number' ? item.precio.toFixed(2) : 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;