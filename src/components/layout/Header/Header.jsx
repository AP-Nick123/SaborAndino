import React from 'react';
import styles from './Header.module.css';

const Header = ({ logo }) => (
  <header className={`${styles.header} text-center py-3 bg-primary text-white`}>
    {logo && <img src={logo} alt="El Sabor Andino Logo" style={{ height: '60px' }} />}
    <h2 className="mt-2">El Sabor Andino</h2>
  </header>
);

export default Header;