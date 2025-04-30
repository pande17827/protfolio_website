import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { 
  FiHome, 
  FiSettings, 
  FiLayers, 
  FiCode, 
  FiUsers, 
  FiMap, 
  FiHelpCircle, 
  FiMail,
  FiAward,
  FiDatabase,
  FiBarChart2
} from 'react-icons/fi';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <FiHome /> },
    { id: 'features', label: 'Features', icon: <FiSettings /> },
    { id: 'how-it-works', label: 'How It Works', icon: <FiLayers /> },
    { id: 'demo', label: 'Demo', icon: <FiCode /> },
    { id: 'technology', label: 'Technology', icon: <FiDatabase /> },
    { id: 'use-cases', label: 'Use Cases', icon: <FiAward /> },
    { id: 'results', label: 'Results', icon: <FiBarChart2 /> },
    { id: 'team', label: 'Team', icon: <FiUsers /> },
    { id: 'roadmap', label: 'Roadmap', icon: <FiMap /> },
    { id: 'faq', label: 'FAQ', icon: <FiHelpCircle /> },
    { id: 'contact', label: 'Contact', icon: <FiMail /> }
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebarHeader}>
        {!collapsed && <h2 className={styles.logo}>AI Nexus</h2>}
        <button 
          className={styles.collapseButton}
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
              onClick={() => setActiveItem(item.id)}
              data-tooltip={collapsed ? item.label : null}
            >
              <a href={`#${item.id}`} className={styles.navLink}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                {!collapsed && (
                  <>
                    <span className={styles.navText}>{item.label}</span>
                    <div className={styles.activeIndicator}></div>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={styles.sidebarFooter}>
        {!collapsed && (
          <div className={styles.version}>v2.5.1</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;