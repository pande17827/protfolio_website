import React from 'react';
import styles from './TestimonialsSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This AI solution has transformed our workflow, saving us hundreds of hours each month.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "avatar1.jpg"
    },
    {
      quote: "The accuracy and speed of the model exceeded our expectations. Highly recommended!",
      author: "Michael Chen",
      role: "Data Science Lead, InnovateAI",
      avatar: "avatar2.jpg"
    },
    {
      quote: "Easy to integrate and delivers consistent results. Our team loves working with it.",
      author: "Emma Davis",
      role: "Product Manager, FutureTech",
      avatar: "avatar3.jpg"
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <SectionTitle>What People Are Saying</SectionTitle>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quote}>
                <i className="fas fa-quote-left"></i>
                <p>{testimonial.quote}</p>
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {/* Replace with actual image */}
                  <div className={styles.avatarInitials}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;