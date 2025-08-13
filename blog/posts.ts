import React from 'react';
import type { BlogPost } from '../types';
import WhyImBuildingKnowherContent from './posts/why-im-building-knowher';

export const blogPosts: BlogPost[] = [
    {
        slug: 'why-im-building-knowher',
        title: "Why I’m Building Knowher",
        description: "A founder's journey into the world of women's health tech, from personal struggle to a mission-driven solution.",
        content: React.createElement(WhyImBuildingKnowherContent),
    },
    {
        slug: 'ai-to-decode-womens-health',
        title: "Using AI to Decode Women’s Health",
        description: "Exploring how technology can bridge gaps in medical research and personal care.",
        content: React.createElement('div', null, 'Coming soon...'),
    },
    {
        slug: 'lessons-from-3-sectors',
        title: "Lessons from Working in 3 Sectors",
        description: "Insights from navigating nonprofits, academia, and the tech industry.",
        content: React.createElement('div', null, 'Coming soon...'),
    },
    {
        slug: 'product-thinking-for-social-impact',
        title: "Product Thinking for Social Impact",
        description: "Applying startup principles to create sustainable and scalable change.",
        content: React.createElement('div', null, 'Coming soon...'),
    }
];