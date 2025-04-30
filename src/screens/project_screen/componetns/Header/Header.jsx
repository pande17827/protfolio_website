import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton}>
        <span className={styles.menuIcon}>☰</span>
      </button>
      <h1 className={styles.title}>Data Science Showcase</h1>
      <button className={styles.profileButton}>
        <span className={styles.profileInitial}>LP</span>
      </button>
    </header>
  );
};

export default Header;