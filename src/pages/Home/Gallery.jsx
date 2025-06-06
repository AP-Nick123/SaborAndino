import React from 'react';
import Card from '../../components/common/Card/Card.jsx';
import styles from './Gallery.module.css';

const galleryItems = [
  { id: 1, title: 'Dish 1', description: 'A delicious Andean specialty' },
  { id: 2, title: 'Restaurant Ambiance', description: 'Cozy and inviting atmosphere' },
];

const Gallery = () => {
  return (
    <div className={`${styles.gallery} container py-5`}>
      <h1 className="display-5 text-center mb-5">Our Gallery</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {galleryItems.map((item) => (
          <div className="col" key={item.id}>
            <Card title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;