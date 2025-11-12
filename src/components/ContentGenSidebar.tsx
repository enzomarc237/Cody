import React from 'react';
import { NavLink } from 'react-router-dom';

const ContentGenSidebar: React.FC = () => {
    return (
        <nav className="flex h-full w-64 flex-col justify-between border-r border-slate-200/10 bg-background-dark p-4">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGJgCjg_PAeO_CiZCv5zCdPELAOrEsI8gKvcE1KT10vMzCbLcTQsFyqjShoQtnqwh-YFOLJhRKlYjF-mL_uObWM2ztyIe5-v05gn3guOyKZizSsbUq-vAG6MKvYHgjIdBNPXlJyxTIn5HCNamG04MVgQHFjlhuyqeuHxuxpCMjkfwM3yWpNcSfybIPUd3-JLpKQqWAcyt6Z74RhC0JBD_TSuHchh3ho6dhacA0bzsQ-lyHuKfc0JXrpOr3aHje7Clv1ShC_CKX-nE")' }}></div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-base font-medium leading-normal">Content AI</h1>
                        <p className="text-slate-400 text-sm font-normal leading-normal">Workspace</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <NavLink to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-300">dashboard</span>
                        <p className="text-sm font-medium leading-normal">Dashboard</p>
                    </NavLink>
                    <NavLink to="/generate" className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-white">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        <p className="text-sm font-medium leading-normal">Create New</p>
                    </NavLink>
                    <NavLink to="/history" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-300">history</span>
                        <p className="text-sm font-medium leading-normal">History</p>
                    </NavLink>
                    <NavLink to="/templates" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-300">grid_view</span>
                        <p className="text-sm font-medium leading-normal">Templates</p>
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide">
                    <span className="truncate">Upgrade Plan</span>
                </button>
                <div className="flex flex-col gap-1">
                    <NavLink to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-300">settings</span>
                        <p className="text-sm font-medium leading-normal">Settings</p>
                    </NavLink>
                    <NavLink to="/help" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-slate-800">
                        <span className="material-symbols-outlined text-slate-300">help</span>
                        <p className="text-sm font-medium leading-normal">Help</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default ContentGenSidebar;
