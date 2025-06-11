// src/pages/Home/Home.jsx
import React from 'react';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Carousel from '../../components/ui/Carousel/Carousel.jsx';
import Button from '../../components/common/Button/Button.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';
import layoutStyles from './Home.module.css';
import styles from './Home.module.css';
import dish1 from '../../assets/images/restauranteinterior.jpg';
import ambiance from '../../assets/images/restaurante_ambiente.jpg';
// Importaciones comentadas; usa estas si las imágenes están en src/assets/images/
import plato1 from '../../assets/images/lomosaltado.png';
import plato2 from '../../assets/images/cevicheandino.png';
import plato3 from '../../assets/images/quinuadulce.jpg';
import { FaFacebook, FaInstagram, FaWhatsapp, FaStar } from 'react-icons/fa';

const carouselImages = [
  { src: dish1, alt: 'Restaurante interior', buttonText: 'Ver el Menú', buttonLink: '/menu' },
  { src: ambiance, alt: 'Ambiente del Restaurante', buttonText: 'Reservar Mesa', buttonLink: '/reservas' },
];

// Platos destacados con placeholders si las imágenes no están disponibles
const featuredDishes = [
  {
    id: 1,
    name: 'Lomo Saltado',
    description: 'Clásico peruano con carne, papas y especias andinas',
    price: 45.90,
    image: plato1,
    fallback: 'https://via.placeholder.com/400x250?text=Lomo+Saltado',
  },
  {
    id: 2,
    name: 'Ceviche Andino',
    description: 'Pescado fresco marinado con limón y ají',
    price: 38.50,
    image: plato2,
    fallback: 'https://via.placeholder.com/400x250?text=Ceviche+Andino',
  },
  {
    id: 3,
    name: 'Quinua Dulce',
    description: 'Postre tradicional con quinua y miel de la sierra',
    price: 20.00,
    image: plato3,
    fallback: 'https://via.placeholder.com/400x250?text=Quinua+Dulce',
  },
];

// Testimonios de clientes
const testimonials = [
  { id: 1, name: 'Ana Gómez', text: '¡Una experiencia increíble! Los sabores me llevaron de vuelta a los Andes.', rating: 5 },
  { id: 2, name: 'Carlos Pérez', text: 'El mejor lomo saltado que he probado, y el ambiente es acogedor.', rating: 4 },
];

export const Home = () => {
  return (
    <div className={layoutStyles.pageContainer}>
      <Navbar />
      <main className={layoutStyles.contentWrap}>
        {/* Sección Hero con fondo de imagen */}
        <section className={`${styles.heroWithImage} text-center text-white py-5`}>
          <h1 className="display-4 mb-3">Bienvenidos a El Sabor Andino</h1>
          <p className="lead mb-4">
            Donde la tradición y el sabor se unen para brindarte una experiencia inolvidable.
          </p>
          {/* Botón "Ver el Menú" movido al carrusel */}
        </section>

        {/* Carrusel con botones */}
        <section className={`${styles.carouselSection} py-4`}>
          <Carousel images={carouselImages} />
        </section>

        {/* Sección Sobre Nosotros */}
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

        {/* Sección Platos Destacados */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Platos Destacados</h2>
            <div className="row justify-content-center">
              {featuredDishes.map((dish) => (
                <div className="col-lg-4 col-md-6 mb-4" key={dish.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={dish.image}
                      className="card-img-top"
                      alt={dish.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{dish.name}</h5>
                      <p className="card-text text-muted">{dish.description}</p>
                      <p className="fw-bold text-warning">S/ {dish.price.toFixed(2)}</p>
                    </div>
                    <div className="card-footer bg-white border-0 text-end">
                      <Button text="Ver Más" link="/menu" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Testimonios */}
        <section className="py-5 text-center">
          <div className="container">
            <h2 className="fw-bold mb-5">Lo Que Dicen Nuestros Clientes</h2>
            <div className="row justify-content-center">
              {testimonials.map((testimonial) => (
                <div className="col-lg-5 col-md-6 mb-4" key={testimonial.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <p className="card-text">"{testimonial.text}"</p>
                      <div className="d-flex justify-content-center text-warning mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="fw-bold mb-0">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Llamado a la Acción */}
        <section className="py-5 text-center text-white bg-secondary">
          <div className="container">
            <h2 className="fw-bold mb-4">¡Únete a la Experiencia Andina!</h2>
            <p className="lead mb-4">
              Reserva tu mesa hoy y descubre los sabores auténticos del Perú en El Sabor Andino.
            </p>
            <Button text="Reservar Ahora" link="/reservas" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;