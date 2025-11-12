import React from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftSidebar from '../components/LeftSidebar';
import Editor from '../components/Editor';
import RightSidebar from '../components/RightSidebar';

const DocumentEditor: React.FC = () => {
    return (
        <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <TopNavBar />
            <div className="flex flex-1 overflow-hidden">
                <LeftSidebar />
                <Editor />
                <RightSidebar />
            </div>
        </div>
    );
};

export default DocumentEditor;
