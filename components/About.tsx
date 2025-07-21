import React from 'react';
import { PROFILE_SUMMARY } from '../constants';

export const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Professional <span className="text-yellow-400">Summary</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-400 rounded-full mx-auto mb-10"></div>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
                {PROFILE_SUMMARY}
            </p>
        </div>
    );
};