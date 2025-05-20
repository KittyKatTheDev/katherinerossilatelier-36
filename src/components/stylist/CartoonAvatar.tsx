
import React from 'react';
import { UserProfile, skinToneOptions } from '@/types/UserProfile';
import Body from './avatar/Body';
import Head from './avatar/Head';
import Hair from './avatar/Hair';
import Face from './avatar/Face';
import Accessories from './avatar/Accessories';
import Outfit from './avatar/Outfit';

interface CartoonAvatarProps {
  profile: UserProfile;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CartoonAvatar: React.FC<CartoonAvatarProps> = ({ 
  profile, 
  size = 'md',
  className = '' 
}) => {
  const { skinTone, bodyType, avatarConfig } = profile;
  
  // Get the skin tone color from options array
  const skinToneColor = skinToneOptions.find(option => option.value === skinTone)?.color || '#E8B88A';
  
  // Determine avatar dimensions based on size
  const dimensions = {
    sm: { width: '80px', height: '80px', headSize: '30px' },
    md: { width: '150px', height: '150px', headSize: '55px' },
    lg: { width: '250px', height: '250px', headSize: '95px' }
  };
  
  const { width, height, headSize } = dimensions[size];
  
  // Get hair color from avatar config
  const hairColor = avatarConfig?.hairColor || '#8B4513';
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Body */}
      <Body 
        bodyType={bodyType} 
        skinToneColor={skinToneColor} 
        headSize={headSize} 
      />
      
      {/* Custom outfit or default outfit based on avatar type */}
      <Outfit 
        avatarType={avatarConfig?.avatarType || 'casual'} 
        outfit={avatarConfig?.outfit} 
        headSize={headSize} 
      />
      
      {/* Head */}
      <div 
        className="absolute rounded-full mx-auto left-0 right-0" 
        style={{ 
          width: headSize, 
          height: headSize, 
          backgroundColor: skinToneColor || '#E8B88A',
          top: `${parseInt(headSize) * 0.1}px`,
          left: `${(parseInt(width) - parseInt(headSize)) / 2}px`
        }}
      >
        {/* Face features (eyes, mouth, facial features) */}
        <Face 
          profile={profile} 
          headSize={headSize} 
          hairColor={hairColor}
        />
        
        {/* Hair */}
        <Hair 
          hairStyle={avatarConfig?.hairStyle} 
          hairColor={hairColor} 
          headSize={headSize} 
        />
        
        {/* Accessories */}
        <Accessories 
          accessories={avatarConfig?.accessories || []} 
          headSize={headSize} 
        />
      </div>
    </div>
  );
};

export default CartoonAvatar;
