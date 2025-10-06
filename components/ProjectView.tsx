import React, { useState } from 'react';
import { Project, ChatMessage, KanbanBoardData, GeneratedAsset, AITool } from '../types.ts';
import ChatPanel from './ChatPanel.tsx';
import MainContentPanel from './MainContentPanel.tsx';
import AIToolsPanel from './AIToolsPanel.tsx';
import Modal from './common/Modal.tsx';
import { generateKanbanTasks, generateDocument } from '../services/geminiService.ts';
import { ArrowLeftIcon } from './common/Icons.tsx';

interface ProjectViewProps {
  project: Project;
  onUpdateProject: (updatedProject: Project) => void;
  onBackToDashboard: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onUpdateProject, onBackToDashboard }) => {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<GeneratedAsset | null>(null);

  const handleChatHistoryChange = (newHistory: ChatMessage[]) => {
    onUpdateProject({ ...project, chatHistory: newHistory });
  };
  
  const handleUpdateKanban = (data: KanbanBoardData) => {
    onUpdateProject({ ...project, kanbanTasks: data });
  };

  const handleDeleteAsset = (assetId: string) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
        const updatedAssets = project.generatedAssets.filter(asset => asset.id !== assetId);
        onUpdateProject({ ...project, generatedAssets: updatedAssets });
    }
  }

  const handleRunTool = async (tool: AITool) => {
    setIsAiLoading(true);
    try {
      if (tool === 'GENERATE_TASKS') {
        const newKanbanData = await generateKanbanTasks(project.description);
        onUpdateProject({ ...project, kanbanTasks: newKanbanData });
      } else if (tool === 'GENERATE_PITCH') {
        const content = await generateDocument(project.description, 'Elevator Pitch');
        const newAsset: GeneratedAsset = {
            id: `asset-${Date.now()}`,
            name: 'Elevator Pitch',
            content,
            type: 'document',
            createdAt: new Date().toISOString()
        };
        onUpdateProject({ ...project, generatedAssets: [...project.generatedAssets, newAsset] });
      } else if (tool === 'GENERATE_USER_STORIES') {
        const content = await generateDocument(project.description, 'User Stories');
        const newAsset: GeneratedAsset = {
            id: `asset-${Date.now()}`,
            name: 'User Stories',
            content,
            type: 'document',
            createdAt: new Date().toISOString()
        };
        onUpdateProject({ ...project, generatedAssets: [...project.generatedAssets, newAsset] });
      }
    } catch (error) {
      console.error(`Failed to run AI tool ${tool}:`, error);
      alert(`An error occurred while running the tool: ${tool}. Please check the console for details.`);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8 space-y-6">
       <div className="flex items-center gap-4">
         <button onClick={onBackToDashboard} className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full bg-gray-800/50 hover:bg-gray-800">
           <ArrowLeftIcon className="h-6 w-6" />
         </button>
         <div>
            <h1 className="text-3xl font-bold text-gray-100">{project.name}</h1>
            <p className="text-gray-400 mt-1">{project.description}</p>
         </div>
       </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-150px)]">
        <div className="lg:col-span-2 h-full">
            <MainContentPanel 
                project={project}
                onUpdateKanban={handleUpdateKanban}
                onViewAsset={setSelectedAsset}
                onDeleteAsset={handleDeleteAsset}
            />
        </div>
        <div className="flex flex-col gap-6 h-full">
          <AIToolsPanel onRunTool={handleRunTool} isAiLoading={isAiLoading} />
          <div className="flex-grow min-h-0">
            <ChatPanel
              projectDescription={project.description}
              chatHistory={project.chatHistory}
              onChatHistoryChange={handleChatHistoryChange}
              isAiLoading={isAiLoading}
              setIsAiLoading={setIsAiLoading}
            />
          </div>
        </div>
      </div>
      
      <Modal isOpen={!!selectedAsset} onClose={() => setSelectedAsset(null)}>
        {selectedAsset && (
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">{selectedAsset.name}</h2>
                <div className="prose prose-invert prose-sm max-w-none bg-gray-800/50 p-4 rounded-lg max-h-[60vh] overflow-y-auto">
                    <p className="whitespace-pre-wrap">{selectedAsset.content}</p>
                </div>
            </div>
        )}
      </Modal>
    </div>
  );
};

export default ProjectView;
