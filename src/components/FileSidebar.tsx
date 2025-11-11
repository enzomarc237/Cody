import React from 'react';
import { NavLink } from 'react-router-dom';

const FileSidebar: React.FC = () => {
    return (
        <aside className="flex w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111722] p-4">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUQYDURQkXX-fpD_5hPdW1aEks4YkzHDaYIHl85nazrvb4yu0nLLJrJ6mKAyuggzXtqpTwsrzUY2aArE3kkTBlHKvRIy3lv4Rfdck6O_k7S3VLmHk8pvbxzr88R_GX20kPFD258uLuAWGkudjQnFQegvTKmMrhUApYr4kZm-8lhOHy02rpTQln1cnM0I0G4QcnrXGr5ekSsgl5yvzv-kwtGF81J0LcpEg-KpOBgl1nhtLm2Cm2AFkfObJaTD0-zYgsUt1cl-NfQT8")' }}></div>
                <div className="flex flex-col">
                    <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">AI Assistant</h1>
                    <p className="text-gray-500 dark:text-[#92a4c9] text-sm font-normal leading-normal">Workspace</p>
                </div>
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] mb-4">
                <span className="truncate">New Document</span>
            </button>
            <div className="mb-4">
                <label className="flex flex-col w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                        <div className="text-gray-400 dark:text-[#92a4c9] flex border border-r-0 border-gray-300 dark:border-[#324467] bg-gray-50 dark:bg-[#232f48] items-center justify-center pl-3 rounded-l-lg">
                            <span className="material-symbols-outlined text-base">search</span>
                        </div>
                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border border-gray-300 dark:border-[#324467] bg-gray-50 dark:bg-[#232f48] h-full placeholder:text-gray-400 dark:placeholder:text-[#92a4c9] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search documents..." value="" />
                    </div>
                </label>
            </div>
            <div className="flex flex-col gap-1 mb-4">
                <NavLink to="/documents" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-[#232f48]">
                    <span className="material-symbols-outlined fill text-primary dark:text-white">description</span>
                    <p className="text-primary dark:text-white text-sm font-medium leading-normal">All Documents</p>
                </NavLink>
                <NavLink to="/recents" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232f48]">
                    <span className="material-symbols-outlined text-gray-600 dark:text-white">schedule</span>
                    <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">Recents</p>
                </NavLink>
                <NavLink to="/favorites" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232f48]">
                    <span className="material-symbols-outlined text-gray-600 dark:text-white">star</span>
                    <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">Favorites</p>
                </NavLink>
                <NavLink to="/trash" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232f48]">
                    <span className="material-symbols-outlined text-gray-600 dark:text-white">delete</span>
                    <p className="text-gray-600 dark:text-white text-sm font-medium leading-normal">Trash</p>
                </NavLink>
            </div>
            <div className="flex flex-col flex-grow">
                <details className="flex flex-col group" open>
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                        <p className="text-gray-800 dark:text-white text-sm font-medium leading-normal">Folders</p>
                        <div className="text-gray-500 dark:text-white group-open:rotate-180">
                            <span className="material-symbols-outlined text-base">expand_more</span>
                        </div>
                    </summary>
                    <div className="flex flex-col gap-1 pl-2">
                        <a className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232f48]" href="#">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">folder</span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">Marketing</span>
                        </a>
                        <a className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-[#232f48]" href="#">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">folder</span>
                            <span className="text-gray-900 dark:text-white text-sm font-medium">Blog Posts</span>
                        </a>
                        <a className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232f48]" href="#">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">folder</span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">Social Media</span>
                        </a>
                        <a className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232f48]" href="#">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">folder</span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">Product Docs</span>
                        </a>
                    </div>
                </details>
            </div>
        </aside>
    );
};

export default FileSidebar;
