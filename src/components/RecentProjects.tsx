import React from 'react';

const RecentProjects: React.FC = () => {
    const projects = [
        { name: 'Q4 Marketing Campaign Brief', lastEdited: '2 hours ago' },
        { name: 'New Blog Post: "The Future of AI"', lastEdited: '1 day ago' },
        { name: 'Website Copy - About Us Page', lastEdited: '3 days ago' }
    ];

    return (
        <section className="mt-8">
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Recent Projects</h2>
            <div className="space-y-3">
                {projects.map(project => (
                    <div key={project.name} className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-text-light dark:text-text-dark">{project.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Last edited: {project.lastEdited}</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-400">more_horiz</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentProjects;
