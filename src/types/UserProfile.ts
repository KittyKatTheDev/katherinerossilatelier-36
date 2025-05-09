export interface UserProfile {
  id?: string;
  name?: string;
  skinTone: SkinTone;
  bodyType: BodyType;
  stylePreferences: StylePreference[];
  avatarConfig?: {
    hairColor?: string;
    hairStyle?: HairStyle;
    facialFeatures?: FacialFeature;
    outfit?: string;
    avatarType?: AvatarType;
  };
}

export type AvatarType = 'princess' | 'casual' | 'formal' | 'sporty';

export type HairStyle = 
  | 'short' 
  | 'medium' 
  | 'long'
  | 'curly'
  | 'straight'
  | 'wavy'
  | 'bob'
  | 'pixie'
  | 'afro'
  | 'braids'
  | 'bun'
  | 'ponytail';

export type FacialFeature =
  | 'neutral'
  | 'glasses'
  | 'sunglasses'
  | 'beard'
  | 'mustache'
  | 'freckles';

export type SkinTone = 
  | 'porcelain' 
  | 'fair' 
  | 'light' 
  | 'light-medium'
  | 'medium' 
  | 'medium-tan'
  | 'tan' 
  | 'olive' 
  | 'warm-beige'
  | 'cool-beige'
  | 'honey'
  | 'caramel'
  | 'golden'
  | 'amber'
  | 'deep'
  | 'deep-neutral'
  | 'deep-cool'
  | 'rich'
  | 'dark'
  | 'very-dark'
  | 'ebony';

export type BodyType = 
  | 'petite' 
  | 'athletic' 
  | 'curvy' 
  | 'tall' 
  | 'plus-size'
  | 'rectangle'
  | 'hourglass'
  | 'pear'
  | 'apple'
  | 'inverted-triangle'
  | 'muscular'
  | 'slim'
  | 'full-figured'
  | 'lean';

export type StylePreference = 
  | 'casual' 
  | 'formal' 
  | 'bohemian' 
  | 'minimalist' 
  | 'vintage' 
  | 'streetwear' 
  | 'preppy' 
  | 'athleisure'
  | 'romantic'
  | 'edgy'
  | 'classic'
  | 'grunge'
  | 'artsy'
  | 'cottagecore'
  | 'coastal'
  | 'glamorous'
  | 'gothic'
  | 'punk'
  | 'retro'
  | 'sporty'
  | 'western'
  | 'business-casual'
  | 'eclectic'
  | 'avant-garde';

export const skinToneOptions: Array<{value: SkinTone, label: string, color: string}> = [
  { value: 'porcelain', label: 'Porcelain', color: '#F7EDE2' },
  { value: 'fair', label: 'Fair', color: '#FFE8D0' },
  { value: 'light', label: 'Light', color: '#FFD3AA' },
  { value: 'light-medium', label: 'Light Medium', color: '#F5D3AE' },
  { value: 'medium', label: 'Medium', color: '#E8B88A' },
  { value: 'medium-tan', label: 'Medium Tan', color: '#D7A57C' },
  { value: 'olive', label: 'Olive', color: '#C99D71' },
  { value: 'tan', label: 'Tan', color: '#B67B50' },
  { value: 'warm-beige', label: 'Warm Beige', color: '#BF9169' },
  { value: 'cool-beige', label: 'Cool Beige', color: '#AC8B6E' },
  { value: 'honey', label: 'Honey', color: '#A47F5A' },
  { value: 'caramel', label: 'Caramel', color: '#9C6F44' },
  { value: 'golden', label: 'Golden', color: '#9E6A38' },
  { value: 'amber', label: 'Amber', color: '#966640' },
  { value: 'deep', label: 'Deep', color: '#8B5A2B' },
  { value: 'deep-neutral', label: 'Deep Neutral', color: '#7D5038' },
  { value: 'deep-cool', label: 'Deep Cool', color: '#6F4E37' },
  { value: 'rich', label: 'Rich', color: '#654321' },
  { value: 'dark', label: 'Dark', color: '#5D4037' },
  { value: 'very-dark', label: 'Very Dark', color: '#4E342E' },
  { value: 'ebony', label: 'Ebony', color: '#3E2723' }
];

export const bodyTypeOptions: Array<{value: BodyType, label: string}> = [
  { value: 'petite', label: 'Petite' },
  { value: 'athletic', label: 'Athletic' },
  { value: 'curvy', label: 'Curvy' },
  { value: 'tall', label: 'Tall' },
  { value: 'plus-size', label: 'Plus-size' },
  { value: 'rectangle', label: 'Rectangle' },
  { value: 'hourglass', label: 'Hourglass' },
  { value: 'pear', label: 'Pear' },
  { value: 'apple', label: 'Apple' },
  { value: 'inverted-triangle', label: 'Inverted Triangle' },
  { value: 'muscular', label: 'Muscular' },
  { value: 'slim', label: 'Slim' },
  { value: 'full-figured', label: 'Full-figured' },
  { value: 'lean', label: 'Lean' }
];

export const stylePreferenceOptions: Array<{value: StylePreference, label: string}> = [
  { value: 'casual', label: 'Casual' },
  { value: 'formal', label: 'Formal' },
  { value: 'bohemian', label: 'Bohemian' },
  { value: 'minimalist', label: 'Minimalist' },
  { value: 'vintage', label: 'Vintage' },
  { value: 'streetwear', label: 'Streetwear' },
  { value: 'preppy', label: 'Preppy' },
  { value: 'athleisure', label: 'Athleisure' },
  { value: 'romantic', label: 'Romantic' },
  { value: 'edgy', label: 'Edgy' },
  { value: 'classic', label: 'Classic' },
  { value: 'grunge', label: 'Grunge' },
  { value: 'artsy', label: 'Artsy' },
  { value: 'cottagecore', label: 'Cottagecore' },
  { value: 'coastal', label: 'Coastal' },
  { value: 'glamorous', label: 'Glamorous' },
  { value: 'gothic', label: 'Gothic' },
  { value: 'punk', label: 'Punk' },
  { value: 'retro', label: 'Retro' },
  { value: 'sporty', label: 'Sporty' },
  { value: 'western', label: 'Western' },
  { value: 'business-casual', label: 'Business Casual' },
  { value: 'eclectic', label: 'Eclectic' },
  { value: 'avant-garde', label: 'Avant-garde' }
];

export const avatarTypeOptions: Array<{value: AvatarType, label: string, icon: string}> = [
  { value: 'princess', label: 'Princess', icon: 'crown' },
  { value: 'casual', label: 'Casual', icon: 'shirt' },
  { value: 'formal', label: 'Formal', icon: 'diamond' },
  { value: 'sporty', label: 'Sporty', icon: 'star' }
];

export const hairStyleOptions: Array<{value: HairStyle, label: string}> = [
  { value: 'short', label: 'Short' },
  { value: 'medium', label: 'Medium' },
  { value: 'long', label: 'Long' },
  { value: 'curly', label: 'Curly' },
  { value: 'straight', label: 'Straight' },
  { value: 'wavy', label: 'Wavy' },
  { value: 'bob', label: 'Bob' },
  { value: 'pixie', label: 'Pixie' },
  { value: 'afro', label: 'Afro' },
  { value: 'braids', label: 'Braids' },
  { value: 'bun', label: 'Bun' },
  { value: 'ponytail', label: 'Ponytail' }
];

export const facialFeatureOptions: Array<{value: FacialFeature, label: string}> = [
  { value: 'neutral', label: 'None' },
  { value: 'glasses', label: 'Glasses' },
  { value: 'sunglasses', label: 'Sunglasses' },
  { value: 'beard', label: 'Beard' },
  { value: 'mustache', label: 'Mustache' },
  { value: 'freckles', label: 'Freckles' }
];

export const hairColorOptions: Array<{value: string, label: string, color: string}> = [
  { value: '#000000', label: 'Black', color: '#000000' },
  { value: '#4E3B31', label: 'Dark Brown', color: '#4E3B31' },
  { value: '#8B4513', label: 'Brown', color: '#8B4513' },
  { value: '#D2B48C', label: 'Light Brown', color: '#D2B48C' },
  { value: '#FFD700', label: 'Blonde', color: '#FFD700' },
  { value: '#B87333', label: 'Auburn', color: '#B87333' },
  { value: '#FF0000', label: 'Red', color: '#FF0000' },
  { value: '#808080', label: 'Gray', color: '#808080' },
  { value: '#FFFFFF', label: 'White', color: '#FFFFFF' },
  { value: '#FFC0CB', label: 'Pink', color: '#FFC0CB' },
  { value: '#800080', label: 'Purple', color: '#800080' },
  { value: '#0000FF', label: 'Blue', color: '#0000FF' },
  { value: '#00FF00', label: 'Green', color: '#00FF00' }
];

export const outfitOptions: Array<{value: string, label: string, category: string}> = [
  { value: 'tshirt-jeans', label: 'T-Shirt & Jeans', category: 'casual' },
  { value: 'suit', label: 'Business Suit', category: 'formal' },
  { value: 'dress', label: 'Elegant Dress', category: 'formal' },
  { value: 'hoodie-pants', label: 'Hoodie & Pants', category: 'casual' },
  { value: 'athletic-wear', label: 'Athletic Wear', category: 'sporty' },
  { value: 'summer-dress', label: 'Summer Dress', category: 'casual' },
  { value: 'winter-coat', label: 'Winter Coat', category: 'casual' },
  { value: 'gown', label: 'Evening Gown', category: 'formal' },
  { value: 'swimwear', label: 'Swimwear', category: 'sporty' },
  { value: 'uniform', label: 'Uniform', category: 'formal' }
];
