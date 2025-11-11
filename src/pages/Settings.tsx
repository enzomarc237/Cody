import React from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import SettingsContent from '../components/SettingsContent';

const Settings: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
            <SettingsSidebar />
            <SettingsContent />
        </div>
    );
};

export default Settings;
