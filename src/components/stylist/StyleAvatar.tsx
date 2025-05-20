
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useUserProfile } from '@/context/UserProfileContext';
import { Crown, Shirt, Star, Diamond, Brush, Palette, Smile } from 'lucide-react';
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
import { 
  AvatarType, 
  avatarTypeOptions, 
  hairStyleOptions, 
  hairColorOptions, 
  facialFeatureOptions,
  eyeColorOptions,
  facialExpressionOptions,
  accessoryOptions,
  outfitOptions,
  HairStyle,
  FacialFeature,
  EyeColor,
  FacialExpression,
  Accessory
} from '@/types/UserProfile';
import { useToast } from '@/hooks/use-toast';
import OutfitDrawer from './OutfitDrawer';
import CartoonAvatar from './CartoonAvatar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from '@/components/ui/scroll-area';

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
    case 'bitmoji':
      return <Smile className="h-12 w-12" />;
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
    "What's your vibe today?",
    "Express yourself with your Bitmoji!",
    "Show off your unique style!"
  ];
  
  return motivations[Math.floor(Math.random() * motivations.length)];
};

const StyleAvatar = () => {
  const { profile, updateProfile } = useUserProfile();
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false);
  const [isOutfitDrawerOpen, setIsOutfitDrawerOpen] = useState(false);
  const [motivation, setMotivation] = useState(getRandomMotivation());
  const [activeTab, setActiveTab] = useState('style');
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const { toast } = useToast();
  
  const selectedAvatarType = profile?.avatarConfig?.avatarType || 'bitmoji';
  const selectedHairStyle = profile?.avatarConfig?.hairStyle || 'short';
  const selectedHairColor = profile?.avatarConfig?.hairColor || '#8B4513';
  const selectedFacialFeatures = profile?.avatarConfig?.facialFeatures || [];
  const selectedEyeColor = profile?.avatarConfig?.eyeColor || 'brown';
  const selectedExpression = profile?.avatarConfig?.expression || 'smile';
  const selectedAccessories = profile?.avatarConfig?.accessories || [];
  const skinToneColor = profile?.skinTone 
    ? document.querySelector(`[data-skin-tone="${profile.skinTone}"]`)?.getAttribute('style')?.match(/background-color: ([^;]+)/)?.[1]
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
    }
  };

  const handleHairStyleChange = (hairStyle: HairStyle) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          hairStyle
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Hair style updated!`,
      });
    }
  };

  const handleHairColorChange = (hairColor: string) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          hairColor
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Hair color updated!`,
      });
    }
  };

  const handleFacialFeatureChange = (feature: FacialFeature, checked: boolean) => {
    if (profile) {
      const currentFeatures = profile.avatarConfig?.facialFeatures || [];
      let updatedFeatures: FacialFeature[];
      
      if (checked) {
        updatedFeatures = [...currentFeatures, feature];
      } else {
        updatedFeatures = currentFeatures.filter(f => f !== feature);
      }
      
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          facialFeatures: updatedFeatures
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Facial features updated!`,
      });
    }
  };
  
  const handleEyeColorChange = (eyeColor: EyeColor) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          eyeColor
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Eye color updated!`,
      });
    }
  };
  
  const handleExpressionChange = (expression: FacialExpression) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          expression
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Expression updated!`,
      });
    }
  };
  
  const handleAccessoryChange = (accessory: Accessory, checked: boolean) => {
    if (profile) {
      const currentAccessories = profile.avatarConfig?.accessories || [];
      let updatedAccessories: Accessory[];
      
      if (checked) {
        updatedAccessories = [...currentAccessories, accessory];
      } else {
        updatedAccessories = currentAccessories.filter(a => a !== accessory);
      }
      
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          accessories: updatedAccessories
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Accessories updated!`,
      });
    }
  };
  
  const handleOutfitChange = (outfit: string) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        avatarConfig: {
          ...profile.avatarConfig,
          outfit
        }
      };
      updateProfile(updatedProfile);
      toast({
        description: `Outfit updated!`,
      });
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
        <h3 className="text-xl font-serif mb-2">Your Bitmoji Avatar</h3>
        <p className="text-gray-600">{motivation}</p>
      </div>
      
      <div className="flex gap-4 items-center justify-center mt-2">
        <Dialog open={isAvatarDialogOpen} onOpenChange={setIsAvatarDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="relative group h-auto p-6 rounded-xl border-4 hover:border-brand-pink overflow-hidden" 
              style={{ backgroundColor: skinToneColor || '#E8B88A' }}>
              {profile && <CartoonAvatar profile={profile} size="sm" />}
              <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-20 transition-all">
                <span className="text-white text-xs font-medium">Customize Bitmoji</span>
              </div>
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Customize Your Bitmoji</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="bg-gray-100 p-6 rounded-xl w-full flex justify-center">
                  {profile && <CartoonAvatar profile={profile} size="md" />}
                </div>
                <Button 
                  onClick={handleOpenOutfitDrawer}
                  className="mt-4 w-full bg-brand-pink hover:bg-brand-pink/90 text-black flex items-center gap-2"
                >
                  <Brush className="h-4 w-4" />
                  Draw Your Own Outfit
                </Button>
              </div>
              
              <div className="md:col-span-2">
                <Tabs defaultValue="style" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="style">Style</TabsTrigger>
                    <TabsTrigger value="hair">Hair</TabsTrigger>
                    <TabsTrigger value="features">Face</TabsTrigger>
                    <TabsTrigger value="accessories">Accessories</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="style" className="space-y-4">
                    <h3 className="font-medium text-lg">Avatar Style</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                          {option.value === 'bitmoji' && <Smile className="h-8 w-8" />}
                          <span>{option.label}</span>
                        </Button>
                      ))}
                    </div>
                    
                    <Collapsible 
                      open={isCollapsibleOpen} 
                      onOpenChange={setIsCollapsibleOpen}
                      className="mt-6"
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full flex justify-between">
                          <span>Select Outfit</span>
                          <span>{isCollapsibleOpen ? '▲' : '▼'}</span>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="grid grid-cols-2 gap-3">
                          {outfitOptions.map((option) => (
                            <div
                              key={option.value}
                              className={`p-2 border rounded-md cursor-pointer hover:bg-gray-50 ${
                                profile?.avatarConfig?.outfit === option.value ? 'border-brand-pink bg-pink-50' : ''
                              }`}
                              onClick={() => handleOutfitChange(option.value)}
                            >
                              <p className="font-medium">{option.label}</p>
                              <span className="text-xs text-gray-500">
                                {option.category.charAt(0).toUpperCase() + option.category.slice(1)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </TabsContent>
                  
                  <TabsContent value="hair" className="space-y-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Hair Style</h3>
                        <Select 
                          value={selectedHairStyle} 
                          onValueChange={(value) => handleHairStyleChange(value as HairStyle)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a hair style" />
                          </SelectTrigger>
                          <SelectContent>
                            {hairStyleOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-2">Hair Color</h3>
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                          {hairColorOptions.map((option) => (
                            <div key={option.value} className="flex flex-col items-center">
                              <button
                                type="button"
                                className={`h-10 w-10 rounded-full border-2 ${
                                  selectedHairColor === option.value 
                                    ? 'border-black ring-2 ring-brand-pink ring-opacity-50' 
                                    : 'border-gray-200'
                                }`}
                                style={{ backgroundColor: option.color }}
                                onClick={() => handleHairColorChange(option.value)}
                                aria-label={`Select ${option.label} hair color`}
                              />
                              <span className="text-xs mt-1">{option.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="space-y-5">
                    <div>
                      <h3 className="font-medium text-lg mb-2">Eye Color</h3>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {eyeColorOptions.map((option) => (
                          <div key={option.value} className="flex flex-col items-center">
                            <button
                              type="button"
                              className={`h-8 w-8 rounded-full border-2 ${
                                selectedEyeColor === option.value 
                                  ? 'border-black ring-2 ring-brand-pink ring-opacity-50' 
                                  : 'border-gray-200'
                              }`}
                              style={{ backgroundColor: option.color }}
                              onClick={() => handleEyeColorChange(option.value)}
                              aria-label={`Select ${option.label} eye color`}
                            />
                            <span className="text-xs mt-1">{option.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  
                    <div>
                      <h3 className="font-medium text-lg mb-2">Expression</h3>
                      <ScrollArea className="h-32">
                        <div className="grid grid-cols-2 gap-2">
                          {facialExpressionOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroup value={selectedExpression} onValueChange={(value) => handleExpressionChange(value as FacialExpression)}>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value={option.value} id={`expression-${option.value}`} />
                                  <Label htmlFor={`expression-${option.value}`}>{option.label}</Label>
                                </div>
                              </RadioGroup>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  
                    <div>
                      <h3 className="font-medium text-lg mb-2">Facial Features</h3>
                      <ScrollArea className="h-40">
                        <div className="grid grid-cols-2 gap-2">
                          {facialFeatureOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`feature-${option.value}`} 
                                checked={selectedFacialFeatures.includes(option.value)}
                                onCheckedChange={(checked) => 
                                  handleFacialFeatureChange(option.value, checked === true)
                                }
                              />
                              <Label htmlFor={`feature-${option.value}`}>{option.label}</Label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="accessories" className="space-y-4">
                    <h3 className="font-medium text-lg mb-2">Accessories</h3>
                    <ScrollArea className="h-64">
                      <div className="grid grid-cols-2 gap-2">
                        {accessoryOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`accessory-${option.value}`} 
                              checked={selectedAccessories.includes(option.value)}
                              onCheckedChange={(checked) => 
                                handleAccessoryChange(option.value, checked === true)
                              }
                            />
                            <Label htmlFor={`accessory-${option.value}`}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <OutfitDrawer isOpen={isOutfitDrawerOpen} onOpenChange={setIsOutfitDrawerOpen} />
    </div>
  );
};

export default StyleAvatar;
