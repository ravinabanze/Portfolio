
import React from 'react';
import { type EducationItem } from '../types';
import { GraduationCap, ChevronRight } from './icons';

const educationData: EducationItem[] = [
    {
        institution: 'University of Massachusetts, Amherst',
        degree: 'MSc in Data Analytics & Computational Social Sciences',
        period: 'Sep 2022 - May 2024',
        details: [
            'Spearheaded social media analytics to boost program engagement and conversion by 30%.',
            'Primary Data Analyst for NSF-funded climate migration project using SQL, R, and ArcGIS.'
        ]
    },
    {
        institution: 'Mumbai School of Economics and Public Policy',
        degree: 'PG Diploma in Business Analytics',
        period: 'Jan 2019 - Jan 2020',
        details: [
            'Interned at Ketto; built agent-based influencer tools and led brand strategy workshops.',
            'Increased revenue and visibility for 10 NGOs through data-driven social media strategies.'
        ]
    },
    {
        institution: "St. Xavier's College, Mumbai",
        degree: 'BA in Sociology & Anthropology, minor in Economics',
        period: 'June 2013 - June 2016',
        details: [
            'Developed strong foundation in research, analysis, and social systems.'
        ]
    }
];

const EducationEntry: React.FC<{ item: EducationItem; isLast: boolean }> = ({ item, isLast }) => (
  <li className="relative pb-10 pl-10">
    {!isLast && <div className="absolute left-[18px] top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-700"></div>}
    <div className="absolute left-[18px] top-4 -ml-[7px] h-3.5 w-3.5 rounded-full bg-slate-900 border-2 border-purple-500"></div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-white">{item.institution}</p>
        <p className="text-sm text-slate-400 mt-1 sm:mt-0">{item.period}</p>
    </div>
    <p className="mt-1 font-medium text-purple-300">{item.degree}</p>
    <ul className="mt-4 space-y-2">
      {item.details.map((detail, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 pt-1">
            <ChevronRight className="h-4 w-4 text-purple-400" />
          </div>
          <span className="text-sm text-slate-400">{detail}</span>
        </li>
      ))}
    </ul>
  </li>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Education</h2>
      <div className="mt-12 max-w-3xl mx-auto">
        <ol>
          {educationData.map((item, index) => (
            <EducationEntry key={index} item={item} isLast={index === educationData.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
