
export interface UserProfile {
  id?: string;
  name?: string;
  skinTone: SkinTone;
  bodyType: BodyType;
  stylePreferences: StylePreference[];
  avatarConfig?: {
    hairColor?: string;
    hairStyle?: string;
    facialFeatures?: string;
    outfit?: string;
  };
}

export type SkinTone = 'fair' | 'light' | 'medium' | 'olive' | 'tan' | 'deep' | 'dark';

export type BodyType = 'petite' | 'athletic' | 'curvy' | 'tall' | 'plus-size';

export type StylePreference = 
  | 'casual' 
  | 'formal' 
  | 'bohemian' 
  | 'minimalist' 
  | 'vintage' 
  | 'streetwear' 
  | 'preppy' 
  | 'athleisure';

export const skinToneOptions: Array<{value: SkinTone, label: string, color: string}> = [
  { value: 'fair', label: 'Fair', color: '#FFE8D0' },
  { value: 'light', label: 'Light', color: '#FFD3AA' },
  { value: 'medium', label: 'Medium', color: '#E8B88A' },
  { value: 'olive', label: 'Olive', color: '#C99D71' },
  { value: 'tan', label: 'Tan', color: '#B67B50' },
  { value: 'deep', label: 'Deep', color: '#8B5A2B' },
  { value: 'dark', label: 'Dark', color: '#5D4037' }
];

export const bodyTypeOptions: Array<{value: BodyType, label: string}> = [
  { value: 'petite', label: 'Petite' },
  { value: 'athletic', label: 'Athletic' },
  { value: 'curvy', label: 'Curvy' },
  { value: 'tall', label: 'Tall' },
  { value: 'plus-size', label: 'Plus-size' }
];

export const stylePreferenceOptions: Array<{value: StylePreference, label: string}> = [
  { value: 'casual', label: 'Casual' },
  { value: 'formal', label: 'Formal' },
  { value: 'bohemian', label: 'Bohemian' },
  { value: 'minimalist', label: 'Minimalist' },
  { value: 'vintage', label: 'Vintage' },
  { value: 'streetwear', label: 'Streetwear' },
  { value: 'preppy', label: 'Preppy' },
  { value: 'athleisure', label: 'Athleisure' }
];
