import React from 'react';
import styles from './TeamSection.module.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "AI Researcher",
      bio: "PhD in Computer Science with 10+ years of experience in machine learning.",
      photo: "team1.jpg",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Jane Smith",
      role: "Software Engineer",
      bio: "Full-stack developer specializing in AI deployment and scalable systems.",
      photo: "team2.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Alex Johnson",
      role: "Data Scientist",
      bio: "Expert in data preprocessing and model optimization.",
      photo: "team3.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <SectionTitle>Our Team</SectionTitle>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberPhoto}>
                {/* Replace with actual image */}
                <div className={styles.photoPlaceholder}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
                <div className={styles.socialLinks}>
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className={styles.socialLink}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className={styles.socialLink}>
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className={styles.socialLink}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;