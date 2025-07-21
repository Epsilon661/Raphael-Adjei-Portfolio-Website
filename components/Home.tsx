import React from 'react';
import { NAME, HEADLINE } from '../constants';
import type { Page } from '../App';
import { ARLogo } from './icons/ARLogo';

interface HomeProps {
    setCurrentPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center -mt-24 animate-fade-in">
             <ARLogo />

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white -mt-4">
                {NAME}
            </h2>
            
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl font-medium">
                {HEADLINE}
            </p>
            <button
                onClick={() => setCurrentPage('portfolio')}
                className="mt-10 bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-500/30"
            >
                View My Work
            </button>
        </div>
    );
};