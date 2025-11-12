import React, { useState } from 'react';

const SettingsContent: React.FC = () => {
    const [name, setName] = useState('Eleanor Vance');
    const [email, setEmail] = useState('eleanor@email.com');

    const handleSave = () => {
        console.log({
            name,
            email
        });
    };

    return (
        <main className="flex-1 p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap justify-between gap-3 mb-6">
                    <p className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">My Account</p>
                </div>
                <div className="mb-8">
                    <div className="flex border-b border-border-light dark:border-border-dark gap-8">
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-2" href="#">
                            <p className="text-primary text-sm font-bold leading-normal">Profile</p>
                        </a>
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-text-secondary-light dark:text-text-secondary-dark pb-[13px] pt-2" href="#">
                            <p className="text-sm font-bold leading-normal">Security</p>
                        </a>
                    </div>
                </div>
                <div className="space-y-10">
                    <section>
                        <h2 className="text-text-primary-light dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Profile Details</h2>
                        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl">
                            <div className="p-6 border-b border-border-light dark:border-border-dark flex items-center gap-6">
                                <div className="relative">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHO-ThtqfVXNiUegUDn25QnRr-34W6Sp35vNyzIv7tfECK-n6aW7xpC_NelyJCtEu1PTvntSOaPqIiiVmUFXm8XbFH2f3Ad3djhylmuNnh2oZw0wAnqukrMjGCu47JzKs8iVqbij0v0UkJvwK9-SzgAQg8VJHSmQg8JLwv4VbsrGNu8T74KAiBz6NSNk38QRaiUOR5hZJG7bdyk7FtID8S-xIpd0icEqqP8eNrwnPNiX3Y0lZD4O92X_6Zx7NW2N-sKpGTdHinns8")' }}></div>
                                    <button className="absolute bottom-0 right-0 flex items-center justify-center size-7 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
                                        <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-base">photo_camera</span>
                                    </button>
                                </div>
                                <div>
                                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                        <span className="truncate">Upload New Photo</span>
                                    </button>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-2">At least 800x800px. JPG, PNG, or GIF.</p>
                                </div>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col flex-1">
                                    <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal pb-2">Full Name</p>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal leading-normal" />
                                </label>
                                <label className="flex flex-col flex-1">
                                    <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal pb-2">Email Address</p>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal leading-normal" type="email" />
                                </label>
                            </div>
                            <div className="p-6 border-t border-border-light dark:border-border-dark flex justify-end gap-3">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-surface-dark border border-transparent dark:border-border-dark text-text-primary-light dark:text-text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-border-dark transition-colors">
                                    <span className="truncate">Cancel</span>
                                </button>
                                <button onClick={handleSave} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                                    <span className="truncate">Save Changes</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-text-primary-light dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Delete Account</h2>
                        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-6">
                            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4 max-w-2xl">Permanently delete your account and all of your content. This action is not reversible, so please continue with caution.</p>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600/10 border border-red-600/20 text-red-600 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-600/20 dark:hover:bg-red-500/20 transition-colors">
                                <span className="truncate">Delete my account</span>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default SettingsContent;
