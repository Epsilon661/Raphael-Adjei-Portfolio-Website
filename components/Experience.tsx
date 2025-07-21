import React from 'react';
import { Experience } from '../types.ts';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={experience.period}>
                    {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <span className="inline-block font-bold">{experience.role}</span>
                            <span className="text-slate-400"> at {experience.company}</span>
                        </div>
                        {experience.location && <div className="text-sm text-slate-400">{experience.location}</div>}
                    </h3>
                    {experience.description.length > 0 && 
                        <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-slate-400">
                           {experience.description.map((desc, index) => (
                               <li key={index}>{desc}</li>
                           ))}
                        </ul>
                    }
                </div>
            </div>
        </li>
    );
};

interface ExperienceSectionProps {
    title: string;
    experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, experiences }) => {
    const id = title.toLowerCase().replace(/\s+/g, '-');
    return (
        <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label={title}>
             <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                 <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">{title}</h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </ol>
            </div>
        </section>
    );
}