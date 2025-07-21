import React from 'react';
import { CONTACT_INFO } from '../constants.ts';
import { EnvelopeIcon, LinkedInIcon, PhoneIcon, MapPinIcon } from './icons/index.tsx';

const ContactItem: React.FC<{href?: string; icon: React.ReactNode; text: string; label: string;}> = ({ href, icon, text, label }) => {
    const content = (
         <div className="flex items-center gap-4 p-3 rounded-xl transition-colors duration-300 w-full">
            <div className="bg-slate-800 text-yellow-400 p-3 rounded-full transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-110">
                {icon}
            </div>
            <span className="text-lg text-gray-200 font-medium">{text}</span>
        </div>
    );
    
    if (href) {
        return (
            <a href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? 'noopener noreferrer' : ''} 
               className="block group bg-slate-900/50 rounded-xl border border-transparent hover:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                {content}
            </a>
        );
    }
    return <div aria-label={label} className="block group bg-slate-900/50 rounded-xl border border-transparent">{content}</div>;
};


export const Contact: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                I'm currently looking for new opportunities. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
                <ContactItem href={`mailto:${CONTACT_INFO.email}`} icon={<EnvelopeIcon />} text={CONTACT_INFO.email} label="Email" />
                <ContactItem href={CONTACT_INFO.linkedin} icon={<LinkedInIcon />} text="Connect on LinkedIn" label="LinkedIn" />
                <ContactItem href={`tel:${CONTACT_INFO.phone}`} icon={<PhoneIcon />} text={CONTACT_INFO.phone} label="Phone" />
                <ContactItem icon={<MapPinIcon />} text={CONTACT_INFO.location} label="Location" />
            </div>
        </div>
    );
};