
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
import { Bot, User, Send, SmileIcon } from 'lucide-react';
import { stylistResponses } from './stylistResponses';
import ChatMessage from './ChatMessage';
import BitmojiCreator from './BitmojiCreator';
import { useUserProfile } from '@/context/UserProfileContext';
import { UserProfile } from '@/types/UserProfile';

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
  const [showBitmojiCreator, setShowBitmojiCreator] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { profile, updateProfile, hasProfile } = useUserProfile();

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    // If it's the first time opening and user doesn't have a profile, suggest creating one
    if (isOpen && !hasProfile && messages.length === 1) {
      setTimeout(() => {
        const profileSuggestionMessage: Message = {
          id: Date.now(),
          sender: 'bot',
          text: "I notice you haven't set up your style profile yet. Would you like to create your style avatar? This will help me provide more personalized recommendations for your body type and style preferences."
        };
        setMessages(prev => [...prev, profileSuggestionMessage]);
      }, 1000);
    }
  }, [messages, isOpen, hasProfile]);

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
    
    // Check for profile creation keywords
    const profileCreationKeywords = ['profile', 'avatar', 'bitmoji', 'create profile', 'style profile'];
    const shouldOpenProfileCreator = profileCreationKeywords.some(keyword => 
      input.toLowerCase().includes(keyword)
    );
    
    if (shouldOpenProfileCreator) {
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Great! Let's set up your style profile. Click the 'Create Style Avatar' button to get started."
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
        setTimeout(() => setShowBitmojiCreator(true), 500);
      }, 1000);
      return;
    }
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Find response based on user input
    setTimeout(() => {
      const botResponse = generateBotResponse(input.toLowerCase(), profile);
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponse
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2s for realism
  };

  const generateBotResponse = (userInput: string, userProfile: UserProfile | null): string => {
    // If no profile exists, use generic responses
    if (!userProfile) {
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
      return "I'm not sure how to help with that specific question. Would you like to create your style profile so I can give you more personalized recommendations?";
    }
    
    // Personalized responses based on user profile
    const { bodyType, skinTone, stylePreferences } = userProfile;
    
    // Body type specific recommendations
    if (userInput.includes('outfit') || userInput.includes('wear') || userInput.includes('dress')) {
      if (bodyType === 'petite') {
        return `For your petite frame, I recommend high-waisted pieces that elongate your silhouette. ${stylePreferences.includes('vintage') ? 'Our vintage A-line dresses would be perfect for you.' : 'Consider fitted tops tucked into high-waisted bottoms to create a balanced look.'}`;
      } else if (bodyType === 'curvy') {
        return `With your gorgeous curves, wrap dresses and tops that highlight your waistline would be very flattering. ${stylePreferences.includes('formal') ? 'For formal events, our structured blazers paired with A-line skirts create a beautiful silhouette.' : 'Our selection of stretch denim was designed with your body type in mind.'}`;
      } else if (bodyType === 'athletic') {
        return `With your athletic build, you can rock both structured and flowing pieces. ${stylePreferences.includes('casual') ? 'Try our boyfriend jeans with a tucked-in blouse to add some feminine contrast.' : 'Our tailored blazers will accentuate your shoulders beautifully.'}`;
      } else if (bodyType === 'tall') {
        return `Your height gives you the advantage of carrying many styles with elegance. ${stylePreferences.includes('minimalist') ? 'Long, clean-lined pieces like our maxi dresses would showcase your height wonderfully.' : 'Consider breaking up your silhouette with contrasting pieces to create visual interest.'}`;
      } else if (bodyType === 'plus-size') {
        return `We have beautiful pieces designed to flatter your curves. ${stylePreferences.includes('bohemian') ? 'Our flowing bohemian maxi dresses with empire waistlines would look stunning on you.' : 'Consider tops with V-necks and wrap styles that create a beautiful silhouette.'}`;
      }
    }
    
    // Color recommendations based on skin tone
    if (userInput.includes('color') || userInput.includes('colours') || userInput.includes('tone')) {
      if (['fair', 'light'].includes(skinTone)) {
        return "With your fair skin tone, jewel tones like emerald green, sapphire blue, and ruby red would look stunning on you. Also consider soft pastels that won't overwhelm your coloring.";
      } else if (['medium', 'olive'].includes(skinTone)) {
        return "Your medium/olive skin tone works beautifully with earth tones, warm neutrals, and rich jewel tones. Colors like terracotta, olive green, and deep turquoise would complement your skin wonderfully.";
      } else if (['tan', 'deep', 'dark'].includes(skinTone)) {
        return "Your rich skin tone pairs beautifully with bold, vibrant colors like cobalt blue, bright orange, and fuchsia. You can also rock bright whites and deep blacks with elegance.";
      }
    }
    
    // Style preference based recommendations
    const preferredStyles = stylePreferences.join(', ');
    if (userInput.includes('style') || userInput.includes('recommendation')) {
      return `Based on your preference for ${preferredStyles} style${stylePreferences.length > 1 ? 's' : ''}, I'd recommend exploring our curated collections that blend these aesthetics. We have several pieces that would complement your ${bodyType} body type while matching your style preferences.`;
    }
    
    // Find matching response based on keywords (fallback to generic responses)
    for (const item of stylistResponses) {
      for (const keyword of item.keywords) {
        if (userInput.includes(keyword.toLowerCase())) {
          // Return random response from matching array
          const response = item.responses[Math.floor(Math.random() * item.responses.length)];
          // Personalize generic response if possible
          if (bodyType && stylePreferences.length > 0) {
            return `${response} Given your ${bodyType} body type and ${preferredStyles} style preference${stylePreferences.length > 1 ? 's' : ''}, I think this would work particularly well for you.`;
          }
          return response;
        }
      }
    }
    
    // Default response if no keywords match
    return `I'm not sure how to help with that specific question. Would you like advice on outfit styling for your ${bodyType} body type, color combinations that would complement your skin tone, or finding pieces that match your ${preferredStyles} style?`;
  };

  const handleProfileSave = (newProfile: UserProfile) => {
    updateProfile(newProfile);
    
    // Send confirmation message in chat
    const confirmationMessage: Message = {
      id: Date.now(),
      sender: 'bot',
      text: `Thank you for creating your style profile! I now have a better understanding of your ${newProfile.bodyType} body type and ${newProfile.stylePreferences.join(', ')} style preferences. This will help me provide more personalized recommendations for you.`
    };
    
    setMessages(prev => [...prev, confirmationMessage]);
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
              {profile && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-auto flex items-center gap-1 text-xs"
                  onClick={() => setShowBitmojiCreator(true)}
                >
                  <SmileIcon size={14} />
                  Edit Style Avatar
                </Button>
              )}
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
                
                {!profile && messages.length > 1 && (
                  <div className="flex justify-center my-4">
                    <Button
                      onClick={() => setShowBitmojiCreator(true)}
                      className="bg-brand-pink hover:bg-brand-pink/90 text-black flex items-center gap-2"
                    >
                      <SmileIcon size={16} />
                      Create Style Avatar
                    </Button>
                  </div>
                )}
                
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
      
      {/* Bitmoji Creator */}
      <BitmojiCreator 
        isOpen={showBitmojiCreator}
        onOpenChange={setShowBitmojiCreator}
        onProfileSave={handleProfileSave}
        initialProfile={profile || undefined}
      />
    </>
  );
};

export default StylistBot;
