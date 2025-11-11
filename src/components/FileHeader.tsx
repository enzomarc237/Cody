import React from 'react';

const FileHeader: React.FC = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#232f48] px-10 py-4 bg-white dark:bg-[#111722]">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">All Documents</h2>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
                <div className="flex gap-2">
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-primary/20 dark:bg-[#232f48] text-primary dark:text-white">
                        <span className="material-symbols-outlined">grid_view</span>
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#232f48]">
                        <span className="material-symbols-outlined">view_list</span>
                    </button>
                </div>
                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>
                <button className="flex items-center gap-2 rounded-lg h-10 px-3 bg-gray-100 dark:bg-[#232f48] text-gray-700 dark:text-gray-200 text-sm font-medium">
                    <span>Sort by: Last Modified</span>
                    <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf1t-KS5bbZEqd6J9bID6xw0_qk7L-77yNToTG0JGcXTupHwRLYSI9M44rFXQdPjMbTvTxyw69YC5QvDivPDgO9HSiHpkB_PhdR9nr6WG_0KhLiw83CF39T51rFuzV9kxHEN5BwnTsjX4VMaWCievGXBUn_GOmu4jDN5hiMRFNBilVfe_fEhtAjy0WbOJehQTlfdgXohUMkJXifrJejb5WHYhnxQlItAyHBJc398H1unOOMtRYqkeKzQq66WcVWcqyzyQdEW4SE1E")' }}></div>
            </div>
        </header>
    );
};

export default FileHeader;
