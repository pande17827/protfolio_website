import React from 'react';
import styles from './TechnologyStackSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const techStack = [
  { name: 'Python', purpose: 'Backend & ML' },
  { name: 'TensorFlow', purpose: 'Model training' },
  { name: 'React', purpose: 'Frontend' },
  { name: 'PyTorch', purpose: 'Model development' },
  { name: 'Docker', purpose: 'Deployment' },
  { name: 'OpenCV', purpose: 'Image processing' }
];

const datasets = [
  { name: 'COCO', description: 'Object detection' },
  { name: 'IMDB', description: 'Sentiment analysis' }
];

const TechnologyStackSection = () => {
  return (
    <section id="technology" className={styles.techStack}>
      <div className={styles.container}>
        <SectionTitle>Technology Stack</SectionTitle>
        
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Frameworks & Tools</h3>
          <div className={styles.grid}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.name}>{tech.name}</span>
                <span className={styles.purpose}>{tech.purpose}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Datasets</h3>
          <div className={styles.grid}>
            {datasets.map((dataset, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.name}>{dataset.name}</span>
                <span className={styles.purpose}>{dataset.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;