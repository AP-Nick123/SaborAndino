import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, price }) => (
  <div className={`${styles.card} card h-100`}>
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {description && <p className="card-text">{description}</p>}
      {price && <p className="card-text text-primary fw-bold">${price.toFixed(2)}</p>}
    </div>
  </div>
);

export default Card;