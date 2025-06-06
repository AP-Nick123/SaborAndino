import React from 'react';
import Header from '../../components/layout/Header/Header.jsx';
import Carousel from '../../components/ui/Carousel/Carousel.jsx';
import Button from '../../components/common/Button/Button.jsx';
import styles from './Home.module.css';
import logo from '../../assets/images/logo1.png';
import dish1 from '../../assets/images/cevicheandino.png';
import ambiance from '../../assets/images/restaurante_ambiente.jpg';

const carouselImages = [
  { src: dish1, alt: 'Ceviche Andino' },
  { src: ambiance, alt: 'Restaurant Ambiance' },
];

const Home = () => {
  return (
    <div className={`${styles.home} container`}>
      <Header logo={logo} />
      <section className={`${styles.hero} text-center py-5 bg-primary text-white`}>
        <h1 className="display-4 mb-3">Welcome to El Sabor Andino</h1>
        <p className="lead mb-4">Experience authentic Andean cuisine in a warm atmosphere.</p>
        <Button text="View Our Menu" link="/menu" />
      </section>
      <section className="py-5">
        <Carousel images={carouselImages} />
      </section>
    </div>
  );
};

export default Home;