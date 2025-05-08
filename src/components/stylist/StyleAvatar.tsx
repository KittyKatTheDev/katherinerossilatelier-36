
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useUserProfile } from '@/context/UserProfileContext';
import { Crown, Shirt, Star, Diamond, Brush } from 'lucide-react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';
import { AvatarType, avatarTypeOptions } from '@/types/UserProfile';
import { useToast } from '@/hooks/use-toast';
import OutfitDrawer from './OutfitDrawer';

const getAvatarIcon = (avatarType?: AvatarType) => {
  switch (avatarType) {
    case 'princess':
      return <Crown className="h-12 w-12" />;
    case 'casual':
      return <Shirt className="h-12 w-12" />;
    case 'formal':
      return <Diamond className="h-12 w-12" />;
    case 'sporty':
      return <Star className="h-12 w-12" />;
    default:
      return <Crown className="h-12 w-12" />;
  }
};

const getRandomMotivation = () => {
  const motivations = [
    "What are we feeling today?",
    "Ready to create your look?",
    "Let's design something special!",
    "Time for a style refresh?",
    "What's your vibe today?"
  ];
  
  return motivations[Math.floor(Math.random() * motivations.length)];
};

const StyleAvatar = () => {
  const { profile, updateProfile } = useUserProfile();
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false);
  const [isOutfitDrawerOpen, setIsOutfitDrawerOpen] = useState(false);
  const [motivation, setMotivation] = useState(getRandomMotivation());
  const { toast } = useToast();
  
  const selectedAvatarType = profile?.avatarConfig?.avatarType || 'princess';
  const skinToneColor = profile?.skinTone 
    ? (document.querySelector(`[style*="${profile.skinTone}"]`) as HTMLElement)?.style.backgroundColor
    : '#E8B88A'; // Default medium skin tone
  
  const handleAvatarChange = (avatarType: AvatarType) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          avatarType
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Avatar style updated to ${avatarType}!`,
      });
      setIsAvatarDialogOpen(false);
    }
  };
  
  const handleOpenOutfitDrawer = () => {
    setIsAvatarDialogOpen(false);
    setIsOutfitDrawerOpen(true);
  };

  // New motivation on component mount
  useEffect(() => {
    setMotivation(getRandomMotivation());
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <h3 className="text-xl font-serif mb-2">Your Style Avatar</h3>
        <p className="text-gray-600">{motivation}</p>
      </div>
      
      <div className="flex gap-4 items-center justify-center mt-2">
        <Dialog open={isAvatarDialogOpen} onOpenChange={setIsAvatarDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="relative group p-0 h-24 w-24 rounded-full border-4 hover:border-brand-pink overflow-hidden" 
              style={{ backgroundColor: skinToneColor || '#E8B88A' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {getAvatarIcon(selectedAvatarType)}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-20 transition-all">
                <span className="text-white text-xs font-medium">Change Style</span>
              </div>
            </Button>
          </DialogTrigger>
          
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Choose Your Avatar Style</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-2 gap-4 py-4">
              {avatarTypeOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={selectedAvatarType === option.value ? "default" : "outline"}
                  className={`h-24 flex flex-col items-center justify-center gap-2 ${
                    selectedAvatarType === option.value ? 'border-2 border-brand-pink' : ''
                  }`}
                  onClick={() => handleAvatarChange(option.value)}
                >
                  {option.value === 'princess' && <Crown className="h-8 w-8" />}
                  {option.value === 'casual' && <Shirt className="h-8 w-8" />}
                  {option.value === 'formal' && <Diamond className="h-8 w-8" />}
                  {option.value === 'sporty' && <Star className="h-8 w-8" />}
                  <span>{option.label}</span>
                </Button>
              ))}
            </div>
            
            <div className="mt-4">
              <Button 
                onClick={handleOpenOutfitDrawer}
                className="w-full bg-brand-pink hover:bg-brand-pink/90 text-black flex items-center gap-2"
              >
                <Brush className="h-4 w-4" />
                Draw Your Own Outfit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <OutfitDrawer isOpen={isOutfitDrawerOpen} onOpenChange={setIsOutfitDrawerOpen} />
    </div>
  );
};

export default StyleAvatar;
