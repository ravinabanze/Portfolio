import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
      <div className="container mx-auto max-w-5xl px-4">
        <p>&copy; {currentYear} Ravina Banze. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS, and a little bit of magic.</p>
      </div>
    </footer>
  );
};

export default Footer;