import React from 'react';
import { BrainCircuitIcon, ClipboardListIcon, LightbulbIcon, TrendingUpIcon } from './common/Icons';
import Spinner from './common/Spinner';

interface AIToolsPanelProps {
  onRunTool: (tool: 'swot' | 'roadmap' | 'expand' | 'market') => void;
  isLoading: boolean;
}

const AIToolButton: React.FC<{
  onClick: () => void;
  isLoading: boolean;
  icon: React.ReactNode;
  label: string;
  description: string;
}> = ({ onClick, isLoading, icon, label, description }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className="flex items-center gap-4 w-full p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-left"
  >
    <div className="flex-shrink-0 bg-gray-700 p-2 rounded-md">{icon}</div>
    <div>
      <p className="font-semibold text-gray-100">{label}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
    {isLoading && <Spinner className="ml-auto" />}
  </button>
);

const AIToolsPanel: React.FC<AIToolsPanelProps> = ({ onRunTool, isLoading }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h3 className="text-lg font-bold mb-4 px-1 text-gray-200">AI Analysis Tools</h3>
      <div className="space-y-3">
        <AIToolButton
          onClick={() => onRunTool('swot')}
          isLoading={isLoading}
          icon={<BrainCircuitIcon className="h-6 w-6 text-indigo-400" />}
          label="SWOT Analysis"
          description="Strengths, Weaknesses, etc."
        />
        <AIToolButton
          onClick={() => onRunTool('roadmap')}
          isLoading={isLoading}
          icon={<ClipboardListIcon className="h-6 w-6 text-green-400" />}
          label="Generate Roadmap"
          description="Create a high-level project plan."
        />
        <AIToolButton
          onClick={() => onRunTool('expand')}
          isLoading={isLoading}
          icon={<LightbulbIcon className="h-6 w-6 text-yellow-400" />}
          label="Expand Idea"
          description="Find new angles & variations."
        />
        <AIToolButton
          onClick={() => onRunTool('market')}
          isLoading={isLoading}
          icon={<TrendingUpIcon className="h-6 w-6 text-teal-400" />}
          label="Market Analysis"
          description="Analyze trends & competitors."
        />
      </div>
    </div>
  );
};

export default AIToolsPanel;
