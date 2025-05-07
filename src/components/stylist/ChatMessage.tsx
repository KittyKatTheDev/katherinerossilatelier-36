
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  imageUrl?: string;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full ${
        isBot ? 'bg-brand-pink text-black' : 'bg-gray-200'
      }`}>
        {isBot ? <Bot size={16} /> : <User size={16} />}
      </div>
      
      <div className={`rounded-lg px-4 py-2 max-w-[80%] break-words ${
        isBot 
          ? 'bg-muted text-foreground' 
          : 'bg-brand-pink/20 ml-auto text-foreground'
      }`}>
        <div>
          {message.text}
          {message.imageUrl && (
            <div className="mt-2">
              <img 
                src={message.imageUrl} 
                alt="Generated outfit" 
                className="rounded-md w-full max-h-60 object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
