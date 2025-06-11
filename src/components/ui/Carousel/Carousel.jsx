// src/components/ui/Carousel/Carousel.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para los botones
import styles from './Carousel.module.css';

const Carousel = ({ images }) => (
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className={`${styles.carouselImage} d-block w-100`}
          />
          {/* Contenedor para el botón, centrado en la diapositiva */}
          {image.buttonText && image.buttonLink && (
            <div className="carousel-caption d-flex justify-content-center align-items-center">
              <Link to={image.buttonLink} className="btn btn-warning text-white">
                {image.buttonText}
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;