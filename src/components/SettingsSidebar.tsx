import React from 'react';
import { NavLink } from 'react-router-dom';

const SettingsSidebar: React.FC = () => {
    return (
        <aside className="w-64 flex-shrink-0 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark p-4">
            <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 px-2 py-2">
                        <span className="material-symbols-outlined text-primary text-3xl">edit_square</span>
                        <h1 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold">WriterAI</h1>
                    </div>
                    <div className="flex flex-col gap-1">
                        <NavLink to="/settings/account" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors'}`}>
                            <span className="material-symbols-outlined fill">person</span>
                            <p className="text-sm font-bold leading-normal">My Account</p>
                        </NavLink>
                        <NavLink to="/settings/writing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">edit</span>
                            <p className="text-sm font-medium leading-normal">Writing Defaults</p>
                        </NavLink>
                        <NavLink to="/settings/integrations" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">extension</span>
                            <p className="text-sm font-medium leading-normal">Integrations</p>
                        </NavLink>
                        <NavLink to="/settings/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">credit_card</span>
                            <p className="text-sm font-medium leading-normal">Billing</p>
                        </NavLink>
                        <NavLink to="/settings/appearance" className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">visibility</span>
                            <p className="text-sm font-medium leading-normal">Appearance</p>
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-center border-t border-border-light dark:border-border-dark pt-4">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCi9zQKqnvFtxISjBetyPUvYZL_h5cF2o6Djnovs5rkVhrebH0eidmOFoPtLpL2kVjXCqDGC0yj30XJ-ASmttUyHVVBospqMWxsU6k5n4wHTMcIIL8SflbHq38fxPfvDCpHvFJnBJ9ixENhw6DNWtOIOwsqrQ4x8ZyuPHi30Gc6AvaVPiznDzbczKhwl_vuomXCw9ww4BbsgdDPwXBb52dAkJ8aqmtbBTerLDJ5pTIhY6UmmSCi3LXL_Dlham0HlS9xNEI3mu4nfJM")' }}></div>
                        <div className="flex flex-col">
                            <h1 className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal">Eleanor Vance</h1>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-normal leading-normal">eleanor@email.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 cursor-pointer text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">help</span>
                        <p className="text-sm font-medium leading-normal">Help Center</p>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 cursor-pointer text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">logout</span>
                        <p className="text-sm font-medium leading-normal">Log out</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SettingsSidebar;
