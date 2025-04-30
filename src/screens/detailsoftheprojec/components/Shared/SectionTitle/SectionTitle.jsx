import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ children }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default SectionTitle;