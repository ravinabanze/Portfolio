import React from 'react';
import { type BlogPost } from '../types';
import { ChevronRight } from './icons';
import { blogPosts } from '../blog/posts';
import { loadLocalBlogPosts } from '../blog/local';

interface BlogProps {
    navigate: (path: string) => void;
}

const BlogTopicCard: React.FC<{ topic: BlogPost, navigate: (path: string) => void }> = ({ topic, navigate }) => (
    <a href={`/blog/${topic.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/blog/${topic.slug}`)}} className="block group rounded-xl border border-slate-800 bg-slate-800/50 p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-purple-500/10">
        <div>
            <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">{topic.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{topic.description}</p>
        </div>
        <div className="mt-4">
            <span className="text-sm font-semibold text-purple-400/80 inline-flex items-center gap-1 group-hover:text-purple-300 transition-colors">
                Read More <ChevronRight className="h-4 w-4" />
            </span>
        </div>
    </a>
);


const Blog: React.FC<BlogProps> = ({ navigate }) => {
  return (
    <section id="blog" className="py-20">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Blog & Writing</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                Sharing thoughts on product, data, and building for impact.
            </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {[...loadLocalBlogPosts(), ...blogPosts].map((topic, index) => (
                <BlogTopicCard key={index} topic={topic} navigate={navigate} />
            ))}
        </div>
    </section>
  );
};

export default Blog;