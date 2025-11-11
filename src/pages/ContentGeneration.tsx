import React from 'react';
import ContentGenSidebar from '../components/ContentGenSidebar';
import Controls from '../components/Controls';
import Canvas from '../components/Canvas';

const ContentGeneration: React.FC = () => {
    return (
        <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark">
            <ContentGenSidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="p-8">
                    <div className="flex flex-wrap justify-between gap-3 pb-8">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Create New Content</p>
                            <p className="text-slate-400 text-base font-normal leading-normal">Fill in the details below to generate new content with AI.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <Controls />
                        <Canvas />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContentGeneration;
