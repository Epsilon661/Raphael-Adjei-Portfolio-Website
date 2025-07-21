import React from 'react';
import type { Page } from '../App';

interface NavigationProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
    const navItems: { id: Page, label: string }[] = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-20">
                    <button onClick={() => setCurrentPage('home')} className="text-xl font-bold text-white hover:text-yellow-400 transition-colors" aria-label="Go to homepage">
                        R.N. ADJETEY
                    </button>
                    <ul className="flex items-center space-x-2 md:space-x-4">
                        {navItems.map(item => (
                            <li key={item.id}>
                                <button
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`capitalize font-semibold transition-colors relative p-3 text-sm md:text-base
                                        ${currentPage === item.id ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}
                                    `}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-yellow-400 rounded-full transition-transform duration-300
                                      ${currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                    `}></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};