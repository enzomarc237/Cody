import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.ts';
import { Project } from './types.ts';
import Dashboard from './components/Dashboard.tsx';
import ProjectView from './components/ProjectView.tsx';

const App: React.FC = () => {
  const [projects, setProjects] = useLocalStorage<Project[]>('projects', []);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleAddProject = () => {
    const name = prompt("Enter new project name:");
    if (name) {
      const description = prompt("Enter a short description for your project:");
      if (description) {
        const newProject: Project = {
          id: `proj-${Date.now()}`,
          name,
          description,
          chatHistory: [],
          kanbanTasks: { tasks: {}, columns: {}, columnOrder: [] },
          generatedAssets: [],
        };
        setProjects([...projects, newProject]);
        setSelectedProjectId(newProject.id);
      }
    }
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    if (selectedProjectId === id) {
        setSelectedProjectId(null);
    }
  };
  
  const handleUpdateProject = (updatedProject: Project) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">
      <header className="p-4 border-b border-gray-800 flex items-center gap-2">
        <svg className="h-8 w-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5a3.375 3.375 0 00-3.375-3.375L13.5 9.75l-1.125.375a3.375 3.375 0 00-2.456 2.456L9.75 13.5l.375 1.125a3.375 3.375 0 002.456 2.456L13.5 18l1.125-.375a3.375 3.375 0 002.456-2.456L17.25 13.5l-.375-1.125z" />
        </svg>
        <h1 className="text-xl font-bold">AI Project Launchpad</h1>
      </header>
      <main className="p-4 sm:p-6 lg:p-8">
        {selectedProject ? (
          <ProjectView 
            project={selectedProject}
            onUpdateProject={handleUpdateProject}
            onBackToDashboard={() => setSelectedProjectId(null)}
          />
        ) : (
          <Dashboard
            projects={projects}
            onSelectProject={setSelectedProjectId}
            onAddProject={handleAddProject}
            onDeleteProject={handleDeleteProject}
          />
        )}
      </main>
    </div>
  );
};

export default App;
