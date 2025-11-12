import React from 'react';

const DocumentGrid: React.FC = () => {
    const documents = [
        {
            title: 'Q4 Marketing Strategy',
            description: "A comprehensive plan for the upcoming quarter's marketing initiatives...",
            lastModified: '2 days ago'
        },
        {
            title: 'New Feature Launch Blog',
            description: 'Draft post announcing the launch of our exciting new AI-powered editing tool...',
            lastModified: '5 days ago'
        },
        {
            title: 'Competitor Analysis',
            description: 'An in-depth review of key competitors in the AI writing space...',
            lastModified: '1 week ago'
        },
        {
            title: 'Onboarding Email Sequence',
            description: 'A 5-part email series to welcome new users and guide them through the app...',
            lastModified: '2 weeks ago'
        }
    ];

    return (
        <div className="flex-1 p-8">
            <div className="flex flex-wrap gap-2 mb-6">
                <a className="text-gray-500 dark:text-[#92a4c9] text-sm font-medium leading-normal hover:text-primary dark:hover:text-white" href="#">All Documents</a>
                <span className="text-gray-500 dark:text-[#92a4c9] text-sm font-medium leading-normal">/</span>
                <a className="text-gray-500 dark:text-[#92a4c9] text-sm font-medium leading-normal hover:text-primary dark:hover:text-white" href="#">Marketing</a>
                <span className="text-gray-500 dark:text-[#92a4c9] text-sm font-medium leading-normal">/</span>
                <span className="text-gray-800 dark:text-white text-sm font-medium leading-normal">Blog Posts</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {documents.map(doc => (
                    <div key={doc.title} className="flex flex-col bg-white dark:bg-[#111722] border border-gray-200 dark:border-[#232f48] rounded-xl group">
                        <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-[#232f48] rounded-t-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500">article</span>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-1 pr-2">{doc.title}</h3>
                                <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-[#232f48] text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">{doc.description}</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Modified {doc.lastModified}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentGrid;
