import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutUsPage } from './pages/AboutUsPage.tsx';
import { OurSolutionPage } from './pages/OurSolutionPage.tsx';
import { ForSchoolsPage } from './pages/ForSchoolsPage.tsx';
import { ForParentsPage } from './pages/ForParentsPage.tsx';
import { ForInvestorsPage } from './pages/ForInvestorsPage.tsx';
import { PricingPage } from './pages/PricingPage.tsx';
import { ContactUsPage } from './pages/ContactUsPage.tsx';
import { DigitalAppPage } from './pages/DigitalAppPage.tsx';
import { SchoolCurriculumPage } from './pages/SchoolCurriculumPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about-us':
        return <AboutUsPage />;
      case 'our-solution':
        return <OurSolutionPage onNavigate={handleNavigate} />;
      case 'digital-app':
        return <DigitalAppPage onNavigate={handleNavigate} />;
      case 'school-curriculum':
        return <SchoolCurriculumPage onNavigate={handleNavigate} />;
      case 'for-schools':
        return <ForSchoolsPage onNavigate={handleNavigate} />;
      case 'for-parents':
        return <ForParentsPage onNavigate={handleNavigate} />;
      case 'for-investors':
        return <ForInvestorsPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'contact-us':
        return <ContactUsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfcff] text-neutral-900 antialiased selection:bg-orange-500 selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
