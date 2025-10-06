import React from 'react';
import { GeneratedAsset } from '../types.ts';
import { ViewIcon, TrashIcon } from './common/Icons.tsx';

interface GeneratedAssetsPanelProps {
  assets: GeneratedAsset[];
  onViewAsset: (asset: GeneratedAsset) => void;
  onDeleteAsset: (assetId: string) => void;
}

const GeneratedAssetsPanel: React.FC<GeneratedAssetsPanelProps> = ({ assets, onViewAsset, onDeleteAsset }) => {
  return (
    <div className="space-y-4 animate-fade-in">
      {assets.length === 0 ? (
        <div className="text-center py-16 bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
          <h3 className="text-lg font-medium text-gray-400">No documents generated yet.</h3>
          <p className="text-gray-500 mt-1">Use the AI Tools to create project documents.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-800">
          {assets.map((asset) => (
            <li key={asset.id} className="group flex items-center justify-between p-4 hover:bg-gray-800/50 rounded-lg transition-colors">
              <div>
                <p className="font-semibold text-gray-200">{asset.name}</p>
                <p className="text-sm text-gray-500">
                  Generated on {new Date(asset.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={() => onViewAsset(asset)} className="text-gray-500 hover:text-indigo-400 transition-colors" aria-label="View asset">
                    <ViewIcon className="h-5 w-5" />
                </button>
                <button onClick={() => {
                  if (window.confirm(`Are you sure you want to delete "${asset.name}"?`)) {
                    onDeleteAsset(asset.id)
                  }
                }} className="text-gray-500 hover:text-red-500 transition-colors" aria-label="Delete asset">
                    <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GeneratedAssetsPanel;
