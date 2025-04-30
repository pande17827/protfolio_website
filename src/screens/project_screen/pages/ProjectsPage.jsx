import React, { useState } from 'react';
import FilterTags from '../componetns/FilterTags/ FilterTags'; // Fixed typo in path
import ProjectCard from '../componetns/ProjectCard/ProjectCard'; // Fixed typo in path
import { projects, categories } from '../data/projectsData';
import styles from './ProjectsPage.module.css';
import Header from '../../../components/header/Header';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
    <Header></Header>
    <div className={styles.container}>
      
      {/* Removed duplicate Header import since it's now in App.jsx */}
      <FilterTags 
        categories={categories} 
        activeCategory={activeCategory} 
        onFilterChange={setActiveCategory} 
      />
      
      <main className={styles.main}>
        <div className={styles.cardGrid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
    
    
    </>
  );
};

export default ProjectsPage;