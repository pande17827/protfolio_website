import React from 'react';
import styles from './HowItWorksSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Data Input",
      description: "The system accepts various input formats including images, text, or structured data.",
      icon: "fas fa-upload"
    },
    {
      title: "Preprocessing",
      description: "Input data is cleaned and transformed into a format suitable for the AI model.",
      icon: "fas fa-cogs"
    },
    {
      title: "Model Processing",
      description: "Our trained neural network analyzes the data and extracts meaningful patterns.",
      icon: "fas fa-brain"
    },
    {
      title: "Result Generation",
      description: "The system outputs predictions, classifications, or insights based on the analysis.",
      icon: "fas fa-chart-bar"
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <SectionTitle>How It Works</SectionTitle>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>
                  <i className={step.icon}></i>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.architecture}>
          <h3 className={styles.architectureTitle}>System Architecture</h3>
          <div className={styles.architectureDiagram}>
            [Architecture diagram placeholder]
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;