import React from 'react';
import { Project } from '../types';
import { PlusIcon, TrashIcon, DownloadIcon } from './common/Icons';

interface DashboardProps {
  projects: Project[];
  onSelectProject: (id: string) => void;
  onAddProject: () => void;
  onDeleteProject: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ projects, onSelectProject, onAddProject, onDeleteProject }) => {

  const handleExportProject = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    
    const sanitizeFilename = (name: string) => name.replace(/[\/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
    const filename = `${sanitizeFilename(project.name)}.json`;

    const projectData = JSON.stringify(project, null, 2);
    const blob = new Blob([projectData], { type: 'application/json;charset=utf-8' });
    
    if ((window as any).saveAs) {
      (window as any).saveAs(blob, filename);
    } else {
      console.error('FileSaver.js not loaded');
      alert('Could not export project. FileSaver library is missing.');
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-100">Projects Dashboard</h2>
        <button
          onClick={onAddProject}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-lg shadow-indigo-600/20"
        >
          <PlusIcon className="h-5 w-5" />
          New Project
        </button>
      </div>
      {projects.length === 0 ? (
        <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-gray-300">No projects yet.</h3>
            <p className="text-gray-500 mt-2">Click "New Project" to start innovating!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 hover:bg-gray-900/60 transition-all duration-300 cursor-pointer"
              onClick={() => onSelectProject(project.id)}
            >
              <h3 className="text-lg font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">{project.name}</h3>
              <p className="text-gray-400 mt-2 text-sm line-clamp-2">{project.description}</p>
              <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => handleExportProject(e, project)}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                  aria-label="Export project"
                >
                  <DownloadIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm(`Are you sure you want to delete "${project.name}"?`)) {
                      onDeleteProject(project.id);
                    }
                  }}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  aria-label="Delete project"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;