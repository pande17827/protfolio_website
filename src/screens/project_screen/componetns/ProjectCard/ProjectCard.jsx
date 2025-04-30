import React from 'react';
import { FiCalendar, FiUsers, FiCheckCircle, FiFlag, FiStar, FiAlertTriangle } from 'react-icons/fi';
import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // Calculate days remaining
  const daysRemaining = Math.ceil(
    (new Date(project.deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Link 
      to={`/projects/${project.id}`} // Adjust this path as needed
      className={styles.cardLink} // Add this to your CSS module
    >
      <div className={`${styles.card} ${styles[project.color]} ${styles[project.priority]}`}>
        {/* Header with title and bookmark */}
        <div className={styles.cardHeader}>
          <div className={styles.titleRow}>
            <h3>{project.title}</h3>
            <button 
              className={styles.bookmarkButton}
              onClick={(e) => e.preventDefault()} // Prevent navigation when clicking bookmark
            >
              <FiStar className={project.bookmarked ? styles.bookmarked : ''} />
            </button>
          </div>
          
          {/* Status and category badges */}
          <div className={styles.metaData}>
            <span className={`${styles.status} ${styles[project.status]}`}>
              {project.status}
            </span>
            <span className={styles.category}>
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Thumbnail Image */}
        {project.thumbnail && (
          <div className={styles.thumbnailContainer}>
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className={styles.thumbnail}
            />
          </div>
        )}
        
        {/* Project description */}
        <p className={styles.description}>{project.description}</p>
        
        {/* Progress section */}
        <div className={styles.progressContainer}>
          <div className={styles.progressLabels}>
            <span>Progress: {project.progress}%</span>
            <span className={daysRemaining <= 3 ? styles.urgent : ''}>
              {daysRemaining > 0 ? `${daysRemaining} days left` : 'Overdue'}
            </span>
          </div>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        
        {/* Key metrics */}
        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <FiCheckCircle className={styles.metricIcon} />
            <span>{project.tasksCompleted}/{project.totalTasks} tasks</span>
          </div>
          <div className={styles.metricItem}>
            <FiUsers className={styles.metricIcon} />
            <span>{project.team.length} members</span>
          </div>
          <div className={styles.metricItem}>
            <FiFlag className={styles.metricIcon} />
            <span>
              {project.completedMilestones}/{project.totalMilestones} milestones
            </span>
          </div>
        </div>
        
        {/* Footer with team and deadline */}
        <div className={styles.footer}>
          <div className={styles.team}>
            {project.team.slice(0, 3).map((member, index) => (
              <div key={index} className={styles.member}>
                <div className={styles.avatar}>
                  {member.charAt(0)}
                </div>
                {index === 2 && project.team.length > 3 && (
                  <span className={styles.moreCount}>+{project.team.length - 3}</span>
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.deadline}>
            <FiCalendar className={styles.calendarIcon} />
            {daysRemaining <= 3 && daysRemaining >= 0 ? (
              <span className={styles.urgent}>
                <FiAlertTriangle /> Due soon
              </span>
            ) : (
              <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;