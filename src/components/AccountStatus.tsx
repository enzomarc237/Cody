import React from 'react';

const AccountStatus: React.FC = () => {
    return (
        <>
            <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-text-light dark:text-text-dark">Monthly Usage</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pro Plan</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">12,500 / 50,000 words used</p>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <button className="w-full mt-6 py-2 px-4 rounded-lg bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-colors">Upgrade Plan</button>
            </div>
            <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                <h3 className="font-semibold text-text-light dark:text-text-dark mb-4">Your Activity Snapshot</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <span className="material-symbols-outlined text-primary">edit_document</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">12,500</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Words Generated</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-accent/10">
                            <span className="material-symbols-outlined text-accent">folder_open</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">18</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Projects Created</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h4 className="font-medium text-sm mb-2 text-slate-500 dark:text-slate-400">Content Breakdown</h4>
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-contain" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVxmsKS0EpBo28I_80Uo1Z_a_V8Scit5vTfDJAqMZ_eNrYJwYiUizhqZOpyfFuzG3bh51P3aAOfI1mdg-ORgN1DY3-Aso8yIMV_4xpSIBtcUHU8T0p9qiLAAFu5uoKK3ZG3mc-lAjUKOaqDaL7TBkI4Kuzta2K7uzZQH0VRPGw9TLNuR3uNATwzZScA4Svr1AaZ3C9_XKvmFspC2C4gr6R7Pu0MMeOjsfl3nzeAGiiSkjok7N3SGkvA2XxWiD9zggC9QiVcv5BRZs")' }}></div>
                </div>
            </div>
        </>
    );
};

export default AccountStatus;
