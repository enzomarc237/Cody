import React from 'react';
import { AITool } from '../types.ts';
import Spinner from './common/Spinner.tsx';

interface AIToolsPanelProps {
  onRunTool: (tool: AITool) => void;
  isAiLoading: boolean;
}

const AIToolsPanel: React.FC<AIToolsPanelProps> = ({ onRunTool, isAiLoading }) => {
  const tools: { id: AITool; name: string; description: string }[] = [
    { id: 'GENERATE_TASKS', name: 'Generate Plan', description: 'Create initial Kanban tasks for this project.' },
    { id: 'GENERATE_PITCH', name: 'Draft Pitch', description: 'Write an elevator pitch for your project idea.' },
    { id: 'GENERATE_USER_STORIES', name: 'Create User Stories', description: 'Generate user stories for development.' },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h3 className="text-lg font-bold mb-4 text-gray-200">AI Project Tools</h3>
      <div className="space-y-3">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => onRunTool(tool.id)}
            disabled={isAiLoading}
            className="w-full text-left p-3 bg-gray-800 hover:bg-gray-700/60 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-semibold text-sm text-gray-200">{tool.name}</p>
                    <p className="text-xs text-gray-500">{tool.description}</p>
                </div>
                {isAiLoading && <Spinner />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIToolsPanel;
