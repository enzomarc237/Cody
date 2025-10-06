import React from 'react';
import { GeneratedAsset, AiToolType, SWOTAnalysis, Roadmap, MarketAnalysisResult } from '../types';
import { BrainCircuitIcon, ClipboardListIcon, LightbulbIcon, TrendingUpIcon, TrashIcon, DownloadIcon } from './common/Icons';

interface GeneratedAssetsPanelProps {
  assets: GeneratedAsset[];
  onViewAsset: (asset: GeneratedAsset) => void;
  onDeleteAsset: (assetId: string) => void;
}

const assetIcons: Record<AiToolType, React.ReactNode> = {
    swot: <BrainCircuitIcon className="h-6 w-6 text-indigo-400" />,
    roadmap: <ClipboardListIcon className="h-6 w-6 text-green-400" />,
    expand: <LightbulbIcon className="h-6 w-6 text-yellow-400" />,
    market: <TrendingUpIcon className="h-6 w-6 text-teal-400" />,
}

const sanitizeFilename = (name: string) => name.replace(/[\/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');

const generateMarkdownForAsset = (asset: GeneratedAsset): string => {
    let markdownContent = `# ${asset.title}\n\n`;

    switch (asset.type) {
        case 'swot': {
            const content = asset.content as SWOTAnalysis;
            markdownContent += `## Strengths\n${content.strengths.map(s => `- ${s}`).join('\n')}\n\n`;
            markdownContent += `## Weaknesses\n${content.weaknesses.map(w => `- ${w}`).join('\n')}\n\n`;
            markdownContent += `## Opportunities\n${content.opportunities.map(o => `- ${o}`).join('\n')}\n\n`;
            markdownContent += `## Threats\n${content.threats.map(t => `- ${t}`).join('\n')}\n`;
            break;
        }
        case 'roadmap': {
            const content = asset.content as Roadmap;
            content.phases.forEach(phase => {
                markdownContent += `## ${phase.phaseName} (${phase.duration})\n`;
                markdownContent += `${phase.milestones.map(m => `- ${m}`).join('\n')}\n\n`;
            });
            break;
        }
        case 'expand': {
            markdownContent += asset.content as string;
            break;
        }
        case 'market': {
            const content = asset.content as MarketAnalysisResult;
            markdownContent += `${content.analysisText}\n\n`;
            if (content.sources && content.sources.length > 0) {
                markdownContent += `## Sources\n`;
                markdownContent += content.sources.map(s => `- [${s.title || 'Source'}](${s.uri})`).join('\n');
            }
            break;
        }
        default:
            markdownContent += 'Unsupported format for export.';
    }
    return markdownContent;
};

const GeneratedAssetsPanel: React.FC<GeneratedAssetsPanelProps> = ({ assets, onViewAsset, onDeleteAsset }) => {
  
  const sortedAssets = [...assets].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleExportAsset = (e: React.MouseEvent, asset: GeneratedAsset) => {
    e.stopPropagation();
    const markdown = generateMarkdownForAsset(asset);
    const filename = `${sanitizeFilename(asset.title)}.md`;
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });

    if ((window as any).saveAs) {
        (window as any).saveAs(blob, filename);
    } else {
        console.error('FileSaver.js not loaded');
        alert('Could not export asset. FileSaver library is missing.');
    }
  };

  if (sortedAssets.length === 0) {
    return (
        <div className="text-center py-10">
            <h3 className="text-lg font-semibold text-gray-400">No Documents Yet</h3>
            <p className="text-gray-500 mt-1 text-sm">Use the AI Analysis Tools to generate documents.</p>
        </div>
    );
  }
  
  return (
    <div>
        <h3 className="text-lg font-bold mb-4 px-1 text-gray-200">Generated Documents</h3>
        <div className="space-y-3">
            {sortedAssets.map(asset => (
                <div key={asset.id} className="group flex items-center gap-4 w-full p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 bg-gray-700 p-2 rounded-md">{assetIcons[asset.type]}</div>
                    <div className="flex-grow cursor-pointer" onClick={() => onViewAsset(asset)}>
                        <p className="font-semibold text-gray-100">{asset.title}</p>
                        <p className="text-xs text-gray-400">
                            {new Date(asset.createdAt).toLocaleString()}
                        </p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                          onClick={(e) => handleExportAsset(e, asset)}
                          className="text-gray-500 hover:text-indigo-400 transition-colors"
                          aria-label="Export asset as Markdown"
                      >
                          <DownloadIcon className="h-5 w-5" />
                      </button>
                      <button
                          onClick={(e) => {
                              e.stopPropagation();
                              if (window.confirm(`Are you sure you want to delete "${asset.title}"?`)) {
                                  onDeleteAsset(asset.id);
                              }
                          }}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                          aria-label="Delete asset"
                      >
                          <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default GeneratedAssetsPanel;