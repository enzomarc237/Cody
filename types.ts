
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Task {
  id: string;
  content: string;
}

export type KanbanColumnId = 'todo' | 'inProgress' | 'done';

export interface KanbanBoardData {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  chatHistory: ChatMessage[];
  kanbanTasks: KanbanBoardData;
}

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface RoadmapPhase {
  phaseName: string;
  milestones: string[];
  duration: string;
}

export interface Roadmap {
  title: string;
  phases: RoadmapPhase[];
}
