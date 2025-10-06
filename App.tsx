
import React, { useState, useCallback, useEffect } from 'react';
import { Project } from './types';
import Dashboard from './components/Dashboard';
import ProjectView from './components/ProjectView';
import { useLocalStorage } from './hooks/useLocalStorage';
import { LogoIcon } from './components/common/Icons';

const App: React.FC = () => {
  const [projects, setProjects] = useLocalStorage<Project[]>('innovate-ai-projects', []);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    // On first load, if there are no projects, create a sample one.
    if (projects.length === 0) {
      const sampleProject: Project = {
        id: `proj-${Date.now()}`,
        name: 'My First Innovative Idea',
        description: 'A brief description of my new idea. For example, a platform to connect local gardeners.',
        chatHistory: [],
        kanbanTasks: {
          todo: [{ id: 'task-1', content: 'Define the core problem' }],
          inProgress: [],
          done: [],
        },
      };
      setProjects([sampleProject]);
    }
  }, []); // Run only once

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleGoToDashboard = () => {
    setSelectedProjectId(null);
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      name: `New Project ${projects.length + 1}`,
      description: 'A new idea waiting to be explored.',
      chatHistory: [],
      kanbanTasks: { todo: [], inProgress: [], done: [] },
    };
    setProjects(prev => [...prev, newProject]);
    setSelectedProjectId(newProject.id);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    }
  };

  const handleUpdateProject = useCallback((updatedProject: Project) => {
    setProjects(prevProjects =>
      prevProjects.map(p => (p.id === updatedProject.id ? updatedProject : p))
    );
  }, [setProjects]);

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <LogoIcon className="h-8 w-8 text-indigo-400" />
          <h1 className="text-xl font-bold text-gray-100">InnovateAI</h1>
        </div>
      </header>
      <main className="p-4 sm:p-6 lg:p-8">
        {selectedProject ? (
          <ProjectView
            key={selectedProject.id}
            project={selectedProject}
            onUpdateProject={handleUpdateProject}
            onGoToDashboard={handleGoToDashboard}
          />
        ) : (
          <Dashboard
            projects={projects}
            onSelectProject={handleSelectProject}
            onAddProject={handleAddProject}
            onDeleteProject={handleDeleteProject}
          />
        )}
      </main>
    </div>
  );
};

export default App;
