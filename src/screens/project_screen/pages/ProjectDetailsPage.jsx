
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiUsers, FiCheckCircle, FiFlag, FiStar, FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';
import { projects } from '../data/projectsData'; // Import your projects data
import styles from './ProjectDetails.module.css';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Header from '../../../components/header/Header';

import { 
  FiHome, 
  FiSettings, 
  FiLayers, 
  FiCode,  
  FiMap, 
  FiHelpCircle, 
  FiMail,
  FiAward,
  FiDatabase,
  FiBarChart2
} from 'react-icons/fi';




const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className={styles.notFound}>Project not found</div>;
  }

  // Calculate days remaining
  const daysRemaining = Math.ceil(
    (new Date(project.deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  // Find next and previous project IDs for navigation
  const currentIndex = projects.findIndex(p => p.id === parseInt(id));
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;


  // functin for sidebar
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


    // funtion for faq
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  

  return (
    <>
    <Header></Header>
    <div className={styles.container}>

      {/* sidebar section */}
       <aside className={`${styles.sidebar_section_sidebar} ${collapsed ? styles.sidebar_section_collapsed : ''}`}>
            <div className={styles.sidebar_section_sidebarHeader}>
              {!collapsed && <h2 className={styles.logo}>Pandey</h2>}
              <button 
                className={styles.collapseButton}
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {collapsed ? '→' : '←'}
              </button>
            </div>
            
            <nav className={styles.sidebar_section_nav}>
              <ul className={styles.sidebar_section_navList}>
                {menuItems.map((item) => (
                  <li 
                    key={item.id} 
                    className={`${styles.sidebar_section_navItem} ${activeItem === item.id ? styles.sidebar_section_active : ''}`}
                    onClick={() => setActiveItem(item.id)}
                    data-tooltip={collapsed ? item.label : null}
                  >
                    <a href={`#${item.id}`} className={styles.sidebar_section_navLink}>
                      <div className={styles.sidebar_section_iconWrapper}>
                        {item.icon}
                      </div>
                      {!collapsed && (
                        <>
                          <span className={styles.sidebar_section_navText}>{item.label}</span>
                          <div className={styles.sidebar_section_activeIndicator}></div>
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className={styles.sidebar_section_sidebarFooter}>
              {!collapsed && (
                <div className={styles.sidebar_section_version}>v2.5.1</div>
              )}
            </div>
          </aside>










      {/*Hero Section  */}

          <section 
            className={`${styles.hero_section_hero} ${
              collapsed ? styles.sidebar_collapsed : ''
            }`}
          >
            <div className={styles.hero_section_container}>
              <h1 className={styles.hero_section_title}>{project.title}</h1>
              <p className={styles.hero_section_tagline}>{project.description}</p>
              <div className={styles.hero_section_buttons}>
                {/* Your buttons here */}
              </div>
            </div>
          </section>


    

    {/* overview section */}

    <section 
      id="overview" 
      className={`${styles.overview_section_overview} ${
      collapsed ? styles.sidebar_collapsed : ''
      }`}
    >
      <div className={styles.overview_section_container}>
          <div className={styles.sectionTitle}>
                  <h2>OverView</h2>
            <div className={styles.underline}></div>
            </div>
        <div className={styles.overview_section_content}>
          <p>{project.overview}</p>
        </div>
      </div>
    </section>




    {/* features section */}

    <section 
        id="features" 
        className={`${styles.features_section_features} ${
          collapsed ? styles.sidebar_collapsed : ''
        }`}

      >
        <div className={styles.features_section_container}>
          <div className={styles.sectionTitle}>
              <h2>How It Works</h2>
              <div className={styles.underline}></div>
        </div>
          <div className={styles.features_section_grid}>
            {project.features.map((feature, index) => (
              <div key={index} className={styles.features_section_card}>
                <div className={styles.features_section_icon}>{feature.icon}</div>
                <h3 className={styles.features_section_title}>{feature.title}</h3>
                <p className={styles.features_section_description}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
    





    {/* how_it_work section */}
        
    <section 
      id="how-it-works" 
      className={`${styles.how_it_work_section_howItWorks} ${
        collapsed ? styles.sidebar_collapsed : ''
      }`}
    >
      <div className={styles.how_it_work_section_container}>
        <div className={styles.sectionTitle}>
          <h2>How It Works</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.how_it_work_section_steps}>
          {project.steps.map((step, index) => (
            <div key={index} className={styles.how_it_work_section_step}>
              <div className={styles.how_it_work_section_stepNumber}>{index + 1}</div>
              <div className={styles.how_it_work_section_stepContent}>
                <div className={styles.how_it_work_section_stepIcon}>
                  <i className={step.icon}></i>
                </div>
                <h3 className={styles.how_it_work_section_stepTitle}>{step.title}</h3>
                <p className={styles.how_it_work_section_stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.how_it_work_section_architecture}>
          <h3 className={styles.how_it_work_section_architectureTitle}>System Architecture</h3>
          <div className={styles.how_it_work_section_architectureDiagram}>
            [Architecture diagram placeholder]
          </div>
        </div>
      </div>
  </section>  





  {/* Video Demo */}
  









  {/* technology section*/}
  <section 
  id="technology" 
  className={`${styles.techstack_section_techStack} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.techstack_section_container}>
    <h2 className={styles.techstack_section_sectionTitle}>Technology Stack</h2>
    
    <div className={styles.techstack_section_section}>
      <h3 className={styles.techstack_section_subtitle}>Frameworks & Tools</h3>
      <div className={styles.techstack_section_grid}>
        {project.techStack.map((tech, index) => (
          <div key={index} className={styles.techstack_section_item}>
            <span className={styles.techstack_section_name}>{tech.name}</span>
            <span className={styles.techstack_section_purpose}>{tech.purpose}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.techstack_section_section}>
      <h3 className={styles.techstack_section_subtitle}>Datasets</h3>
      <div className={styles.techstack_section_grid}>
        {project.datasets.map((dataset, index) => (
          <div key={index} className={styles.techstack_section_item}>
            <span className={styles.techstack_section_name}>{dataset.name}</span>
            <span className={styles.techstack_section_description}>{dataset.description}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




{/* use case section */}
<section 
  id="use-cases" 
  className={`${styles.usecase_section_useCases} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.usecase_section_container}>
    <h2 className={styles.usecase_section_sectionTitle}>Transform Your Industry</h2>
    <p className={styles.usecase_section_subtitle}>
      AI-powered solutions tailored to your business needs
    </p>
    
    <div className={styles.usecase_section_grid}>
      {project.useCases.map((useCase, index) => (
        <div 
          key={index} 
          className={styles.usecase_section_card}
          style={{ '--accent-color': useCase.accentColor }}
        >
          <div className={styles.usecase_section_cardInner}>
            <div className={styles.usecase_section_cardHeader}>
              <div className={styles.usecase_section_iconWrapper}>
                <i className={`${useCase.icon} ${styles.usecase_section_icon}`}></i>
              </div>
              <h3 className={styles.usecase_section_title}>{useCase.title}</h3>
            </div>
            <p className={styles.usecase_section_description}>{useCase.description}</p>
            
            <div className={styles.usecase_section_examples}>
              <h4 className={styles.usecase_section_examplesTitle}>Key Applications</h4>
              <ul className={styles.usecase_section_examplesList}>
                {useCase.examples.map((example, i) => (
                  <li key={i} className={styles.usecase_section_exampleItem}>
                    <div className={styles.usecase_section_checkmark}>
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <path 
                          fill="currentColor" 
                          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        />
                      </svg>
                    </div>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





{/* result section */}
<section 
  id="results" 
  className={`${styles.result_section_results} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.result_section_container}>
    <h2 className={styles.result_section_sectionTitle}>Results & Performance</h2>
    
    <div className={styles.result_section_metrics}>
      {project.performanceMetrics.map((item, index) => (
        <div key={index} className={styles.result_section_metricCard}>
          <div className={styles.result_section_metricValue}>{item.value}</div>
          <div className={styles.result_section_metricName}>{item.metric}</div>
          <div className={styles.result_section_comparison}>{item.comparison}</div>
        </div>
      ))}
    </div>

    <div className={styles.result_section_chartContainer}>
      {/* Placeholder for your chart - replace with actual chart component */}
      <div className={styles.result_section_chartPlaceholder}>
        [Performance Chart Will Appear Here]
      </div>
    </div>
  </div>
</section>






{/* team section */}

<section 
  id="team" 
  className={`${styles.team_section_team} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.team_section_container}>
    <h2 className={styles.team_section_sectionTitle}>Our Team</h2>
    <div className={styles.team_section_teamGrid}>
      {project.teamMembers.map((member, index) => (
        <div key={index} className={styles.team_section_memberCard}>
          <div className={styles.team_section_memberPhoto}>
            <div className={styles.team_section_photoPlaceholder}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div className={styles.team_section_memberInfo}>
            <h3 className={styles.team_section_memberName}>{member.name}</h3>
            <p className={styles.team_section_memberRole}>{member.role}</p>
            <p className={styles.team_section_memberBio}>{member.bio}</p>
            <div className={styles.team_section_socialLinks}>
              {member.social.linkedin && (
                <a href={member.social.linkedin} className={styles.team_section_socialLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} className={styles.team_section_socialLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} className={styles.team_section_socialLink} target="_blank" rel="noopener noreferrer">
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



{/* roadmap section */}
<section 
  id="roadmap" 
  className={`${styles.roadmap_section_roadmap} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.roadmap_section_container}>
    <h2 className={styles.roadmap_section_sectionTitle}>Project Roadmap</h2>
    <div className={styles.roadmap_section_timeline}>
      {project.milestones.map((milestone, index) => (
        <div 
          key={index} 
          className={`${styles.roadmap_section_milestone} ${
            milestone.completed ? styles.roadmap_section_completed : styles.roadmap_section_planned
          } ${
            index === project.milestones.length - 1 ? styles.last : ''
          }`}
        >
          <div className={styles.roadmap_section_milestoneMarker}>
            {milestone.completed ? (
              <div className={styles.roadmap_section_completedIcon}>
                <i className="fas fa-check"></i>
              </div>
            ) : (
              <div className={styles.roadmap_section_plannedIcon}>
                <i className="fas fa-arrow-right"></i>
              </div>
            )}
          </div>
          <div className={styles.roadmap_section_milestoneContent}>
            <div className={styles.roadmap_section_milestoneHeader}>
              <span className={styles.roadmap_section_quarter}>{milestone.quarter}</span>
              <h3 className={styles.roadmap_section_title}>{milestone.title}</h3>
            </div>
            <ul className={styles.roadmap_section_features}>
              {milestone.features.map((feature, i) => (
                <li key={i} className={styles.roadmap_section_featureItem}>
                  <i className={`fas fa-${
                    milestone.completed ? 'check-circle' : 'circle'
                  } ${styles.roadmap_section_featureIcon}`}></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* FAQ section */}
<section 
  id="faq" 
  className={`${styles.faq_section_faq} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.faq_section_container}>
    <h2 className={styles.faq_section_sectionTitle}>Frequently Asked Questions</h2>
    <div className={styles.faq_section_faqList}>
      {project.faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.faq_section_faqItem} ${activeIndex === index ? styles.active : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className={styles.faq_section_question}>
            <h3>{faq.question}</h3>
            <span className={styles.faq_section_icon}>
              {activeIndex === index ? (
                <FiMinus className={styles.faq_section_iconSvg} />
              ) : (
                <FiPlus className={styles.faq_section_iconSvg} />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className={styles.faq_section_answer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>



{/* contact section */}
<section 
  id="contact" 
  className={`${styles.contanct_section_contact} ${
    collapsed ? styles.sidebar_collapsed : ''
  }`}
>
  <div className={styles.contanct_section_container}>
    <div className={styles.contanct_section_content}>
      <div className={styles.contanct_section_info}>
        <h3 className={styles.contanct_section_subtitle}>Get in Touch</h3>
        <p className={styles.contanct_section_description}>
          Have questions or want to collaborate? Reach out to our team.
        </p>
        <div className={styles.contanct_section_contactMethods}>
          <a href="mailto:contact@aiproject.com" className={styles.contanct_section_contactItem}>
            <i className="fas fa-envelope"></i> contact@aiproject.com
          </a>
          <a href="https://twitter.com/aiproject" className={styles.contanct_section_contactItem}>
            <i className="fab fa-twitter"></i> @aiproject
          </a>
          <a href="https://linkedin.com/company/aiproject" className={styles.contanct_section_contactItem}>
            <i className="fab fa-linkedin"></i> AI Project
          </a>
        </div>
      </div>
      <form className={styles.contanct_section_form}>
        <div className={styles.contanct_section_formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className={styles.contanct_section_formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <div className={styles.contanct_section_formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className={styles.contanct_section_submitButton}>
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>








    </div>
    
    </>
  );
};

export default ProjectDetailsPage;