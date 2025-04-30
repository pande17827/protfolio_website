import React from 'react';
import styles from './FilterTags.module.css';

const FilterTags = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      {categories.map(category => (
        <button
          key={category.id}
          className={`${styles.filterButton} ${activeCategory === category.id ? styles.active : ''}`}
          onClick={() => onFilterChange(category.id)}
        >
          {category.name}
          {activeCategory === category.id && <span className={styles.activeIndicator}></span>}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;