import React from 'react';
import styles from './ResultsSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const performanceMetrics = [
  { metric: 'Accuracy', value: '95%', comparison: '+10% vs baseline' },
  { metric: 'Inference Time', value: '50ms', comparison: '2x faster than v1' },
  { metric: 'Precision', value: '93%', comparison: 'Industry average: 85%' }
];

const ResultsSection = () => {
  return (
    <section id="results" className={styles.results}>
      <div className={styles.container}>
        <SectionTitle>Results & Performance</SectionTitle>
        
        <div className={styles.metrics}>
          {performanceMetrics.map((item, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metricValue}>{item.value}</div>
              <div className={styles.metricName}>{item.metric}</div>
              <div className={styles.comparison}>{item.comparison}</div>
            </div>
          ))}
        </div>

        <div className={styles.chartContainer}>
          {/* Placeholder for your chart - replace with actual chart component */}
          <div className={styles.chartPlaceholder}>
            [Performance Chart Will Appear Here]
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;