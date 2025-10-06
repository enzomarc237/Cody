import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage, KanbanBoardData } from '../types.ts';

// Per instructions, API key is in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const model = 'gemini-2.5-flash';

// Convert our app's ChatMessage format to Gemini's Content format
const buildHistory = (history: ChatMessage[]) => {
  return history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));
};

export const getChatResponse = async (history: ChatMessage[], newPrompt: string): Promise<string> => {
  try {
    const chat: Chat = ai.chats.create({
      model,
      history: buildHistory(history)
    });
    const response: GenerateContentResponse = await chat.sendMessage({ message: newPrompt });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to get response from AI.");
  }
};

export const generateKanbanTasks = async (projectDescription: string): Promise<KanbanBoardData> => {
  const prompt = `Based on this project description, generate a set of Kanban tasks to get started.
Project: "${projectDescription}"

Provide the response as a JSON object that follows this structure:
{
  "tasks": { "task-1": { "id": "task-1", "content": "First task" }, ... },
  "columns": {
    "todo": { "id": "todo", "title": "To Do", "taskIds": ["task-1", ...] },
    "inprogress": { "id": "inprogress", "title": "In Progress", "taskIds": [] },
    "done": { "id": "done", "title": "Done", "taskIds": [] }
  },
  "columnOrder": ["todo", "inprogress", "done"]
}

Ensure all generated tasks are placed in the "todo" column's taskIds array. The other columns should have empty taskIds arrays.
Only return the JSON object, with no other text or markdown formatting.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const jsonString = response.text.trim();
    const cleanedJson = jsonString.replace(/^```json\n/, '').replace(/\n```$/, '');
    const data: KanbanBoardData = JSON.parse(cleanedJson);
    return data;
  } catch (error) {
    console.error("Gemini API call for Kanban tasks failed:", error);
    throw new Error("Failed to generate Kanban tasks.");
  }
};

export const generateDocument = async (projectDescription: string, documentType: string): Promise<string> => {
    const prompt = `Based on the project description below, write a "${documentType}" document.

Project: "${projectDescription}"

Please provide a comprehensive and well-structured document.`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error(`Gemini API call for ${documentType} failed:`, error);
        throw new Error(`Failed to generate ${documentType}.`);
    }
}
