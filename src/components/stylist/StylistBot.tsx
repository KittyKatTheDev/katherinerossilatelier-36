
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send } from 'lucide-react';
import { stylistResponses } from './stylistResponses';
import ChatMessage from './ChatMessage';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
}

const StylistBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      sender: 'bot', 
      text: "Hello! I'm Katherine's personal stylist assistant. I can help you find the perfect outfit or answer any fashion questions you have. How can I assist you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Find response based on user input
    setTimeout(() => {
      const botResponse = generateBotResponse(input.toLowerCase());
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponse
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2s for realism
  };

  const generateBotResponse = (userInput: string): string => {
    // Find matching response based on keywords
    for (const item of stylistResponses) {
      for (const keyword of item.keywords) {
        if (userInput.includes(keyword.toLowerCase())) {
          // Return random response from matching array
          return item.responses[Math.floor(Math.random() * item.responses.length)];
        }
      }
    }
    
    // Default response if no keywords match
    return "I'm not sure how to help with that specific question. Would you like advice on outfit styling, color combinations, or finding pieces that match your body type?";
  };

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-brand-pink hover:bg-brand-pink/90 text-black shadow-lg p-0"
            aria-label="Open stylist chat"
          >
            <Bot size={24} />
          </Button>
        </DrawerTrigger>
        
        <DrawerContent className="h-[80vh]">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <Bot size={20} />
              Personal Stylist Assistant
            </DrawerTitle>
          </DrawerHeader>
          
          <div className="px-4 flex-1 overflow-hidden">
            <ScrollArea className="h-[calc(80vh-10rem)] pr-4">
              <div className="space-y-4 pb-4">
                {messages.map(message => (
                  <ChatMessage 
                    key={message.id}
                    message={message}
                  />
                ))}
                
                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-brand-pink text-black">
                      <Bot size={16} />
                    </div>
                    <div className="typing-indicator">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>
          
          <DrawerFooter className="pt-2">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Input
                placeholder="Ask me about style advice..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send size={18} />
              </Button>
            </form>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StylistBot;
