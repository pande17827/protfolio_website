import React from 'react';
import styles from './UseCasesSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: 'fas fa-medkit',
      title: 'Healthcare',
      description: 'Medical image analysis for faster and more accurate diagnoses',
      examples: [
        'Tumor detection in MRI scans',
        'X-ray abnormality classification',
        'Patient health risk prediction'
      ],
      accentColor: '#4F8AFF'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Finance',
      description: 'Real-time fraud detection and financial forecasting',
      examples: [
        'Credit risk assessment',
        'Algorithmic trading signals',
        'Anomaly detection in transactions'
      ],
      accentColor: '#FF7043'
    },
    {
      icon: 'fas fa-robot',
      title: 'Manufacturing',
      description: 'Predictive maintenance and quality control automation',
      examples: [
        'Defect detection in production lines',
        'Equipment failure prediction',
        'Supply chain optimization'
      ],
      accentColor: '#26A69A'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'Retail',
      description: 'Personalized recommendations and inventory management',
      examples: [
        'Customer behavior analysis',
        'Demand forecasting',
        'Visual product search'
      ],
      accentColor: '#AB47BC'
    }
  ];

  return (
    <section id="use-cases" className={styles.useCases}>
      <div className={styles.container}>
        <SectionTitle>Transform Your Industry</SectionTitle>
        <p className={styles.subtitle}>
          AI-powered solutions tailored to your business needs
        </p>
        
        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ '--accent-color': useCase.accentColor }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <i className={`${useCase.icon} ${styles.icon}`}></i>
                  </div>
                  <h3 className={styles.title}>{useCase.title}</h3>
                </div>
                <p className={styles.description}>{useCase.description}</p>
                
                <div className={styles.examples}>
                  <h4 className={styles.examplesTitle}>Key Applications</h4>
                  <ul className={styles.examplesList}>
                    {useCase.examples.map((example, i) => (
                      <li key={i} className={styles.exampleItem}>
                        <div className={styles.checkmark}>
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path 
                              fill="currentColor" 
                              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            />
                          </svg>
                        </div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;