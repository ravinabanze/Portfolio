
import React from 'react';
import { type Project } from '../types';
import { ChevronRight, Code, Sparkles } from './icons';

const projectsData: Project[] = [
    {
      title: "KnowHer",
      period: "2025 – Present",
      role: "Founder, Product Lead ",
      description: "Building a mood, menstrual, and physical health tracker for women using Kotlin Multiplatform and AI.",
      achievements: [
        "Features mood journaling, symptom tracking, mood prediction, cycle-based insights, and chatbot integration."
      ],
      tools: ["Kotlin", "Jetpack Compose", "Firebase", "CloudSync", "AI logic trees"]
    },
    {
      title: "CrowdHive",
      period: "2021 – 2023",
      role: "Co-Founder & CEO",
      description: "Co-founded CrowdHive, a reward based Crowdfunding platform that uses donor-behavior data to optimize campaigns and retention.",
      achievements: [
        "Piloted with 25 projects from creators, entrepreneurs and artists to rais $30K from 1000+ individual backers."
      ],
      tools: ["Performance Marketing", "Google Ads", "GTM", "WordPress"]
    },
      {
      title: "Project Nile",
      period: "2020 – 2023",
      role: "Co-Founder & CEO",
      description: "Consulted with 50+ NGOs to design and iteratively optimize donor-acquisition funnels.",
      achievements: [
        "Doubled monthly backers, +30% retention, +10% MRR."
      ],
      tools: ["SQL", "R", "Tableau", "Python"]
    },
    {
      title: "Crowdfunding: The Story of People",
      period: "2019 – 2020",
      role: "Co-author",
      description: "Co-authored Crowdfunding: The Story of People, a data-driven exploration of crowdfunding’s history, industry trends, and its role in social collaboration, inclusion, and nonprofit fundraising.",
      achievements: [
        "Book available on [Google Books](https://www.google.com/books/edition/_/6CoVEAAAQBAJ?hl=en&gbpv=0), [Goodreads](https://www.goodreads.com/book/show/56119037-crowdfunding), and [Amazon](https://www.amazon.com/Crowdfunding-Story-People-Irfan-Bashir-ebook/dp/B08P8PRWR6?ref_=ast_author_mpb).",
        "Featured expert on [Al Jazeera](https://www.youtube.com/watch?v=0kpOe0bJZ08).",
        "Featured expert on [BBC](https://www.bbc.com/news/world-asia-india-57981252)."
      ],
      tools: ["SQL", "R", "Tableau", "Python"]
    },
];

const AchievementItem: React.FC<{ text: string }> = ({ text }) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        const linkText = match[1];
        const url = match[2];
        parts.push(
            <a key={url + match.index} href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-300 transition-colors hover:text-purple-200 underline">
                {linkText}
            </a>
        );
        lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return <span className="text-slate-300">{parts.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)}</span>;
};


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="transform rounded-xl border border-slate-800 bg-slate-800/50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col">
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span className="text-xs font-mono text-slate-500 shrink-0">{project.period}</span>
      </div>
      <p className="mt-2 text-base font-semibold text-purple-300">{project.role}</p>
      <p className="mt-4 text-sm text-slate-400">{project.description}</p>
      
      <div className="mt-4 space-y-2">
          {project.achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
                <Sparkles className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-400" />
                <AchievementItem text={ach} />
            </div>
          ))}
      </div>
    </div>

    <div className="mt-6 pt-4 border-t border-slate-700/50">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-2">
        <Code className="h-4 w-4 text-slate-400" />
        Tools & Tech
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.tools.map(tool => (
          <span key={tool} className="rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Projects</h2>
      <p className="mt-4 text-center text-lg text-slate-400">A selection of my impactful work.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {/* Manually size the first project to be larger */}
        <div className="lg:col-span-2">
            <ProjectCard project={projectsData[0]} />
        </div>
        {projectsData.slice(1).map((project, index) => (
          <ProjectCard key={index + 1} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;