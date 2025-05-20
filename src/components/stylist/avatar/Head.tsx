
import React from 'react';
import { UserProfile, skinToneOptions } from '@/types/UserProfile';

interface HeadProps {
  profile: UserProfile;
  headSize: string;
  skinToneColor: string;
}

const Head: React.FC<HeadProps> = ({ profile, headSize, skinToneColor }) => {
  return (
    <div 
      className="absolute rounded-full mx-auto" 
      style={{ 
        width: headSize, 
        height: headSize, 
        backgroundColor: skinToneColor || '#E8B88A',
        top: `${parseInt(headSize) * 0.1}px`,
        left: `${(parseInt(headSize) - parseInt(headSize)) / 2}px`,
        boxShadow: 'inset 0px -10px 15px -5px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}
    />
  );
};

export default Head;
