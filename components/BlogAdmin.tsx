import React, { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from './icons';
import { saveLocalBlogPost, getLocalRawList } from '../blog/local';

interface BlogAdminProps {
  navigate: (path: string) => void;
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const BlogAdmin: React.FC<BlogAdminProps> = ({ navigate }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (title && !slug) setSlug(slugify(title));
  }, [title, slug]);

  const savedPosts = useMemo(() => getLocalRawList(), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !content) {
      setStatus('Please fill title, slug, and content.');
      return;
    }
    saveLocalBlogPost({
      title,
      slug,
      description,
      contentHtml: content,
      createdAt: new Date().toISOString(),
    });
    setStatus('Saved! You can now view it on the Blog page.');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Header navigate={navigate} />
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <a
          href="/blog"
          onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
          className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </a>
        <h1 className="text-3xl font-extrabold text-white mb-6">Blog Admin</h1>
        <p className="text-slate-400 mb-10">Create a new blog post. Content supports HTML (basic tags like &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;…).</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl bg-slate-800/60 border border-slate-700 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="My first post"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full rounded-xl bg-slate-800/60 border border-slate-700 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="my-first-post"
            />
            <p className="mt-1 text-xs text-slate-500">Your post will be at <span className="text-slate-300">/blog/{'{'}{slug || 'my-first-post'}{'}'}</span></p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Short Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl bg-slate-800/60 border border-slate-700 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="A quick summary of your post…"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content (HTML allowed)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              className="w-full rounded-xl bg-slate-800/60 border border-slate-700 px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm"
              placeholder="<p>Hello world</p>"
            />
            <p className="mt-2 text-xs text-slate-500">Tip: Write in any editor and paste HTML here. Keep it simple and safe.</p>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-purple-600 hover:bg-purple-500 px-4 py-2 font-semibold text-white shadow-lg shadow-purple-500/20"
          >
            Save Post
          </button>
          {status && <p className="text-sm mt-3 text-green-400">{status}</p>}
        </form>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Saved Drafts on This Device</h2>
        {savedPosts.length === 0 ? (
          <p className="text-slate-500">No local posts yet.</p>
        ) : (
          <ul className="space-y-3">
            {savedPosts.map((p) => (
              <li key={p.slug} className="rounded-xl bg-slate-800/60 border border-slate-700 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-xs text-slate-500">/{'blog'}/{p.slug}</div>
                  </div>
                  <a
                    href={`/blog/${p.slug}`}
                    onClick={(e) => { e.preventDefault(); navigate(`/blog/${p.slug}`); }}
                    className="text-sm text-purple-300 hover:text-purple-200"
                  >
                    View
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogAdmin;
