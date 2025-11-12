import React from 'react';

const RightSidebar: React.FC = () => {
    return (
        <aside className="flex h-full w-80 shrink-0 flex-col gap-4 border-l border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-4">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">AI Suggestions</h3>
            <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Unlock your creative potential by leveraging our AI to draft marketing copy, brainstorm ideas, or compose blog posts.</p>
                    <button className="mt-2 w-full text-center text-sm font-semibold text-primary hover:underline">Apply</button>
                </div>
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Whether you are creating content for advertisements, social media, or articles, our AI assistant helps you accomplish your goals more quickly.</p>
                    <button className="mt-2 w-full text-center text-sm font-semibold text-primary hover:underline">Apply</button>
                </div>
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Our assistant is available to help you write marketing copy, develop blog posts, and generate new ideas, making it easier to achieve your objectives.</p>
                    <button className="mt-2 w-full text-center text-sm font-semibold text-primary hover:underline">Apply</button>
                </div>
            </div>
            <div className="mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Tone Selector</h3>
                <select className="form-select w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:border-primary focus:ring-primary">
                    <option>Professional</option>
                    <option selected>Casual</option>
                    <option>Enthusiastic</option>
                    <option>Formal</option>
                </select>
            </div>
        </aside>
    );
};

export default RightSidebar;
