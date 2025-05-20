
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
  StylePreference,
  hairStyleOptions,
  hairColorOptions,
  facialFeatureOptions,
  eyeColorOptions,
  facialExpressionOptions,
  accessoryOptions,
  HairStyle,
  FacialFeature,
  EyeColor,
  FacialExpression,
  Accessory
} from '@/types/UserProfile';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import CartoonAvatar from './CartoonAvatar';

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
    facialFeatures: ['neutral'],
    eyeColor: 'brown',
    expression: 'smile',
    accessories: [],
    avatarType: 'bitmoji',
    outfit: 'tshirt-jeans'
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
  const selectedHairStyle = form.watch('avatarConfig.hairStyle') || 'short';
  const selectedHairColor = form.watch('avatarConfig.hairColor') || '#8B4513';
  const selectedFacialFeatures = form.watch('avatarConfig.facialFeatures') || [];
  const selectedEyeColor = form.watch('avatarConfig.eyeColor') || 'brown';
  const selectedExpression = form.watch('avatarConfig.expression') || 'smile';
  const selectedAccessories = form.watch('avatarConfig.accessories') || [];

  // Get current form values for preview
  const currentProfile = form.watch();

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="font-serif text-2xl">Create Your Bitmoji Avatar</DrawerTitle>
          <DrawerDescription>
            Customize your virtual style avatar with your physical attributes and style preferences
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-10">
              <Tabs value={currentTab} onValueChange={setCurrentTab}>
                <TabsList className="grid grid-cols-5 mb-4">
                  <TabsTrigger value="basics">Body</TabsTrigger>
                  <TabsTrigger value="hair">Hair</TabsTrigger>
                  <TabsTrigger value="face">Face</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basics" className="space-y-6">
                  {/* Skin Tone Selection */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Skin Tone</h3>
                    <div className="flex justify-center py-4">
                      <ScrollArea className="h-32 w-full rounded-md border p-4">
                        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
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
                                data-skin-tone={option.value}
                                onClick={() => form.setValue('skinTone', option.value)}
                                aria-label={`Select ${option.label} skin tone`}
                              />
                              <span className="text-xs text-center">{option.label}</span>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
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
                          <Select 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a body type" />
                            </SelectTrigger>
                            <SelectContent>
                              {bodyTypeOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TabsContent>
                
                <TabsContent value="hair" className="space-y-6">
                  {/* Hair Style Selection */}
                  <FormField
                    control={form.control}
                    name="avatarConfig.hairStyle"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg">Hair Style</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
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
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  {/* Hair Color Selection */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">Hair Color</h3>
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
                            onClick={() => form.setValue('avatarConfig.hairColor', option.value)}
                            aria-label={`Select ${option.label} hair color`}
                          />
                          <span className="text-xs mt-1">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="face" className="space-y-6">
                  {/* Eye Color Selection */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">Eye Color</h3>
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
                            onClick={() => form.setValue('avatarConfig.eyeColor', option.value)}
                            aria-label={`Select ${option.label} eye color`}
                          />
                          <span className="text-xs mt-1">{option.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Expression Selection */}
                  <FormField
                    control={form.control}
                    name="avatarConfig.expression"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg">Expression</FormLabel>
                        <FormControl>
                          <RadioGroup 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                          >
                            {facialExpressionOptions.map((option) => (
                              <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`expression-${option.value}`} />
                                <Label htmlFor={`expression-${option.value}`}>{option.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  {/* Facial Features */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">Facial Features</h3>
                    <ScrollArea className="h-40">
                      <div className="grid grid-cols-2 gap-2">
                        {facialFeatureOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`feature-creator-${option.value}`} 
                              checked={selectedFacialFeatures.includes(option.value)}
                              onCheckedChange={(checked) => {
                                const current = form.getValues('avatarConfig.facialFeatures') || [];
                                if (checked) {
                                  form.setValue('avatarConfig.facialFeatures', [...current, option.value]);
                                } else {
                                  form.setValue(
                                    'avatarConfig.facialFeatures', 
                                    current.filter(f => f !== option.value)
                                  );
                                }
                              }}
                            />
                            <Label htmlFor={`feature-creator-${option.value}`}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                  
                  {/* Accessories */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-lg">Accessories</h3>
                    <ScrollArea className="h-40">
                      <div className="grid grid-cols-2 gap-2">
                        {accessoryOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`accessory-creator-${option.value}`} 
                              checked={selectedAccessories.includes(option.value)}
                              onCheckedChange={(checked) => {
                                const current = form.getValues('avatarConfig.accessories') || [];
                                if (checked) {
                                  form.setValue('avatarConfig.accessories', [...current, option.value]);
                                } else {
                                  form.setValue(
                                    'avatarConfig.accessories', 
                                    current.filter(a => a !== option.value)
                                  );
                                }
                              }}
                            />
                            <Label htmlFor={`accessory-creator-${option.value}`}>{option.label}</Label>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                
                <TabsContent value="style" className="space-y-6">
                  {/* Style Preferences */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Style Preferences</h3>
                    <p className="text-sm text-gray-500">Select all styles you like (at least one)</p>
                    
                    <ScrollArea className="h-64 w-full rounded-md border p-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                    </ScrollArea>
                  </div>
                  
                  {/* Avatar Type Selection */}
                  <FormField
                    control={form.control}
                    name="avatarConfig.avatarType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg">Avatar Type</FormLabel>
                        <FormControl>
                          <RadioGroup 
                            onValueChange={field.onChange}
                            defaultValue={field.value || 'bitmoji'}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                          >
                            {['bitmoji', 'princess', 'casual', 'formal', 'sporty'].map((type) => (
                              <div 
                                key={type}
                                className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer ${
                                  field.value === type ? 'border-brand-pink bg-pink-50' : ''
                                }`}
                                onClick={() => form.setValue('avatarConfig.avatarType', type as any)}
                              >
                                <RadioGroupItem value={type} id={`avatar-type-${type}`} className="sr-only" />
                                <Label htmlFor={`avatar-type-${type}`} className="cursor-pointer">
                                  {type.charAt(0).toUpperCase() + type.slice(1)}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </TabsContent>
                
                <TabsContent value="preview" className="space-y-6">
                  <div className="flex flex-col items-center justify-center py-6">
                    {/* Bitmoji Preview */}
                    <div className="bg-gray-100 p-6 rounded-xl w-full flex justify-center">
                      <CartoonAvatar profile={currentProfile} size="lg" />
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h3 className="font-medium">Your Bitmoji Avatar</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {bodyTypeOptions.find(o => o.value === selectedBodyType)?.label} body type
                      </p>
                      <div className="mt-2 flex flex-wrap justify-center gap-1">
                        {selectedStyles.map((style) => (
                          <span key={style} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            {stylePreferenceOptions.find(o => o.value === style)?.label}
                          </span>
                        ))}
                      </div>
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
