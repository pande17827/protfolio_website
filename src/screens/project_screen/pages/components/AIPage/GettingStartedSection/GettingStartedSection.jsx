import React from 'react';
import styles from './GettingStartedSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Button from '../../Shared/Button/Button';

const GettingStartedSection = () => {
  const steps = [
    {
      title: "Installation",
      content: "Install the package using pip:",
      code: "pip install aiproject",
    },
    {
      title: "Basic Usage",
      content: "Import and initialize the model:",
      code: "from aiproject import Model\nmodel = Model.load_pretrained()",
    },
    {
      title: "Run Inference",
      content: "Process your data:",
      code: "results = model.predict(your_data)",
    },
  ];

  return (
    <section id="getting-started" className={styles.gettingStarted}>
      <div className={styles.container}>
        <SectionTitle>Getting Started</SectionTitle>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <p className={styles.stepContent}>{step.content}</p>
              <pre className={styles.codeBlock}>
                <code>{step.code}</code>
              </pre>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Button variant="primary">
            <i className="fab fa-github"></i> View Full Documentation
          </Button>
          <Button variant="secondary">
            <i className="fas fa-book"></i> Read Tutorial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;