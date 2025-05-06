
import { Bot, User } from 'lucide-react';
import { useUserProfile } from '@/context/UserProfileContext';
import { skinToneOptions } from '@/types/UserProfile';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  const { profile } = useUserProfile();
  
  // Get the color for the bot avatar if profile exists
  const getBotAvatarStyle = () => {
    if (profile?.skinTone) {
      const skinTone = skinToneOptions.find(option => option.value === profile.skinTone);
      if (skinTone) {
        return { backgroundColor: skinTone.color };
      }
    }
    return { backgroundColor: undefined };
  };
  
  return (
    <div className={`flex items-start gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div 
        className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full ${
          isBot 
            ? profile ? 'text-black' : 'bg-brand-pink text-black'
            : 'bg-gray-200 text-gray-700'
        }`}
        style={isBot && profile ? getBotAvatarStyle() : undefined}
      >
        {isBot ? <Bot size={16} /> : <User size={16} />}
      </div>
      
      <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
        isBot 
          ? 'bg-gray-100 text-gray-800' 
          : 'bg-brand-pink/10 text-gray-800 ml-auto'
      }`}>
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
