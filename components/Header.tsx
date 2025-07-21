import React from 'react';
import { EnvelopeIcon, LinkedInIcon, PhoneIcon, MapPinIcon } from './icons/index.tsx';

interface HeaderProps {
    name: string;
    headline: string;
    contact: {
        email: string;
        phone: string;
        location: string;
        linkedin: string;
    };
}

export const Header: React.FC<HeaderProps> = ({ name, headline, contact }) => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">{name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {headline}
                </h2>
                <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
                    <ul className="w-max">
                        <li><a className="group flex items-center py-3" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">About</span></a></li>
                        <li><a className="group flex items-center py-3" href="#work-experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">Experience</span></a></li>
                        <li><a className="group flex items-center py-3" href="#projects"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">Projects</span></a></li>
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                 <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={contact.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedInIcon />
                    </a>
                </li>
                 <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={`mailto:${contact.email}`} aria-label="Email">
                         <span className="sr-only">Email</span>
                        <EnvelopeIcon />
                    </a>
                </li>
                 <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={`tel:${contact.phone}`} aria-label="Phone">
                         <span className="sr-only">Phone</span>
                        <PhoneIcon />
                    </a>
                </li>
                 <li className="mr-5 shrink-0 flex items-center text-slate-400">
                    <MapPinIcon />
                    <span className="ml-2">{contact.location}</span>
                </li>
            </ul>
        </header>
    );
};