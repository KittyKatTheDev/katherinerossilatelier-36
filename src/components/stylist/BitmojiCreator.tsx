
import { useState } from 'react';
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerDescription, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerTitle 
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { 
  UserProfile, 
  skinToneOptions, 
  bodyTypeOptions,
  stylePreferenceOptions, 
  StylePreference
} from '@/types/UserProfile';
import { palette } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BitmojiCreatorProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onProfileSave: (profile: UserProfile) => void;
  initialProfile?: UserProfile;
}

const defaultProfile: UserProfile = {
  skinTone: 'medium',
  bodyType: 'athletic',
  stylePreferences: ['casual'],
  avatarConfig: {
    hairColor: '#8B4513',
    hairStyle: 'short',
    facialFeatures: 'neutral',
    outfit: 'casual'
  }
};

const BitmojiCreator = ({ 
  isOpen, 
  onOpenChange, 
  onProfileSave, 
  initialProfile = defaultProfile 
}: BitmojiCreatorProps) => {
  const [currentTab, setCurrentTab] = useState("basics");
  const form = useForm<UserProfile>({
    defaultValues: initialProfile
  });
  
  const onSubmit = (data: UserProfile) => {
    onProfileSave(data);
    toast({
      title: "Profile Updated",
      description: "Your style profile has been saved successfully!"
    });
    onOpenChange(false);
  };

  const selectedSkinTone = form.watch('skinTone');
  const selectedBodyType = form.watch('bodyType');
  const selectedStyles = form.watch('stylePreferences');

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="font-serif text-2xl">Create Your Style Avatar</DrawerTitle>
          <DrawerDescription>
            Customize your virtual style assistant with your physical attributes and style preferences
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-10">
              <Tabs value={currentTab} onValueChange={setCurrentTab}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="basics">Basics</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basics" className="space-y-6">
                  {/* Skin Tone Selection */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Skin Tone</h3>
                    <div className="flex justify-center py-4">
                      <div className="grid grid-cols-7 gap-2">
                        {skinToneOptions.map((option) => (
                          <div key={option.value} className="flex flex-col items-center gap-2">
                            <button
                              type="button"
                              className={`h-10 w-10 rounded-full border-2 ${
                                selectedSkinTone === option.value 
                                  ? 'border-brand-pink ring-2 ring-brand-pink ring-opacity-50' 
                                  : 'border-gray-200'
                              }`}
                              style={{ backgroundColor: option.color }}
                              onClick={() => form.setValue('skinTone', option.value)}
                              aria-label={`Select ${option.label} skin tone`}
                            />
                            <span className="text-xs">{option.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Body Type Selection */}
                  <FormField
                    control={form.control}
                    name="bodyType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg">Body Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 md:grid-cols-5 gap-4"
                          >
                            {bodyTypeOptions.map((option) => (
                              <div key={option.value} className="flex flex-col items-center">
                                <Label
                                  htmlFor={`body-${option.value}`}
                                  className={`flex flex-col items-center gap-2 py-3 px-4 border rounded-md cursor-pointer transition-colors ${
                                    selectedBodyType === option.value 
                                      ? 'border-brand-pink bg-brand-pink/5' 
                                      : 'border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <div className="h-16 w-16 flex items-center justify-center">
                                    <img 
                                      src={`/placeholder.svg`} 
                                      alt={option.label}
                                      className="opacity-70"
                                    />
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <RadioGroupItem 
                                      value={option.value} 
                                      id={`body-${option.value}`}
                                      className="sr-only"
                                    />
                                    <span className="font-medium text-sm">{option.label}</span>
                                  </div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TabsContent>
                
                <TabsContent value="style" className="space-y-6">
                  {/* Style Preferences */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Style Preferences</h3>
                    <p className="text-sm text-gray-500">Select all styles you like (at least one)</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {stylePreferenceOptions.map((style) => (
                        <div key={style.value} className="flex items-start space-x-2">
                          <Checkbox
                            id={`style-${style.value}`}
                            checked={selectedStyles?.includes(style.value)}
                            onCheckedChange={(checked) => {
                              const currentStyles = selectedStyles || [];
                              if (checked) {
                                form.setValue('stylePreferences', [...currentStyles, style.value]);
                              } else {
                                form.setValue(
                                  'stylePreferences',
                                  currentStyles.filter(s => s !== style.value)
                                );
                              }
                            }}
                          />
                          <Label
                            htmlFor={`style-${style.value}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {style.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="preview" className="space-y-6">
                  <div className="flex flex-col items-center justify-center py-6">
                    {/* Bitmoji Preview */}
                    <div 
                      className="w-48 h-48 rounded-full border-4 border-brand-pink"
                      style={{ 
                        backgroundColor: skinToneOptions.find(o => o.value === selectedSkinTone)?.color 
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <palette size={48} className="text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h3 className="font-medium">Your Style Avatar</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {bodyTypeOptions.find(o => o.value === selectedBodyType)?.label} body type
                        with {selectedStyles.length > 0 ? selectedStyles.join(', ') : 'no'} style preferences
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <DrawerFooter>
                <Button type="submit" className="bg-brand-pink hover:bg-brand-pink/90 text-black">
                  Save Profile
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BitmojiCreator;
