export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface KanbanTask {
  id: string;
  content: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface KanbanBoardData {
  tasks: { [key: string]: KanbanTask };
  columns: { [key: string]: KanbanColumn };
  columnOrder: string[];
}

export interface GeneratedAsset {
  id: string;
  name: string;
  content: string;
  type: 'document' | 'list' | 'other';
  createdAt: string;
}

export interface Project {
  id: string;
  name:string;
  description: string;
  chatHistory: ChatMessage[];
  kanbanTasks: KanbanBoardData;
  generatedAssets: GeneratedAsset[];
}

export type AITool = 'GENERATE_TASKS' | 'GENERATE_PITCH' | 'GENERATE_USER_STORIES';
