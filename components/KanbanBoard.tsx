
import React, { useState } from 'react';
import { KanbanBoardData, KanbanColumnId, Task } from '../types';
import { PlusIcon, TrashIcon } from './common/Icons';

interface KanbanBoardProps {
  initialData: KanbanBoardData;
  onUpdate: (data: KanbanBoardData) => void;
}

const columnTitles: Record<KanbanColumnId, string> = {
  todo: 'To Do',
  inProgress: 'In Progress',
  done: 'Done',
};

const KanbanBoard: React.FC<KanbanBoardProps> = ({ initialData, onUpdate }) => {
  const [boardData, setBoardData] = useState<KanbanBoardData>(initialData);
  const [newTaskContent, setNewTaskContent] = useState<Record<KanbanColumnId, string>>({
    todo: '',
    inProgress: '',
    done: '',
  });

  const handleUpdate = (newData: KanbanBoardData) => {
    setBoardData(newData);
    onUpdate(newData);
  };

  const handleAddTask = (columnId: KanbanColumnId) => {
    const content = newTaskContent[columnId].trim();
    if (!content) return;

    const newTask: Task = { id: `task-${Date.now()}`, content };
    const newColumnTasks = [...boardData[columnId], newTask];
    const newData = { ...boardData, [columnId]: newColumnTasks };
    handleUpdate(newData);
    setNewTaskContent(prev => ({ ...prev, [columnId]: '' }));
  };
  
  const handleDeleteTask = (columnId: KanbanColumnId, taskId: string) => {
    const newColumnTasks = boardData[columnId].filter(task => task.id !== taskId);
    const newData = { ...boardData, [columnId]: newColumnTasks };
    handleUpdate(newData);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 h-full">
      <h3 className="text-lg font-bold mb-4 px-1 text-gray-200">Structuring & Planning</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(Object.keys(columnTitles) as KanbanColumnId[]).map(columnId => (
          <div key={columnId} className="bg-gray-950/50 rounded-lg p-3">
            <h4 className="font-semibold mb-3 text-gray-300 px-1">{columnTitles[columnId]}</h4>
            <div className="space-y-2 min-h-[100px]">
              {boardData[columnId].map(task => (
                <div key={task.id} className="group bg-gray-800 p-2.5 rounded-md text-sm text-gray-300 flex justify-between items-start">
                  <span>{task.content}</span>
                  <button onClick={() => handleDeleteTask(columnId, task.id)} className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-opacity">
                      <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleAddTask(columnId); }} className="mt-3 flex items-center gap-2">
                <input
                    type="text"
                    value={newTaskContent[columnId]}
                    onChange={(e) => setNewTaskContent(prev => ({...prev, [columnId]: e.target.value}))}
                    placeholder="New task..."
                    className="w-full bg-gray-800 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-200 placeholder-gray-500"
                />
                <button type="submit" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-500 p-1.5 rounded disabled:bg-gray-600">
                    <PlusIcon className="h-4 w-4 text-white" />
                </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
