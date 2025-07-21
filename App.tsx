import React, { useState, useTransition } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export type Page = 'home' | 'about' | 'portfolio' | 'contact';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [isPending, startTransition] = useTransition();

    const navigate = (newPage: Page) => {
        // Use transition to avoid jarring UI updates
        startTransition(() => {
            setPage(newPage);
        });
    };

    const renderPage = () => {
        switch (page) {
            case 'about':
                return <About />;
            case 'portfolio':
                return <Projects />;
            case 'contact':
                return <Contact />;
            case 'home':
            default:
                return <Home setCurrentPage={navigate} />;
        }
    };

    return (
        <div className="relative min-h-screen text-gray-200 antialiased selection:bg-yellow-400 selection:text-black">
            <Navigation currentPage={page} setCurrentPage={navigate} />
            <div className={`transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
                <main className="container mx-auto px-6 md:px-12 py-24">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
};

export default App;