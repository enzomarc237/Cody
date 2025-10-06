import React, { useState } from 'react';
// Fix: Added .ts extension
import { Project, KanbanBoardData, GeneratedAsset } from '../types.ts';
// Fix: Added .tsx extension
import KanbanBoard from './KanbanBoard.tsx';
// Fix: Added .tsx extension
import GeneratedAssetsPanel from './GeneratedAssetsPanel.tsx';
// Fix: Added .tsx extension
import { ClipboardListIcon, FileTextIcon } from './common/Icons.tsx';

interface MainContentPanelProps {
  project: Project;
  onUpdateKanban: (data: KanbanBoardData) => void;
  onViewAsset: (asset: GeneratedAsset) => void;
  onDeleteAsset: (assetId: string) => void;
}

type Tab = 'planning' | 'documents';

const MainContentPanel: React.FC<MainContentPanelProps> = ({ 
    project, 
    onUpdateKanban,
    onViewAsset,
    onDeleteAsset
}) => {
  const [activeTab, setActiveTab] = useState<Tab>('planning');

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl h-full flex flex-col">
      <div className="flex border-b border-gray-800">
        <TabButton
          label="Planning"
          icon={<ClipboardListIcon className="h-5 w-5" />}
          isActive={activeTab === 'planning'}
          onClick={() => setActiveTab('planning')}
        />
        <TabButton
          label="Documents"
          icon={<FileTextIcon className="h-5 w-5" />}
          isActive={activeTab === 'documents'}
          onClick={() => setActiveTab('documents')}
        />
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        {activeTab === 'planning' && (
            <KanbanBoard initialData={project.kanbanTasks} onUpdate={onUpdateKanban} />
        )}
        {activeTab === 'documents' && (
            <GeneratedAssetsPanel 
                assets={project.generatedAssets} 
                onViewAsset={onViewAsset}
                onDeleteAsset={onDeleteAsset}
            />
        )}
      </div>
    </div>
  );
};

interface TabButtonProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 py-3 px-5 font-semibold text-sm transition-colors border-b-2 ${
            isActive
                ? 'text-indigo-400 border-indigo-400'
                : 'text-gray-400 border-transparent hover:text-gray-200'
        }`}
    >
        {icon}
        {label}
    </button>
)


export default MainContentPanel;