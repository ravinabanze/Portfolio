import React from 'react';
import type { BlogPost } from '../types';
import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from './icons';

interface BlogPageProps {
  post: BlogPost;
  navigate: (path: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ post, navigate }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-900 text-slate-300">
      <Header navigate={navigate} />
      <main className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <a 
          href="/blog"
          onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
          className="group inline-flex items-center gap-2 font-semibold text-purple-300 transition-colors hover:text-purple-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </a>
        <article className="prose prose-invert prose-lg max-w-none prose-p:text-slate-400 prose-h2:text-white prose-h2:font-bold prose-h2:tracking-tight prose-h2:text-3xl prose-h3:text-white prose-a:text-purple-300 hover:prose-a:text-purple-200 prose-blockquote:text-slate-400 prose-blockquote:border-purple-400 prose-strong:text-slate-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">{post.title}</h1>
          <p className="lead !text-lg !text-slate-400 !mt-2 !mb-12">{post.description}</p>
          {post.content}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;