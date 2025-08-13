import React from 'react';
import { type ExperienceItem } from '../types';
import { ChevronRight, Download } from './icons';

const experienceData: ExperienceItem[] = [
  {
    role: 'Founder & Product Lead',
    org: 'Knowher',
    dates: '2025 – Present',
    highlights: [
      'Building a full-stack AI-powered health tracking app using Compose Multiplatform, focused on hormonal health and personalized analytics.'
    ],
  },
  {
    role: 'Data & Product Fellow',
    org: 'UMass Amherst',
    dates: '2023 – 2025',
    highlights: [
      'Led analytics for an NSF-funded project, built predictive models, and secured grant funding.',
      'Applied advanced data engineering, spatial mapping, and qualitative research.'
    ],
  },
  // Research Assistant and Marketing Lead jobs removed as requested
  {
    role: 'Summer Intern',
    org: 'Liberty System & Analytics',
    dates: '2023',
    highlights: [
      'Developed predictive healthcare models using R Shiny and data from CDC, CMS, NIH & WHO to improve patient care and resource allocation.'
    ],
  },
  {
    role: 'Co-Founder & CEO',
    org: 'Tuwah Ventures LLP (Project Nile & CrowdHive)',
    dates: '2020 – 2023',
    highlights: [
      'Launched consulting services for 50+ NGOs, trained 200 fellows, built partnerships with 120+ stakeholders, and secured $30K for 25 Pilot Project from 1000+ Donors'
    ],
  },
  {
    role: 'Primary Data Analyst',
    org: 'SEWA',
    dates: '2021',
    highlights: [
      'Created a Data Strategy Framework, upgraded mobile tools for data collection, and delivered interactive D3.js visualizations.'
    ],
  },
  {
    role: 'Social Media Analyst',
    org: 'Ketto',
    dates: '2019 – 2020',
    highlights: [
      'Built a lead-generation web crawler and optimized NGO campaigns, increasing donations by 15%.'
    ],
  },
  {
    role: 'Program Associate',
    org: 'iVolunteer (USL-Diageo)',
    dates: '2018 – 2019',
    highlights: [
      'Executed 50+ CSR programs, piloted employee volunteering nationwide, and engaged 1,000+ participants.'
    ],
  },
  {
    role: 'Program Associate',
    org: 'Pratham / Akanksha / IL&FS ETS',
    dates: '2013 – 2017',
    highlights: [
      'Led large-scale education and social impact programs benefiting 10,000+ children across India.'
    ],
  },
];

const ExperienceEntry: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({ item, isLast }) => (
  <li className="relative pb-10 pl-10">
    {!isLast && <div className="absolute left-[18px] top-5 -ml-px h-full w-0.5 bg-slate-700"></div>}
    <div className="absolute left-[18px] top-5 -ml-[7px] h-3.5 w-3.5 rounded-full bg-slate-900 border-2 border-purple-500"></div>
    
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-white text-lg">{item.role}</p>
        <p className="text-sm text-slate-400 mt-1 sm:mt-0">{item.dates}</p>
    </div>
    <p className="mt-1 font-medium text-purple-300">{item.org}</p>
    
    <ul className="mt-4 space-y-2">
      {item.highlights.map((detail, index) => (
        <li key={index} className="flex items-start gap-3">
          <ChevronRight className="h-4 w-4 text-purple-400 flex-shrink-0 mt-1" />
          <span className="text-sm text-slate-400">{detail}</span>
        </li>
      ))}
    </ul>
  </li>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Career & Experience</h2>
      <div className="mt-12 max-w-3xl mx-auto">
        <ol>
          {experienceData.map((item, index) => (
            <ExperienceEntry key={index} item={item} isLast={index === experienceData.length - 1} />
          ))}
        </ol>
      </div>
  {/* Download Full Resume button removed as requested */}
    </section>
  );
};

export default Experience;
