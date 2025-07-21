import React from 'react';

interface FooterProps {
    contact: {
        linkedin: string;
    };
}

export const Footer: React.FC<FooterProps> = ({ contact }) => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                This portfolio is built with React and Tailwind CSS. The design is inspired by modern web trends and aims to present professional information in a clean, accessible format. View my profile on <a href={contact.linkedin} target="_blank" rel="noreferrer noopener" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">LinkedIn</a> as I continue to build and refine my skills.
            </p>
        </footer>
    );
};
