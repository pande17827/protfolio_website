import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../../Shared/Button/Button';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Project Name</h1>
        <p className={styles.tagline}>An AI-powered solution to revolutionize your workflow</p>
        <div className={styles.buttons}>
          <Button variant="primary">Try Demo</Button>
          <Button variant="secondary">View on GitHub</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;