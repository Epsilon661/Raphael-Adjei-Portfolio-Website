import React from 'react';
import { SkillCategory } from '../types.ts';

interface SkillsProps {
    skillsData: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Skills</h2>
            </div>
            {skillsData.map((category, index) => (
                <div key={index} className="mb-6">
                    <h3 className="font-bold text-slate-300 mb-2">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};