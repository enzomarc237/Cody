
import React, { useState, useRef, useEffect } from 'react';
// Fix: Added .ts extension
import { ChatMessage } from '../types.ts';
// Fix: Added .ts extension
import { getChatResponse } from '../services/geminiService.ts';
import Spinner from './common/Spinner.tsx';
// Fix: Added .tsx extension
import { SendIcon, BotIcon, UserIcon } from './common/Icons.tsx';

interface ChatPanelProps {
  projectDescription: string;
  chatHistory: ChatMessage[];
  onChatHistoryChange: (newHistory: ChatMessage[]) => void;
  isAiLoading: boolean;
  setIsAiLoading: (isLoading: boolean) => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ projectDescription, chatHistory, onChatHistoryChange, isAiLoading, setIsAiLoading }) => {
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isAiLoading) return;

    const newUserMessage: ChatMessage = { role: 'user', text: userInput };
    const updatedHistoryForUi = [...chatHistory, newUserMessage];
    onChatHistoryChange(updatedHistoryForUi);
    setUserInput('');
    setIsAiLoading(true);

    try {
      // Fix: Correctly construct the prompt for the first message, including context,
      // while passing the correct history to the Gemini service.
      const promptForApi = chatHistory.length === 0
        ? `Let's discuss my idea: "${projectDescription}".\n\nMy question: ${userInput}`
        : userInput;
      
      // The history passed to the API should *not* include the new user message.
      const aiResponse = await getChatResponse(chatHistory, promptForApi);
      const newAiMessage: ChatMessage = { role: 'model', text: aiResponse };
      onChatHistoryChange([...updatedHistoryForUi, newAiMessage]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      const errorMessage: ChatMessage = { role: 'model', text: "Sorry, I couldn't get a response. Please try again." };
      onChatHistoryChange([...updatedHistoryForUi, errorMessage]);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl flex flex-col h-full">
      <h3 className="text-lg font-bold p-4 border-b border-gray-800 text-gray-200">AI Ideation Agent</h3>
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {chatHistory.map((message, index) => (
          <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
            {message.role === 'model' && (
              <div className="w-8 h-8 flex-shrink-0 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <BotIcon className="w-5 h-5 text-indigo-400" />
              </div>
            )}
            <div className={`max-w-xs md:max-w-md p-3 rounded-xl ${message.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-800 text-gray-300 rounded-bl-none'}`}>
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
             {message.role === 'user' && (
              <div className="w-8 h-8 flex-shrink-0 bg-gray-700 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-gray-300" />
              </div>
            )}
          </div>
        ))}
        {isAiLoading && (
            <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <BotIcon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="max-w-xs md:max-w-md p-3 rounded-xl bg-gray-800 text-gray-300 rounded-bl-none flex items-center">
                    <Spinner />
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800">
        <div className="flex items-center bg-gray-800 rounded-lg">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask the AI to refine your idea..."
            className="w-full bg-transparent p-3 focus:outline-none text-sm text-gray-200 placeholder-gray-500"
            disabled={isAiLoading}
          />
          <button type="submit" disabled={isAiLoading || !userInput.trim()} className="p-3 text-gray-400 hover:text-indigo-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors">
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPanel;