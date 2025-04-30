import React from 'react';
import styles from './DemoSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const DemoSection = () => {
  return (
    <section id="demo" className={styles.demo}>
      <div className={styles.container}>
        <SectionTitle>Live Demo</SectionTitle>
        <div className={styles.content}>
          <div className={styles.embedContainer}>
            {/* Replace with your actual demo embed code */}
            <iframe 
              src="https://your-demo-url.com" 
              title="Project Demo"
              className={styles.iframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.instructions}>
            <h3 className={styles.subtitle}>How to use the demo</h3>
            <ol className={styles.steps}>
              <li>Upload your sample data</li>
              <li>Adjust parameters if needed</li>
              <li>Click "Process" to see results</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;