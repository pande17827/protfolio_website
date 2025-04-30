import React from 'react';
import styles from './ContactSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle>Contact Us</SectionTitle>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.subtitle}>Get in Touch</h3>
            <p className={styles.description}>
              Have questions or want to collaborate? Reach out to our team.
            </p>
            <div className={styles.contactMethods}>
              <a href="mailto:contact@aiproject.com" className={styles.contactItem}>
                <i className="fas fa-envelope"></i> contact@aiproject.com
              </a>
              <a href="https://twitter.com/aiproject" className={styles.contactItem}>
                <i className="fab fa-twitter"></i> @aiproject
              </a>
              <a href="https://linkedin.com/company/aiproject" className={styles.contactItem}>
                <i className="fab fa-linkedin"></i> AI Project
              </a>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;