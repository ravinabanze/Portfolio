
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Knowher from './Knowher';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import Education from './Education';

interface PortfolioProps {
  navigate: (path: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ navigate }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-slate-900">
         <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(168,85,247,0.4)] opacity-50 blur-[120px]"></div>
      </div>
      
      <Header navigate={navigate} />
      <main className="container mx-auto max-w-5xl px-4">
        <Hero navigate={navigate} />
        <About />
        <Projects />
        <Knowher />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
