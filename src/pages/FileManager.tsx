import React from 'react';
import FileSidebar from '../components/FileSidebar';
import FileHeader from '../components/FileHeader';
import DocumentGrid from '../components/DocumentGrid';

const FileManager: React.FC = () => {
    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display">
            <FileSidebar />
            <main className="flex-1 flex flex-col overflow-y-auto">
                <FileHeader />
                <DocumentGrid />
            </main>
        </div>
    );
};

export default FileManager;
