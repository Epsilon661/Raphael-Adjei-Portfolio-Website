import React from 'react';

export const ARLogo: React.FC = () => {
    return (
        <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
            <style>
                {`
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                .ar-char {
                    font-family: 'Poppins', sans-serif;
                    font-size: 130px;
                    font-weight: 800;
                    stroke: #FACC15;
                    stroke-width: 2;
                    fill: transparent;
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: draw 2.5s ease-in-out forwards;
                    transition: fill 0.4s ease, filter 0.4s ease;
                }
                .group:hover .ar-char {
                    fill: rgba(250, 204, 21, 0.05);
                }
                #char-a {
                    animation-delay: 0s;
                }
                #char-r {
                    animation-delay: 0.3s;
                }
                .logo-svg {
                    transition: filter 0.4s ease;
                }
                .group:hover .logo-svg {
                    filter: drop-shadow(0 0 15px rgba(250, 204, 21, 0.4));
                }
                `}
            </style>
            <svg className="logo-svg" width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
                <text id="char-a" className="ar-char" x="10" y="120">A</text>
                <text id="char-r" className="ar-char" x="105" y="120">R</text>
            </svg>
        </div>
    );
};