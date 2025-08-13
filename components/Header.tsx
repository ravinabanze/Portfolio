
import React, { useState, useEffect } from 'react';
import { Linkedin, Mail } from './icons';
// Phone icon SVG
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} className={props.className}>
    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 21 16.91z" />
  </svg>
);

interface HeaderProps {
    navigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#work', label: 'Projects' },
    { href: '/#knowher', label: 'KnowHer' },
    { href: '/#experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex max-w-5xl items-center justify-between p-4 text-white">
        <ul className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="text-sm font-medium text-slate-300 transition-colors hover:text-purple-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
  <div className="flex items-center space-x-4">
          <a href="https://calendar.app.google/qbsyUDiNPU7hAG149" aria-label="Schedule a call" target="_blank" rel="noopener noreferrer">
            <PhoneIcon className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/ravinamb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://x.com/ravinabanz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6.1v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.05 3A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.05 9.05 0 0 1-2.61.72z"/></svg>
          </a>
          <a href="mailto:ravina82@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://github.com/rbanze-umass" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5 0-1.1.38-2 .99-2.7-.1-.25-.43-1.28.09-2.67 0 0 .82-.27 2.7 1.02a9.18 9.18 0 0 1 2.46-.33c.84 0 1.69.11 2.46.33 1.88-1.29 2.7-1.02 2.7-1.02.52 1.39.19 2.42.09 2.67.61.7.99 1.6.99 2.7 0 3.88-2.34 4.74-4.57 5 .36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
          </a>
          <a href="https://www.google.com/search?sca_esv=3af941f69087be74&sxsrf=AE3TifMhORBN8xl4uy7AI9r3hY5OwY2GmA:1755035617405&q=Ravina+Banze&si=AMgyJEs03_IawLpG0pN8Imr0quNL8BRn4IwD6UzBpqKXGhmQPZZFEPrNdrF4vnm7JB04FwWc04Am4rBKwBIEx13erjB8r_6dl8SDSqvSu2DTJdaMm-GjQsNiDyIU0n2OehWoU72YW-ZyLO54ttRHXxMvMz0AkEo0pA%3D%3D&sa=X&ved=2ahUKEwjhuqyUoYaPAxXqvokEHVh-M_QQ_coHegQIDhAB&ictx=0&biw=1470&bih=798&dpr=2" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <svg className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none">
              <g>
                <path d="M21.6 12.227c0-.638-.057-1.252-.164-1.84H12v3.481h5.406c-.233 1.257-1.4 3.7-5.406 3.7-3.253 0-5.9-2.697-5.9-6.04s2.647-6.04 5.9-6.04c1.85 0 3.09.792 3.8 1.477l2.6-2.54C17.1 3.792 14.9 2.7 12 2.7 6.477 2.7 2 7.177 2 12.7s4.477 10 10 10c5.523 0 10-4.477 10-10 0-.682-.07-1.35-.2-1.973z" fill="#fff"/>
                <path d="M3.6 7.345l2.96 2.17C7.6 8.1 9.6 6.7 12 6.7c1.85 0 3.09.792 3.8 1.477l2.6-2.54C17.1 3.792 14.9 2.7 12 2.7c-3.253 0-5.9 2.697-5.9 6.04 0 .638.057 1.252.164 1.84z" fill="#fff" opacity=".7"/>
              </g>
            </svg>
          </a>
          <a href="https://www.instagram.com/ravinabanz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-6 h-6 text-slate-300 hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
