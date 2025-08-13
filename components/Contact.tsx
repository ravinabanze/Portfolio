import React from 'react';
import { Mail, Linkedin, MapPin, ChevronRight } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Let's Connect
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
        Let’s talk ideas, roles, or collaboration. I’m open to new opportunities in product, data, or health tech — and always happy to connect.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-lg font-medium">
        <a href="mailto:ravina82@gmail.com" className="group flex items-center gap-3 text-slate-200 transition-colors hover:text-purple-400">
          <Mail className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-400" />
          Email
        </a>
        <span className="hidden sm:block text-slate-700">|</span>
        <a href="https://www.linkedin.com/in/ravinamb" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 transition-colors hover:text-purple-400">
          <Linkedin className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-400" />
          LinkedIn
        </a>
        <span className="hidden sm:block text-slate-700">|</span>
        <a href="https://calendar.app.google/qbsyUDiNPU7hAG149" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 transition-colors hover:text-purple-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-slate-500 transition-colors group-hover:text-purple-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m14 16-2 2-2-2"></path></svg>
          Book a call
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
        <MapPin className="h-4 w-4" />
        Based in Boston, MA
      </div>
    </section>
  );
};

export default Contact;