import React from 'react';
import styles from './Card.module.css';

const Card = ({ img, title, description, price }) => (
  <div className={`${styles.card} card h-100`}>
    {img && <img src={img} className="card-img-top" alt={title} />}
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {description && <p className="card-text">{description}</p>}
      {price && <p className="card-text text-primary fw-bold">{price}</p>}
    </div>
  </div>
);

export default Card;
