import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ContentGeneration from '../pages/ContentGeneration';
import DocumentEditor from '../pages/DocumentEditor';
import FileManager from '../pages/FileManager';
import Settings from '../pages/Settings';

const router = createBrowserRouter([
    { path: '/', element: <Dashboard /> },
    { path: '/generate', element: <ContentGeneration /> },
    { path: '/editor', element: <DocumentEditor /> },
    { path: '/files', element: <FileManager /> },
    { path: '/settings/*', element: <Settings /> },
]);

const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
