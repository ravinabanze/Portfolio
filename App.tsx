import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import BlogPage from './components/BlogPage';
import BlogIndexPage from './components/BlogIndexPage';
import BlogAdmin from './components/BlogAdmin';
import { loadLocalBlogPosts } from './blog/local';
import { blogPosts } from './blog/posts';

const App: React.FC = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    const currentPathname = window.location.pathname;
    const [targetPathnamePart, hash] = path.split('#');

    // A link like '/#about' will have an empty targetPathnamePart, which implies navigation to the root path '/'.
    const targetPathname = targetPathnamePart || '/';

    const isPageChange = targetPathname !== currentPathname;

    // Always update the URL in the history to ensure the back/forward buttons work correctly.
    window.history.pushState({}, '', path);

    if (isPageChange) {
      setPathname(targetPathname);
    }

    if (hash) {
      // If there's a hash, scroll to it.
      // We need a timeout to allow the new page to render if a page change occurred.
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const yOffset = -80; // Header offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, isPageChange ? 100 : 0);
    } else if (isPageChange) {
      // If it's a page change and there's no hash, scroll to the top.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/blog/')[1];
    const allPosts = [...loadLocalBlogPosts(), ...blogPosts];
    const post = allPosts.find(p => p.slug === slug);
    if (post) {
      return <BlogPage post={post} navigate={navigate} />;
    }
    // If no post found, fall through to Portfolio (homepage)
  }

  if (pathname === '/blog/admin') {
    return <BlogAdmin navigate={navigate} />;
  }

  if (pathname === '/blog') {
    return <BlogIndexPage navigate={navigate} />;
  }

  return <Portfolio navigate={navigate} />;
};

export default App;