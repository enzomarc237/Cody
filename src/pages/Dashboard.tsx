import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import QuickStart from '../components/QuickStart';
import RecentProjects from '../components/RecentProjects';
import AccountStatus from '../components/AccountStatus';

const Dashboard: React.FC = () => {
    return (
        <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Header />
                            <QuickStart />
                            <RecentProjects />
                        </div>
                        <aside className="space-y-8">
                           <AccountStatus />
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
