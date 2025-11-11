import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar: React.FC = () => {
    return (
        <aside className="flex h-full w-64 shrink-0 flex-col justify-between border-r border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-4">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb0w9fReG3l7dKD7anK0SHX2gn_9JYJFAuoMEfni0r4PieTCDI35yz6dA_9m22yIPDoJJbURNo-Th5vM1QlRrGsNX5bW_I1Ah7z-lnMLbyjxL6SRjYDjLo7cOywWYuIwFl31Vr3eHT8oUTxcRjK-AajDB5fPGbDtElkN0trjR9gD9A7gwOYZMfVS1MTaYDjsBwqeURlumE0AVyqL6nfqh6miFVD8mUNyC6pqEqvEWeD-yUlT1VwFRneyYdenL83ujrgiCb4fsGz7w")' }}></div>
                    <div className="flex flex-col">
                        <h1 className="text-base font-medium leading-normal text-gray-900 dark:text-white">My Workspace</h1>
                        <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">Free Plan</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <NavLink to="/documents" className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-white' : ''}`}>
                        <span className="material-symbols-outlined text-xl">folder</span>
                        <p className="text-sm font-semibold leading-normal">My Documents</p>
                    </NavLink>
                    <NavLink to="/shared" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined text-xl">group</span>
                        <p className="text-sm font-medium leading-normal">Shared with Me</p>
                    </NavLink>
                    <NavLink to="/templates" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                        <p className="text-sm font-medium leading-normal">Templates</p>
                    </NavLink>
                    <NavLink to="/trash" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined text-xl">delete</span>
                        <p className="text-sm font-medium leading-normal">Trash</p>
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Upgrade Plan</span>
                </button>
                <div className="flex flex-col gap-1">
                    <NavLink to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined text-xl">settings</span>
                        <p className="text-sm font-medium leading-normal">Settings</p>
                    </NavLink>
                    <NavLink to="/logout" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <span className="material-symbols-outlined text-xl">logout</span>
                        <p className="text-sm font-medium leading-normal">Log Out</p>
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default LeftSidebar;
