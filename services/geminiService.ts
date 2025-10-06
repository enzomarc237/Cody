
import { GoogleGenAI, Type, GenerateContentResponse, Content } from "@google/genai";
import { ChatMessage, SWOTAnalysis, Roadmap } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = "gemini-2.5-flash";

function chatHistoryToGeminiHistory(history: ChatMessage[]): Content[] {
    return history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
    }));
}

export const getChatResponse = async (history: ChatMessage[], newMessage: string): Promise<string> => {
    try {
        const chat = ai.chats.create({
            model: model,
            history: chatHistoryToGeminiHistory(history),
        });
        const response: GenerateContentResponse = await chat.sendMessage({ message: newMessage });
        return response.text;
    } catch (error) {
        console.error("Error getting chat response:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
};

export const generateSWOT = async (ideaDescription: string): Promise<SWOTAnalysis | null> => {
    const prompt = `Based on the following idea, generate a SWOT analysis. Provide 3-4 points for each category. Idea: "${ideaDescription}"`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                        weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
                        opportunities: { type: Type.ARRAY, items: { type: Type.STRING } },
                        threats: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ['strengths', 'weaknesses', 'opportunities', 'threats']
                }
            }
        });

        return JSON.parse(response.text) as SWOTAnalysis;
    } catch (error) {
        console.error("Error generating SWOT analysis:", error);
        return null;
    }
};

export const generateRoadmap = async (ideaDescription: string): Promise<Roadmap | null> => {
    const prompt = `Create a high-level product roadmap for the following idea. It should include a title and 3-5 phases, each with a name, a few key milestones, and an estimated duration. Idea: "${ideaDescription}"`;
    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        phases: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    phaseName: { type: Type.STRING },
                                    milestones: { type: Type.ARRAY, items: { type: Type.STRING } },
                                    duration: { type: Type.STRING }
                                },
                                required: ['phaseName', 'milestones', 'duration']
                            }
                        }
                    },
                    required: ['title', 'phases']
                }
            }
        });

        return JSON.parse(response.text) as Roadmap;
    } catch (error) {
        console.error("Error generating roadmap:", error);
        return null;
    }
};

export const expandIdea = async (ideaDescription: string): Promise<string> => {
    const prompt = `Expand on the following idea with creative variations, cross-disciplinary applications, and potential pivot opportunities. Be concise and use bullet points. Idea: "${ideaDescription}"`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error expanding idea:", error);
        return "Sorry, I couldn't expand on the idea right now.";
    }
};
