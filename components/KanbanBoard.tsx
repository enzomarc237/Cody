import React from 'react';
import { KanbanBoardData } from '../types.ts';

interface KanbanBoardProps {
  initialData: KanbanBoardData;
  onUpdate: (data: KanbanBoardData) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ initialData }) => {
  if (!initialData || !initialData.columnOrder || initialData.columnOrder.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-900/50 rounded-lg border border-dashed border-gray-700">
        <h3 className="text-lg font-medium text-gray-400">No project plan yet.</h3>
        <p className="text-gray-500 mt-1">Use the AI Tools to generate a starter Kanban board.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full animate-fade-in">
      {initialData.columnOrder.map(columnId => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]).filter(Boolean);

        return (
          <div key={column.id} className="bg-gray-950/50 rounded-xl flex flex-col">
            <h3 className="text-md font-bold text-gray-300 p-4 border-b border-gray-800">{column.title}</h3>
            <div className="p-4 space-y-3 overflow-y-auto">
              {tasks.map(task => (
                <div key={task.id} className="bg-gray-800 p-3 rounded-lg shadow">
                  <p className="text-sm text-gray-300">{task.content}</p>
                </div>
              ))}
              {tasks.length === 0 && (
                  <div className="text-center text-xs text-gray-600 py-4">No tasks in this column.</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
