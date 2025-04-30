import React from 'react';
import styles from './AIPage.module.css';
import Sidebar from '../components/AIPage/sidebar/Sidebar';
import HeroSection from '../components/AIPage/HeroSection/HeroSection';
import OverviewSection from '../components/AIPage/OverviewSection/OverviewSection';
import FeaturesSection from '../components/AIPage/FeaturesSection/FeaturesSection';
import HowItWorksSection from '../components/AIPage/HowItWorksSection/HowItWorksSection';
import DemoSection from '../components/AIPage/DemoSection/DemoSection';
import TechnologyStackSection from '../components/AIPage/TechnologyStackSection/TechnologyStackSection';
import UseCasesSection from '../components/AIPage/UseCasesSection/UseCasesSection';
import GettingStartedSection from '../components/AIPage/GettingStartedSection/GettingStartedSection';
import ResultsSection from '../components/AIPage/ResultsSection/ResultsSection';
import TeamSection from '../components/AIPage/TeamSection/TeamSection';
import RoadmapSection from '../components/AIPage/RoadmapSection/RoadmapSection';
import CTASection from '../components/AIPage/CTASection/CTASection';
import TestimonialsSection from '../components/AIPage/TestimonialsSection/TestimonialsSection';
import FAQSection from '../components/AIPage/FAQSection/FAQSection';
import ContactSection from '../components/AIPage/ContactSection/ContactSection';
import FooterSection from '../components/AIPage/FooterSection/FooterSection';

const AIPage = () => {
  return (
    <div className={styles.aiPage}>
      <Sidebar />
      <main className={styles.mainContent}>
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <TechnologyStackSection />
        <UseCasesSection />
        <GettingStartedSection />
        <ResultsSection />
        <TeamSection />
        <RoadmapSection />
        <CTASection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default AIPage;