import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this project open-source?",
      answer: "Yes, our project is completely open-source and available on GitHub under the MIT license."
    },
    {
      question: "How can I contribute to the project?",
      answer: "You can contribute by submitting pull requests, reporting issues, or improving documentation. Check our GitHub for more details."
    },
    {
      question: "What are the system requirements?",
      answer: "The system requires Python 3.8+ and at least 4GB RAM for optimal performance."
    },
    {
      question: "Is there commercial support available?",
      answer: "Yes, we offer commercial support and enterprise plans. Contact us for more information."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.question}>
                <h3>{faq.question}</h3>
                <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;