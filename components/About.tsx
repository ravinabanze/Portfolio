import React from 'react';
import { type SkillCategory } from '../types';
import { BrainCircuit, ClipboardList, Users, Palette, Database } from './icons';

const skills: SkillCategory[] = [
  {
    name: 'Agentic AI',
    icon: BrainCircuit,
    keywords: ["eval harness", "guardrails/safety", "tool use", "RAG + vector DB", "state/memory", "observability + cost"]
  },
  {
    name: 'Data',
    icon: Database,
    keywords: ["SQL (perf)", "Python/pandas", "dbt/Airflow", "BigQuery/Snowflake", "A/B + CUPED", "causal inference"]
  },
  {
    name: 'Product',
    icon: ClipboardList,
    keywords: ["PRDs", "MVPs", "LLM KPIs", "roadmap", "stakeholders/GTM", "privacy/compliance"]
  },
  {
    name: 'Research',
    icon: Users,
    keywords: ["mixed-methods", "behavioral", "usability/interviews", "surveys", "telemetry", "HITL evals"]
  },
  {
    name: 'Design',
    icon: Palette,
    keywords: ["Figma", "agent/explainability UX", "data viz", "conversational UI", "accessibility", "design systems"]
  },
];

const SkillCard: React.FC<{ skill: SkillCategory }> = ({ skill }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/30">
        <skill.icon className="h-6 w-6 text-purple-300" />
      </div>
    </div>
    <div>
      <h4 className="font-bold text-white">{skill.name}</h4>
      <p className="mt-1 text-sm text-slate-400">{skill.keywords.join(' · ')}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-b border-slate-800">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-left">About Me</h2>
            <div className="mt-6 space-y-4 text-slate-400 text-base text-left">
                <p>
                    I began my career in the nonprofit world, using research and storytelling to drive change. After co-authoring{" "}
                    <a
                        href="https://books.google.com/books/about/Crowdfunding_The_Story_of_People.html?id=6CoVEAAAQBAJ&source=kp_author_description"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-purple-300 transition-colors hover:text-purple-200"
                    >
                        a book on crowdfunding
                    </a>
                    , I co-founded CrowdHive, a reward based crowdfunding platform that helped 25 pilot projects raise $30,000 from over 1000 backers. Along the way, I consulted for 50+ NGOs, building campaigns that combined data, design, and impact.
                </p>
                <p>
                    I’ve worked across education, healthcare, and behavioral research to build dashboards, design experiments, and lead strategy. Most recently, I completed an NSF-funded fellowship at UMass focused on student behavior, and I am now building Knowher, a women’s health tracker that merges data, design, and care.
                </p>
            </div>
        </div>

        <div className="md:col-span-1">
            <h3 className="font-bold text-white text-xl text-center md:text-left mb-8">Skills Snapshot</h3>
            <div className="space-y-8">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;