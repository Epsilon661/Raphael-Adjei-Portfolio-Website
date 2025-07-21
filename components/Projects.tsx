import React from 'react';
import { PROJECTS_DATA } from '../constants.ts';
import { Project } from '../types.ts';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:!border-yellow-400/50 hover:bg-slate-900 hover:shadow-2xl hover:shadow-yellow-500/10">
        <div className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
             style={{background: 'radial-gradient(400px at center, rgba(250, 204, 21, 0.1), transparent 80%)'}}
             aria-hidden="true">
        </div>
        <div className="relative">
            <h4 className="text-xl font-bold text-yellow-400 mb-1">{project.title}</h4>
            <p className="text-sm text-gray-400 mb-4 font-semibold tracking-wide">{project.role}</p>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
                {project.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    </div>
);

const ElevatorPitchPlaceholder: React.FC = () => (
    <div className="group relative bg-slate-900/50 aspect-video w-full max-w-4xl mx-auto rounded-xl flex items-center justify-center border border-slate-800 overflow-hidden">
         <div className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
             style={{background: 'radial-gradient(600px at center, rgba(250, 204, 21, 0.15), transparent 80%)'}}
             aria-hidden="true">
        </div>
        <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 3.32C6.83 3.02 7.5 3.42 7.5 4.05v11.9c0 .63-.67 1.03-1.2.72L3 13.5v-7l3.3-3.18zM13.7 3.32c.53-.3 1.2.1 1.2.72v11.9c0 .63-.67 1.03-1.2.72L10.2 13.5v-7l3.5-3.18z"></path></svg>
            </div>
            <p className="font-semibold text-gray-300">Elevator Pitch Coming Soon</p>
        </div>
    </div>
);

export const Projects: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My <span className="text-yellow-400">Portfolio</span>
            </h2>

            <section id="elevator-pitch" className="mb-20" aria-labelledby="elevator-pitch-heading">
                <ElevatorPitchPlaceholder />
            </section>
            
            <section id="projects" aria-labelledby="projects-heading">
                <h3 id="projects-heading" className="text-2xl md:text-3xl font-bold text-center mb-8">
                    Featured <span className="text-yellow-400">Projects</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};