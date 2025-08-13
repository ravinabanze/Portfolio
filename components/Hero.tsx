import React from 'react';
import { Sparkles, ChevronRight, Download } from './icons';

interface HeroProps {
  navigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {

  return (
    <section id="home" className="py-24 text-center md:py-32">
  {/* Image removed, restoring to original state before image was added */}
      <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Bridging Data, Design & Impact
      </h1>
      <p className="mt-4 text-lg font-medium text-purple-300 md:text-xl">
        Product Builder, Data Strategist, and Founder of KnowHer.
      </p>
      <div className="mt-8 max-w-3xl mx-auto">
        <p className="text-slate-400 sm:text-lg">
            I am Ravina Banze,  a data-driven product thinker with roots in social impact.
            I have led innovation in nonprofits, studied behavioral science, built analytics products. I am currently developing <a href="/#knowher" onClick={(e) => {e.preventDefault(); navigate('/#knowher')}} className="font-semibold text-purple-300 transition-colors hover:text-purple-200">KnowHer</a> an app that predicts and tracks different moods & hormones in Females
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button onClick={() => navigate('/#work')} className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900">
          View My Work
          <ChevronRight className="h-4 w-4" />
        </button>
        <a href="https://drive.google.com/uc?export=download&id=1JjQApqmgib-ze96M4kpe8ymeofNkpAhe"
    download="Ravina_Banze_Resume.pdf" className="inline-flex items-center gap-2 rounded-md bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900">
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;