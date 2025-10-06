import React, { useState } from 'react';
import { Project, ChatMessage, KanbanBoardData, SWOTAnalysis, Roadmap, MarketAnalysisResult, AiToolType, GeneratedAsset } from '../types';
import { ArrowLeftIcon } from './common/Icons';
import ChatPanel from './ChatPanel';
import AIToolsPanel from './AIToolsPanel';
import Modal from './common/Modal';
import { generateSWOT, generateRoadmap, expandIdea, generateMarketAnalysis } from '../services/geminiService';
import MainContentPanel from './MainContentPanel';

interface ProjectViewProps {
  project: Project;
  onUpdateProject: (project: Project) => void;
  onGoToDashboard: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onUpdateProject, onGoToDashboard }) => {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [assetToView, setAssetToView] = useState<GeneratedAsset | null>(null);

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
  
  const handleDeleteAsset = (assetId: string) => {
    const updatedAssets = project.generatedAssets.filter(asset => asset.id !== assetId);
    onUpdateProject({ ...project, generatedAssets: updatedAssets });
  };

  const runAiTool = async (tool: AiToolType) => {
    setIsAiLoading(true);
    let generatedAsset: GeneratedAsset | null = null;
    
    try {
        let content: any = null;
        let title = '';

        if (tool === 'swot') {
            content = await generateSWOT(project.description);
            title = 'SWOT Analysis';
        } else if (tool === 'roadmap') {
            content = await generateRoadmap(project.description);
            title = content?.title || 'Product Roadmap';
        } else if (tool === 'expand') {
            content = await expandIdea(project.description);
            title = 'Idea Expansion';
        } else if (tool === 'market') {
            content = await generateMarketAnalysis(project.description);
            title = 'Market Analysis';
        }

        if (content) {
          generatedAsset = {
            id: `asset-${Date.now()}`,
            type: tool,
            title,
            content,
            createdAt: new Date().toISOString(),
          };
          const updatedAssets = [...project.generatedAssets, generatedAsset];
          onUpdateProject({ ...project, generatedAssets: updatedAssets });
          setAssetToView(generatedAsset);
        }

    } catch (error) {
        console.error("Error running AI tool:", error);
        alert('An error occurred while running the AI tool. Please try again.');
    } finally {
        setIsAiLoading(false);
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
            <MainContentPanel
              project={project}
              onUpdateKanban={handleUpdateKanban}
              onViewAsset={setAssetToView}
              onDeleteAsset={handleDeleteAsset}
            />
        </div>
      </div>
      
      <Modal isOpen={!!assetToView} onClose={() => setAssetToView(null)}>
        {assetToView && <AssetDisplay asset={assetToView} />}
      </Modal>
    </div>
  );
};

const AssetDisplay: React.FC<{ asset: GeneratedAsset }> = ({ asset }) => {
    switch (asset.type) {
        case 'swot':
            return <SWOTDisplay swot={asset.content as SWOTAnalysis} />;
        case 'roadmap':
            return <RoadmapDisplay roadmap={asset.content as Roadmap} />;
        case 'expand':
            return <ExpandDisplay text={asset.content as string} />;
        case 'market':
            return <MarketAnalysisDisplay result={asset.content as MarketAnalysisResult} />;
        default:
            return <p>Unsupported asset type.</p>
    }
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

const MarketAnalysisDisplay: React.FC<{ result: MarketAnalysisResult }> = ({ result }) => (
    <div>
        <h3 className="text-xl font-bold mb-4 text-gray-100">Market Analysis</h3>
        <div className="prose prose-invert prose-sm text-gray-300 whitespace-pre-wrap mb-6" dangerouslySetInnerHTML={{ __html: result.analysisText.replace(/\n/g, '<br />') }}/>
        
        {result.sources.length > 0 && (
            <div>
                <h4 className="font-semibold text-gray-200 mb-2">Sources</h4>
                <ul className="list-disc list-inside text-sm space-y-2">
                    {result.sources.map((source, i) => (
                        <li key={i}>
                            <a 
                                href={source.uri} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 hover:underline break-all"
                            >
                                {source.title || source.uri}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

export default ProjectView;