import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, Alex!</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Let's create something amazing today.</p>
            </div>
            <div className="w-full md:w-72">
                <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                        <div className="text-slate-400 flex items-center justify-center pl-4">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="form-input w-full flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-surface-light dark:bg-surface-dark h-full placeholder:text-slate-400 px-2 text-base font-normal leading-normal" placeholder="Search projects..." value="" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;
