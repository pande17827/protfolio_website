import React from "react";
import { Link } from "react-router-dom";
import { blogData, categories } from '../data/data';
import { useState } from "react";
import FilterTags from "../../project_screen/componetns/FilterTags/ FilterTags";

function BlogCard() {
    const [activeCategory, setActiveCategory] = useState('all');
    
    // image path
    const imagePath = (img) => new URL(`/src/screens/blog_screen/Assets/images/${img}`, import.meta.url).href;

    const filteredProjects = activeCategory === 'all' 
        ? blogData 
        : blogData.filter(project => project.category === activeCategory);

    return (
        <>
            <FilterTags 
                categories={categories} 
                activeCategory={activeCategory} 
                onFilterChange={setActiveCategory} 
            />
            
            <div style={styles.container}>  
                {filteredProjects.map(blog => (
                    <div key={blog.id} style={styles.card}>
                        <img src={imagePath(blog.image)} alt={blog.title} style={styles.image} />
                        
                        <div style={styles.content}>
                            <div style={styles.category}>{blog.category}</div>
                            <h2 style={styles.title}>{blog.title}</h2>
                            <p style={styles.description}>{blog.shortDescription}</p>
                        </div>
                        
                        <div style={styles.footer}>
                            <div style={styles.authorInfo}>
                                <img src={blog.authorAvatar} alt={blog.authorName} style={styles.avatar} />
                                <span>{blog.authorName}</span>
                            </div>
                            <span style={styles.date}>{blog.date}</span>
                        </div>

                        <Link to={blog.readMoreLink} style={styles.readMore}>
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BlogCard


const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1330px',
    margin: '70px auto',
    justifyContent: 'center',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '450px',
    maxWidth: '300px',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '15px',
  },
  content: {
    flexGrow: 1,
  },
  category: {
    fontSize: '0.9rem',
    color: '#007BFF',
    marginBottom: '5px',
    fontWeight: '600',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '20px',
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  avatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
  date: {
    fontSize: '0.8rem',
    color: '#888',
  },
  readMore: {
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#007BFF',
    textDecoration: 'none',
  },
};