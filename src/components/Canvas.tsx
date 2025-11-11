import React from 'react';

const Canvas: React.FC = () => {
    return (
        <div className="flex flex-col rounded-xl border border-slate-200/10 bg-[#192233]/50">
            <div className="flex items-center justify-between border-b border-slate-200/10 p-4">
                <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Generated Blog Post</h3>
                <div className="flex items-center gap-2">
                    <button className="flex h-9 w-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined text-lg">content_copy</span>
                    </button>
                    <button className="flex h-9 w-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined text-lg">save</span>
                    </button>
                    <button className="flex h-9 w-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined text-lg">ios_share</span>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-700/50 px-3 text-slate-300 hover:bg-slate-700 hover:text-white">
                        <span className="material-symbols-outlined text-lg">refresh</span>
                        <span className="text-sm font-medium">Regenerate</span>
                    </button>
                </div>
            </div>
            <div className="flex-1 p-6">
                <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-700/50 mb-4">
                        <span className="material-symbols-outlined text-4xl text-slate-400">edit_note</span>
                    </div>
                    <p className="text-white text-base font-medium">Your generated content will appear here.</p>
                    <p className="text-slate-400 text-sm mt-1">Start by filling out the details on the left and click 'Generate'.</p>
                </div>
            </div>
        </div>
    );
};

export default Canvas;
