import { GoogleGenAI, Type, GenerateContentResponse, Content } from "@google/genai";
import { ChatMessage, SWOTAnalysis, Roadmap, MarketAnalysisResult, GroundingSource } from '../types';

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
    const prompt = `As a business strategist, conduct a detailed SWOT analysis for the following innovative idea. For each category (Strengths, Weaknesses, Opportunities, Threats), provide 3-4 distinct points. Each point should be a concise statement followed by a brief explanation.

Idea: "${ideaDescription}"`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        strengths: { type: Type.ARRAY, items: { type: Type.STRING, description: "A strength of the project" } },
                        weaknesses: { type: Type.ARRAY, items: { type: Type.STRING, description: "A weakness of the project" } },
                        opportunities: { type: Type.ARRAY, items: { type: Type.STRING, description: "An opportunity for the project" } },
                        threats: { type: Type.ARRAY, items: { type: Type.STRING, description: "A threat to the project" } }
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
    const prompt = `Act as a seasoned product manager. Create a strategic, high-level product roadmap for the idea below. The roadmap should have a clear title and outline a logical progression from a Minimum Viable Product (MVP) to a full-featured product over 3-5 distinct phases.

For each phase, define:
1. A clear phase name (e.g., "Phase 1: MVP Launch").
2. A few key milestones or features to be accomplished.
3. An estimated duration (e.g., "1-2 months").

Idea: "${ideaDescription}"`;
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
    const prompt = `Act as an innovation consultant. Brainstorm and expand upon the following idea. Structure your response into three distinct sections, using markdown for headers:

### Creative Variations
Suggest 2-3 alternative takes or unique features for the core idea.

### Cross-Disciplinary Applications
How could this idea be applied in completely different fields or industries?

### Potential Pivot Opportunities
Describe 2-3 ways the business model or target audience could pivot if the initial approach doesn't work.

Be creative, concise, and use bullet points within each section.

Idea: "${ideaDescription}"`;

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

export const generateMarketAnalysis = async (ideaDescription: string): Promise<MarketAnalysisResult | null> => {
    const prompt = `As a market research analyst, provide a concise and actionable market analysis for the following business idea. Use the latest information available from your search. Structure your analysis with the following clear headings in markdown:

### Target Audience
Describe the primary and secondary user personas for this idea. What are their needs and pain points?

### Relevant Market Trends
Identify 2-3 key market trends and briefly explain why they are relevant to this idea's success.

### Competitive Landscape
List 2-3 potential competitors. For each, briefly describe their core offering and a potential weakness you could exploit.

Idea: "${ideaDescription}"`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                tools: [{googleSearch: {}}],
            },
        });

        const analysisText = response.text;
        
        const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
        const sources: GroundingSource[] = rawChunks
            .map((chunk: any) => ({
                uri: chunk.web?.uri ?? '',
                title: chunk.web?.title ?? 'Untitled Source',
            }))
            .filter(source => source.uri) // Filter out empty URIs
            // Deduplicate sources based on URI
            .reduce((acc: GroundingSource[], current) => {
                if (!acc.some(item => item.uri === current.uri)) {
                    acc.push(current);
                }
                return acc;
            }, []);

        return { analysisText, sources };

    } catch (error) {
        console.error("Error generating market analysis:", error);
        return null;
    }
};