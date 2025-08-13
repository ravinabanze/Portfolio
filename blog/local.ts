import React from 'react';
import type { BlogPost } from '../types';

export type LocalStoredPost = {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
  createdAt?: string;
};

const STORAGE_KEY = 'userBlogPosts';

export function saveLocalBlogPost(post: LocalStoredPost) {
  const list = getLocalRawList();
  // replace if slug exists, else push
  const idx = list.findIndex(p => p.slug === post.slug);
  if (idx >= 0) list[idx] = post; else list.unshift(post);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function getLocalRawList(): LocalStoredPost[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as LocalStoredPost[];
    return [];
  } catch {
    return [];
  }
}

export function loadLocalBlogPosts(): BlogPost[] {
  return getLocalRawList().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    content: React.createElement('div', { dangerouslySetInnerHTML: { __html: p.contentHtml } })
  }));
}
