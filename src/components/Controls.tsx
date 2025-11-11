import React, { useState } from 'react';

const Controls: React.FC = () => {
    const [contentType, setContentType] = useState('Blog Post');
    const [prompt, setPrompt] = useState('');
    const [tone, setTone] = useState('Professional');
    const [keywords, setKeywords] = useState('');

    const handleGenerate = () => {
        console.log({
            contentType,
            prompt,
            tone,
            keywords
        });
    };

    return (
        <div className="flex flex-col gap-6 rounded-xl border border-slate-200/10 bg-[#192233]/50 p-6">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Select Content Type</h3>
            <div className="flex gap-2 flex-wrap">
                <button onClick={() => setContentType('Blog Post')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 ${contentType === 'Blog Post' ? 'bg-primary' : 'bg-slate-700/50 hover:bg-slate-700'}`}>
                    <p className="text-white text-sm font-medium leading-normal">Blog Post</p>
                </button>
                <button onClick={() => setContentType('Tweet')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 ${contentType === 'Tweet' ? 'bg-primary' : 'bg-slate-700/50 hover:bg-slate-700'}`}>
                    <p className="text-slate-300 text-sm font-medium leading-normal">Tweet</p>
                </button>
                <button onClick={() => setContentType('Email')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 ${contentType === 'Email' ? 'bg-primary' : 'bg-slate-700/50 hover:bg-slate-700'}`}>
                    <p className="text-slate-300 text-sm font-medium leading-normal">Email</p>
                </button>
                <button onClick={() => setContentType('Social Media Caption')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 ${contentType === 'Social Media Caption' ? 'bg-primary' : 'bg-slate-700/50 hover:bg-slate-700'}`}>
                    <p className="text-slate-300 text-sm font-medium leading-normal">Social Media Caption</p>
                </button>
            </div>
            <div className="flex flex-col">
                <label className="flex flex-col">
                    <p className="text-white text-base font-medium leading-normal pb-2">What do you want to write about?</p>
                    <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-700 bg-[#101622] focus:border-primary min-h-36 placeholder:text-slate-500 p-4 text-base font-normal leading-normal" placeholder="e.g., A blog post about the benefits of remote work"></textarea>
                </label>
            </div>
            <div className="flex flex-col gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">Tone of Voice</p>
                    <select value={tone} onChange={(e) => setTone(e.target.value)} className="form-select flex w-full min-w-0 flex-1 rounded-lg border border-slate-700 bg-[#101622] p-3 text-base font-normal leading-normal text-white placeholder:text-slate-500 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50">
                        <option>Professional</option>
                        <option>Casual</option>
                        <option>Friendly</option>
                        <option>Witty</option>
                    </select>
                </label>
            </div>
            <div className="flex flex-col gap-4">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">Keywords</p>
                    <input value={keywords} onChange={(e) => setKeywords(e.target.value)} className="form-input flex w-full min-w-0 flex-1 rounded-lg border border-slate-700 bg-[#101622] p-3 text-base font-normal leading-normal text-white placeholder:text-slate-500 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50" placeholder="e.g., remote work, productivity, work-life balance" type="text" />
                </label>
            </div>
            <button onClick={handleGenerate} className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-wide mt-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="truncate">Generate Content</span>
            </button>
        </div>
    );
};

export default Controls;
