import React from 'react';
import { type KnowherFeature } from '../types';
import { Sparkles, HeartPulse, CalendarDays, MessageCircle, CheckCircle } from './icons';

const featuresData: KnowherFeature[] = [
    { name: 'Mood & Energy Tracking', description: 'Log emotional and physical symptoms daily.', icon: HeartPulse},
    { name: 'Cycle-based Insights', description: 'Understand your body based on your unique cycle phases.', icon: CalendarDays},
    { name: 'AI Journaling & Chatbot', description: 'Get personalized feedback and support through secure AI.', icon: MessageCircle },
    { name: 'Secure, Synced Data', description: 'Your health data is private, secure, and always accessible.', icon: CheckCircle },
];


const Knowher: React.FC = () => {
  return (
    <section id="knowher" className="py-20">
      <div className="text-center">
        <img src="/Logo.png" alt="KnowHer Logo" className="mx-auto mb-6 w-32 h-32 object-contain" />
        <h2 className="font-bold tracking-tight text-purple-300">Introducing KnowHer</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Track how you really feel.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            KnowHer is a mood + menstrual health tracker designed for women’s real cycles, not just periods. It helps users log physical and emotional symptoms, understand their cycles, and receive tailored AI insights — whether you have PCOS, irregular cycles, or just want to understand your body better.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {featuresData.map((feature) => (
            <div key={feature.name} className="flex gap-4">
                <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/30">
                        <feature.icon className="h-6 w-6 text-purple-300" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-white">{feature.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{feature.description}</p>
                </div>
            </div>
        ))}
      </div>

      <div className="mt-16 text-center">
  <a href="https://forms.gle/7giGjDY8SKyJoFRf8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900">
      <Sparkles className="h-4 w-4" />
      Join the Waitlist
    </a>
      </div>
    </section>
  );
};

export default Knowher;