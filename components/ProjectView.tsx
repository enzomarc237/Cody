
import React, { useState } from 'react';
import { Project, ChatMessage, KanbanBoardData, SWOTAnalysis, Roadmap } from '../types';
import { ArrowLeftIcon } from './common/Icons';
import ChatPanel from './ChatPanel';
import AIToolsPanel from './AIToolsPanel';
import KanbanBoard from './KanbanBoard';
import Modal from './common/Modal';
import { generateSWOT, generateRoadmap, expandIdea } from '../services/geminiService';

interface ProjectViewProps {
  project: Project;
  onUpdateProject: (project: Project) => void;
  onGoToDashboard: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onUpdateProject, onGoToDashboard }) => {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const handleUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProject({ ...project, name: e.target.value });
  };
  
  const handleUpdateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdateProject({ ...project, description: e.target.value });
  };

  const handleUpdateChat = (newHistory: ChatMessage[]) => {
    onUpdateProject({ ...project, chatHistory: newHistory });
  };
  
  const handleUpdateKanban = (newKanbanData: KanbanBoardData) => {
    onUpdateProject({ ...project, kanbanTasks: newKanbanData });
  };

  const runAiTool = async (tool: 'swot' | 'roadmap' | 'expand') => {
    setIsAiLoading(true);
    let resultNode: React.ReactNode = null;
    
    try {
        if (tool === 'swot') {
            const result = await generateSWOT(project.description);
            if (result) resultNode = <SWOTDisplay swot={result} />;
        } else if (tool === 'roadmap') {
            const result = await generateRoadmap(project.description);
            if (result) resultNode = <RoadmapDisplay roadmap={result} />;
        } else if (tool === 'expand') {
            const result = await expandIdea(project.description);
            resultNode = <ExpandDisplay text={result} />;
        }
    } catch (error) {
        resultNode = <p className="text-red-400">An error occurred while running the AI tool.</p>
    } finally {
        setIsAiLoading(false);
        if (resultNode) {
            setModalContent(resultNode);
        }
    }
  };

  return (
    <div className="animate-fade-in">
      <button
        onClick={onGoToDashboard}
        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold mb-4 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back to Dashboard
      </button>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
        <input 
          type="text"
          value={project.name}
          onChange={handleUpdateName}
          className="text-3xl font-bold bg-transparent focus:outline-none w-full text-gray-100 placeholder-gray-500"
          placeholder="Project Name"
        />
        <textarea 
          value={project.description}
          onChange={handleUpdateDescription}
          className="text-md text-gray-400 bg-transparent mt-2 w-full resize-none focus:outline-none placeholder-gray-500"
          placeholder="Project Description"
          rows={2}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <AIToolsPanel onRunTool={runAiTool} isLoading={isAiLoading} />
          <ChatPanel 
            projectDescription={project.description}
            chatHistory={project.chatHistory} 
            onChatHistoryChange={handleUpdateChat}
            isAiLoading={isAiLoading}
            setIsAiLoading={setIsAiLoading}
          />
        </div>
        <div className="lg:col-span-2">
            <KanbanBoard initialData={project.kanbanTasks} onUpdate={handleUpdateKanban} />
        </div>
      </div>
      
      <Modal isOpen={!!modalContent} onClose={() => setModalContent(null)}>
        {modalContent}
      </Modal>
    </div>
  );
};

const SWOTDisplay: React.FC<{ swot: SWOTAnalysis }> = ({ swot }) => (
    <div>
        <h3 className="text-xl font-bold mb-4 text-gray-100">SWOT Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800 p-3 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Strengths</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">{swot.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">Weaknesses</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">{swot.weaknesses.map((w, i) => <li key={i}>{w}</li>)}</ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Opportunities</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">{swot.opportunities.map((o, i) => <li key={i}>{o}</li>)}</ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">Threats</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">{swot.threats.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </div>
        </div>
    </div>
);

const RoadmapDisplay: React.FC<{ roadmap: Roadmap }> = ({ roadmap }) => (
    <div>
        <h3 className="text-xl font-bold mb-4 text-gray-100">{roadmap.title}</h3>
        <div className="space-y-4">
            {roadmap.phases.map((phase, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-400">{i + 1}. {phase.phaseName} <span className="text-gray-400 font-normal text-sm">({phase.duration})</span></h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 ml-2 text-sm space-y-1">
                        {phase.milestones.map((m, j) => <li key={j}>{m}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const ExpandDisplay: React.FC<{ text: string }> = ({ text }) => (
    <div>
        <h3 className="text-xl font-bold mb-4 text-gray-100">Idea Expansion</h3>
        <div className="prose prose-invert prose-sm text-gray-300 whitespace-pre-wrap">{text}</div>
    </div>
);

export default ProjectView;
