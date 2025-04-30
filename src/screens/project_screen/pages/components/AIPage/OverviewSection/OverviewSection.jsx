import React from 'react';
import styles from './OverviewSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const OverviewSection = () => {
  return (
    <section id="overview" className={styles.overview}>
      <div className={styles.container}>
        <SectionTitle>Overview</SectionTitle>
        <div className={styles.content}>
          <p>
            Our project leverages cutting-edge AI to solve [specific problem]. 
            Traditional solutions [explain limitations], but our approach [explain innovation].
          </p>
          <p>
            What makes us unique is [unique value proposition]. We combine [technology A] 
            with [technology B] to deliver unprecedented results in [domain].
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;