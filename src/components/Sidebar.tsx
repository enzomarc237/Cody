import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navItems = [
        { name: 'Dashboard', icon: 'dashboard', path: '/' },
        { name: 'Projects', icon: 'folder', path: '/files' },
        { name: 'Templates', icon: 'grid_view', path: '/generate' },
        { name: 'Brand Voice', icon: 'campaign', path: '/editor' },
        { name: 'Settings', icon: 'settings', path: '/settings' },
    ];

    return (
        <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXWqaW6kru7Y-jkQhGQPSGiG9U0QRTKJzYWCK2VLBREvf2jBBEWSSuxCTHOp3RzGWF0bIyHD7ubsrNSSxGZQ_rSQN1qxcYIxl8n0sIde469CL0wmukFB2x9eCLEziS9qXkiSAHoh3LlnFAYPb7V_r3PW9goNLcR06E5vVWCnvol7OT6xfRLlpr0JwFE1Lx-Qh-Y-NuXmLlGwaBEeKww2M5rBmelgcXWEQEcgpaBHvDISbnx5Qrx0DVt2Sz_JB89X0W2O0tiojqoqA")' }}></div>
                <div className="flex flex-col">
                    <h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">AI Assistant</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Content Suite</p>
                </div>
            </div>
            <nav className="flex flex-col gap-2 flex-1">
                {navItems.map(item => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`
                        }
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <p className="text-sm font-medium leading-normal">{item.name}</p>
                    </NavLink>
                ))}
            </nav>
            <div className="flex items-center gap-3 px-3 py-2 mt-auto">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_oiigNZnnzVbT7yQ-dSa5tuuLv4-6tz7Ue1fYitbFDFek3Uxr2gprDaeNxnY9FXyUZgHqbcGbCTrQMVgxDYozh_RMUoHpSolJJuBfM3eHvwodhw0XUViPqYefmJ-a97fBMYDLP2UpEiQhfJrhwWOTDm8wMES7aEUkBRlFP2j3G_qfZYqf6XPaCzCZfs8kLrnpUy2EP99GYufIEvqVUfM5ic0eHeOVLZws3SNC1mLcty1Vv8pWJtqyxu0kB3yLjjVtbhzC2RxS5e0")' }}></div>
                <div className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Alex Drake</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">alex@example.com</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
