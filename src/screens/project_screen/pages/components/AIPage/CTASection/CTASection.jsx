import React from 'react';
import styles from './CTASection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Button from '../../Shared/Button/Button';

const CTASection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <SectionTitle>Ready to Get Started?</SectionTitle>
        <p className={styles.description}>
          Join hundreds of users already benefiting from our AI solution
        </p>
        <div className={styles.buttons}>
          <Button variant="primary">Try Demo Now</Button>
          <Button variant="secondary">View Documentation</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;