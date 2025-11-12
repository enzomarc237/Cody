import React from 'react';

const TopNavBar: React.FC = () => {
    return (
        <header className="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-6 py-2">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AI Studio</h2>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Saved</p>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Generate ✨</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 bg-gray-200/50 dark:bg-gray-800 text-gray-600 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span className="material-symbols-outlined text-xl">notifications</span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMQnGM7rqfLarvCKCJ0fO3nkyaVfzs28OvA-_U2EOZUgxpvrzfYwPDi0ri4PdxR49-g4EzUkVT1LGv7V1J4dgBDPqsLW77IVGibg3uCmil5vY-QLv68ohIOYW9LdvEJpdoIja2sRsHK7zhkCB0k2vuvA6s6dcndwtewlbct_EGIIrV4ANv9Ia8yccVqPLCSSHKePlaYgQugoTaUhwiX-xtSDhxN8YbSln0ZiO1GkMTddCn8bmZPi-kzXuqMj_Ni7y5mhgbaTJEvp8")' }}></div>
            </div>
        </header>
    );
};

export default TopNavBar;
