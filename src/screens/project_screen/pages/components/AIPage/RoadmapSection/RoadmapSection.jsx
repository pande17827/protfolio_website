import React from 'react';
import styles from './RoadmapSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const RoadmapSection = () => {
  const milestones = [
    {
      quarter: "Q3 2023",
      title: "Initial Release",
      completed: true,
      features: ["Core functionality", "Basic API"]
    },
    {
      quarter: "Q4 2023",
      title: "Performance Improvements",
      completed: true,
      features: ["Optimized inference", "Reduced memory usage"]
    },
    {
      quarter: "Q1 2024",
      title: "New Features",
      completed: false,
      features: ["Multi-modal support", "Enhanced UI"]
    },
    {
      quarter: "Q2 2024",
      title: "Enterprise Ready",
      completed: false,
      features: ["Scalability improvements", "Admin dashboard"]
    }
  ];

  return (
    <section id="roadmap" className={styles.roadmap}>
      <div className={styles.container}>
        <SectionTitle>Future Roadmap</SectionTitle>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`${styles.milestone} ${milestone.completed ? styles.completed : ''}`}
            >
              <div className={styles.milestoneHeader}>
                <div className={styles.quarter}>{milestone.quarter}</div>
                <h3 className={styles.title}>{milestone.title}</h3>
              </div>
              <ul className={styles.features}>
                {milestone.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className={styles.status}>
                {milestone.completed ? (
                  <span className={styles.completedBadge}>
                    <i className="fas fa-check"></i> Completed
                  </span>
                ) : (
                  <span className={styles.plannedBadge}>
                    <i className="fas fa-road"></i> Planned
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;