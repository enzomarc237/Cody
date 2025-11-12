import React from 'react';

const Editor: React.FC = () => {
    return (
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:underline" href="#">My Documents</a>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                    <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:underline" href="#">Marketing Copy</a>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                    <span className="text-gray-800 dark:text-white text-sm font-medium leading-normal">New Ad Campaign</span>
                </div>
                <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-800 px-4 py-2">
                        <div className="flex flex-wrap gap-1">
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_bold</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_italic</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_underlined</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_list_bulleted</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_list_numbered</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_h1</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">format_h2</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">link</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">image</span></button>
                            <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-xl">code</span></button>
                        </div>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 bg-primary/10 dark:bg-primary/20 text-primary dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 hover:bg-primary/20 dark:hover:bg-primary/30">
                            <span className="material-symbols-outlined text-xl">share</span>
                            <span className="truncate">Share</span>
                        </button>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none p-8 focus:outline-none min-h-[500px]" contentEditable="true">
                        <h1>New Ad Campaign: The Future of Productivity</h1>
                        <p>Introducing the latest innovation from AI Studio, designed to revolutionize how you work. Our new AI assistant is more than just a tool; it's a partner in your creative process. <mark className="bg-primary/20 dark:bg-primary/30 rounded px-1 py-0.5">Whether you're drafting marketing copy, writing a blog post, or brainstorming ideas, our assistant is here to help you achieve more, faster.</mark></p>
                        <p>With state-of-the-art natural language processing, we provide suggestions that are not only grammatically correct but also contextually relevant and stylistically aligned with your unique voice.</p>
                        <ul>
                            <li>Seamless Integration</li>
                            <li>Intelligent Suggestions</li>
                            <li>Customizable Tones</li>
                        </ul>
                        <p>Start writing here, or select text to use our AI assistant...</p>
                    </div>
                    <div className="flex justify-end items-center px-4 py-2 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500">
                        <p>128 words / 745 characters</p>
                    </div>
                </div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 mt-8 flex items-center gap-1 rounded-lg bg-gray-900 p-1.5 shadow-2xl">
                    <button className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-white hover:bg-gray-700">
                        <span className="material-symbols-outlined text-lg">autorenew</span>
                        Rephrase
                    </button>
                    <div className="h-5 w-px bg-gray-700"></div>
                    <button className="p-1.5 text-white hover:bg-gray-700 rounded-md"><span className="material-symbols-outlined text-lg">expand_content</span></button>
                    <button className="p-1.5 text-white hover:bg-gray-700 rounded-md"><span className="material-symbols-outlined text-lg">compress</span></button>
                    <button className="p-1.5 text-white hover:bg-gray-700 rounded-md"><span className="material-symbols-outlined text-lg">volume_up</span></button>
                    <button className="p-1.5 text-white hover:bg-gray-700 rounded-md"><span className="material-symbols-outlined text-lg">spellcheck</span></button>
                </div>
            </div>
        </main>
    );
};

export default Editor;
