import React from 'react';

const QuickStart: React.FC = () => {
    const quickStartItems = [
        {
            title: 'Start from scratch',
            description: 'Begin with a blank document.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBajJlPxOeTWB3StLZBOJSslXqljQaBmll5q5zb2U6qMYJ5ROCSaitt9sT80DTOqzN4-d6wYCrVswZJc8bYGKhiH3VIN5kBEuHFjtn3OFLXdPOEABKf8AYdiZPPicXY4EzmLsg43e9UE-KcQYQC1egp7KHWG9ylHwA0YAWOBZS95YFDynVHkLRyWIWDFt98dWRsuA_IJvfRIOIh6iHqb-rDun9IAkK3IklzmWoJOAH2LKia8UIk7e876vqaxTOQUXQNYlWn1lYHxCo'
        },
        {
            title: 'Use a template',
            description: 'Browse pre-built structures.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeL8hFTwyt6r_SGFNOKtVY9EV2QI-pKRhX_VukMRmhQAu7J-IP4G_uHwpqTLS6RzbMfYjW6hgv3go-dY49S-65Ex65vBjLb5Gtl6OYDVnFWZLTe-ggfInLgmx_Sir48w0ST8yIZkXfyDpJTDKqJmmkczeyO8wASNNUdx8VUvXZiISxBURJ6ka2hHu-Nt5nVf-5EYpDkWRMSVX2jYmX9fVxJZ8y0mswSEHONmd9VyR6K9xC0vMu7zbjLboMYNanlnlOkmSvE3tdc8'
        },
        {
            title: 'Rewrite content',
            description: 'Improve your existing text.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMr1ikcQZA2dxiJJQQ7VjLrD5Eslmijdsw7ufe1MuBQ6w9gA4AACDz9B5CWzflG6oW4BAS2ASbSfAGsynPG5eNk8zahdmeKar3mikRelxb0_-88tbulM-7myEhDbDsgdPy2KJjdgB_wF5Nj0ftkUwF4oXzL5K6CN1z7sxXY1MPsrCtAJHdTtjhvCDTzT3lUBycWpF-Hw3m24to-zkXLakLNgXz4pHx_KiZzwMBW9JtK_2tT6B9GKh2J7eQjkbcocOU6CtzWtpaem4'
        }
    ];

    return (
        <section>
            <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Quick Start</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickStartItems.map(item => (
                    <div key={item.title} className="flex flex-col gap-3 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-shadow">
                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url("${item.imageUrl}")` }}></div>
                        <div>
                            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">{item.title}</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuickStart;
