import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ text, link }) => (
  <Link to={link} className={`${styles.button} btn btn-primary`}>
    {text}
  </Link>
);

export default Button;