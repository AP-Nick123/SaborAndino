import React from 'react';
import Header from '../../components/layout/Header/Header.jsx';
import Carousel from '../../components/ui/Carousel/Carousel.jsx';
import Button from '../../components/common/Button/Button.jsx';
import styles from './Home.module.css';
import logo from '../../assets/images/logo1.png';
import dish1 from '../../assets/images/restauranteinterior.jpg';
import ambiance from '../../assets/images/restaurante_ambiente.jpg';

// Iconos si usas Bootstrap Icons o FontAwesome
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const carouselImages = [
  { src: dish1, alt: 'Restaurante interior' },
  { src: ambiance, alt: 'Ambiente del Restaurante' },
];

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header logo={logo} />

      <section className={`${styles.hero} text-center text-white py-5`}>
        <h1 className="display-4 mb-3">Bienvenidos a El Sabor Andino</h1>
        <p className="lead mb-4">
          Donde la tradición y el sabor se unen para brindarte una experiencia inolvidable.
        </p>
        <Button text="Ver el Menú" link="/menu" />
      </section>

      <section className={`${styles.carouselSection} py-4`}>
        <Carousel images={carouselImages} />
      </section>

      <section className="text-center py-5 text-white bg-dark">
        <div className="container">
          <h2 className="fw-bold mb-4">Sobre Nosotros</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <p className="fs-5">
                En <strong>El Sabor Andino</strong>, rendimos homenaje a nuestras raíces con platos preparados
                con recetas tradicionales, productos locales y un toque de cariño. Nuestro ambiente acogedor,
                música tradicional y atención cálida hacen de cada visita una celebración del Perú andino.
              </p>
              <p className="fs-6 text-muted">
                ¡Te esperamos con los brazos abiertos y el mejor sazón de los Andes!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={`${styles.footer} text-white text-center py-4 bg-secondary`}>
        <div className="container">
          <p className="mb-2 fw-bold">Síguenos en nuestras redes sociales:</p>
          <div className="mb-3 d-flex justify-content-center gap-3 fs-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaWhatsapp />
            </a>
          </div>
          <p className="mb-1">&copy; {new Date().getFullYear()} El Sabor Andino. Todos los derechos reservados.</p>
          <p className="mb-0">Ubicación: Av. Cultura 123, Cusco - Perú | Teléfono: (084) 123-456</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;