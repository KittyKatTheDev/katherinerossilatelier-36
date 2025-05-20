
import React from 'react';
import { AvatarType } from '@/types/UserProfile';
import { Crown, Glasses, Shirt, Star, Diamond, Smile } from 'lucide-react';

interface OutfitProps {
  avatarType: AvatarType;
  outfit?: string;
  headSize: string;
}

const Outfit: React.FC<OutfitProps> = ({ avatarType, outfit, headSize }) => {
  // Render custom outfit based on config
  const renderCustomOutfit = () => {
    if (!outfit) return null;
    
    if (outfit === 'superhero') {
      return (
        <div className="absolute" style={{ 
          bottom: `-${parseInt(headSize) * 1.8}px`,
          left: 0,
          width: `${parseInt(headSize)}px`,
        }}>
          <div style={{ 
            backgroundColor: '#ff0000',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.7}px`,
            borderTopLeftRadius: `${parseInt(headSize) * 0.2}px`,
            borderTopRightRadius: `${parseInt(headSize) * 0.2}px`,
          }} />
          <div className="flex justify-center items-center" style={{ 
            backgroundColor: '#ff0000',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.5}px`,
            position: 'relative',
          }}>
            <div style={{ 
              backgroundColor: '#ffff00',
              width: `${parseInt(headSize) * 0.3}px`,
              height: `${parseInt(headSize) * 0.3}px`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }} />
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  // If we have a custom outfit, render it instead of default
  if (outfit) {
    return renderCustomOutfit();
  }
  
  // Render outfit based on avatar type
  switch(avatarType) {
    case 'bitmoji':
      return <Smile className="absolute" style={{
        width: `${parseInt(headSize) * 0.8}px`,
        height: `${parseInt(headSize) * 0.8}px`,
        bottom: `-${parseInt(headSize) * 1.5}px`,
        left: `${parseInt(headSize) * 0.1}px`,
        color: '#3498db'
      }} />;
    case 'princess':
      return <Crown className="absolute bottom-2" style={{
        width: `${parseInt(headSize) * 0.6}px`,
        height: `${parseInt(headSize) * 0.6}px`,
        top: `-${parseInt(headSize) * 0.45}px`,
        left: `${parseInt(headSize) * 0.2}px`
      }} />;
    case 'formal':
      return <Diamond className="absolute" style={{
        width: `${parseInt(headSize) * 0.4}px`,
        height: `${parseInt(headSize) * 0.4}px`,
        bottom: `-${parseInt(headSize) * 1.2}px`,
        left: `${parseInt(headSize) * 0.3}px`
      }} />;
    case 'sporty':
      return <Star className="absolute" style={{
        width: `${parseInt(headSize) * 0.4}px`,
        height: `${parseInt(headSize) * 0.4}px`,
        bottom: `-${parseInt(headSize) * 1.2}px`,
        left: `${parseInt(headSize) * 0.3}px`
      }} />;
    case 'casual':
    default:
      return <Shirt className="absolute" style={{
        width: `${parseInt(headSize) * 0.7}px`,
        height: `${parseInt(headSize) * 0.7}px`,
        bottom: `-${parseInt(headSize) * 1.4}px`,
        left: `${parseInt(headSize) * 0.15}px`
      }} />;
  }
};

export default Outfit;
