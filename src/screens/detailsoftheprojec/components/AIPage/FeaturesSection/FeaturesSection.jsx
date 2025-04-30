import React from 'react';
import styles from './FeaturesSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const features = [
  {
    icon: '⚡',
    title: 'Real-time Processing',
    description: 'Process data in milliseconds with our optimized algorithms'
  },
  {
    icon: '🧠',
    title: 'Advanced ML Models',
    description: 'State-of-the-art models trained on diverse datasets'
  },
  {
    icon: '🔍',
    title: 'Precision Analytics',
    description: 'Get actionable insights with 95%+ accuracy'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <SectionTitle>Key Features</SectionTitle>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;