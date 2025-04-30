import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>AIProject</div>
            <p className={styles.tagline}>Innovating with AI for a better future</p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#demo">Demo</a>
              <a href="#technology">Technology</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <a href="#getting-started">Documentation</a>
              <a href="#faq">FAQ</a>
              <a href="#roadmap">Roadmap</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AI Project. All rights reserved.
          </div>
          <div className={styles.social}>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;