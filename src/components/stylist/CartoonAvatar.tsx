
import React from 'react';
import { UserProfile } from '@/types/UserProfile';
import { Crown, Glasses, Shirt, Star, Diamond, User } from 'lucide-react';

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
  
  // Get the skin tone color from profile
  const skinToneColor = skinTone 
    ? document.querySelector(`[style*="${skinTone}"]`)?.getAttribute('style')?.match(/background-color: ([^;]+)/)?.[1] 
    : '#E8B88A';
  
  // Determine avatar dimensions based on size
  const dimensions = {
    sm: { width: '80px', height: '80px', headSize: '30px' },
    md: { width: '150px', height: '150px', headSize: '55px' },
    lg: { width: '250px', height: '250px', headSize: '95px' }
  };
  
  const { width, height, headSize } = dimensions[size];
  
  // Get hair color from avatar config
  const hairColor = avatarConfig?.hairColor || '#8B4513';
  
  // Render facial feature based on config
  const renderFacialFeature = () => {
    if (!avatarConfig?.facialFeatures) return null;
    
    switch(avatarConfig.facialFeatures) {
      case 'glasses':
        return <Glasses className="absolute" style={{ 
          width: `${parseInt(headSize) * 0.6}px`, 
          height: `${parseInt(headSize) * 0.25}px`,
          top: `${parseInt(headSize) * 0.30}px`,
          left: `${parseInt(headSize) * 0.20}px`
        }} />;
      case 'sunglasses':
        return <Glasses className="absolute" fill="black" style={{ 
          width: `${parseInt(headSize) * 0.6}px`, 
          height: `${parseInt(headSize) * 0.25}px`,
          top: `${parseInt(headSize) * 0.30}px`,
          left: `${parseInt(headSize) * 0.20}px`
        }} />;
      case 'freckles':
        return (
          <div className="absolute flex gap-1" style={{ 
            top: `${parseInt(headSize) * 0.45}px`,
            left: `${parseInt(headSize) * 0.30}px`
          }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-full bg-amber-800" style={{
                width: '2px',
                height: '2px'
              }}/>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  
  // Render hair style based on config
  const renderHairStyle = () => {
    if (!avatarConfig?.hairStyle) return null;
    
    switch(avatarConfig.hairStyle) {
      case 'short':
        return (
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1}px`,
              height: `${parseInt(headSize) * 0.4}px`,
              top: `-${parseInt(headSize) * 0.13}px`,
              left: '0'
            }}
          />
        );
      case 'medium':
        return (
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1.1}px`,
              height: `${parseInt(headSize) * 0.6}px`,
              top: `-${parseInt(headSize) * 0.2}px`,
              left: `-${parseInt(headSize) * 0.05}px`
            }}
          />
        );
      case 'long':
        return (
          <>
            <div 
              className="absolute rounded-t-full" 
              style={{ 
                backgroundColor: hairColor,
                width: `${parseInt(headSize) * 1.1}px`,
                height: `${parseInt(headSize) * 0.55}px`,
                top: `-${parseInt(headSize) * 0.2}px`,
                left: `-${parseInt(headSize) * 0.05}px`
              }}
            />
            <div 
              className="absolute rounded-b-md" 
              style={{ 
                backgroundColor: hairColor,
                width: `${parseInt(headSize) * 0.9}px`,
                height: `${parseInt(headSize) * 0.8}px`,
                top: `${parseInt(headSize) * 0.35}px`,
                left: `${parseInt(headSize) * 0.05}px`
              }}
            />
          </>
        );
      case 'curly':
        return (
          <div className="absolute" style={{top: `-${parseInt(headSize) * 0.2}px`, left: `-${parseInt(headSize) * 0.2}px`}}>
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full" 
                style={{ 
                  backgroundColor: hairColor,
                  width: `${parseInt(headSize) * 0.3}px`,
                  height: `${parseInt(headSize) * 0.3}px`,
                  top: `${Math.sin(i) * parseInt(headSize) * 0.2}px`,
                  left: `${(i * parseInt(headSize) * 0.15) % (parseInt(headSize) * 1.4)}px`
                }}
              />
            ))}
          </div>
        );
      case 'bun':
        return (
          <div 
            className="absolute rounded-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.5}px`,
              height: `${parseInt(headSize) * 0.5}px`,
              top: `-${parseInt(headSize) * 0.3}px`,
              left: `${parseInt(headSize) * 0.25}px`
            }}
          />
        );
      default:
        return (
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1}px`,
              height: `${parseInt(headSize) * 0.4}px`,
              top: `-${parseInt(headSize) * 0.13}px`,
              left: '0'
            }}
          />
        );
    }
  };
  
  // Render outfit based on avatar type and outfit config
  const renderOutfit = () => {
    const avatarType = avatarConfig?.avatarType || 'casual';
    
    switch(avatarType) {
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
  
  // Adjust body shape based on body type
  const getBodyShape = () => {
    switch(bodyType) {
      case 'athletic':
      case 'muscular':
        return {
          width: `${parseInt(headSize) * 0.9}px`,
          height: `${parseInt(headSize) * 1.8}px`,
          borderRadius: `${parseInt(headSize) * 0.2}px`,
        };
      case 'curvy':
      case 'hourglass':
        return {
          width: `${parseInt(headSize) * 0.9}px`,
          height: `${parseInt(headSize) * 1.8}px`,
          borderRadius: `${parseInt(headSize) * 0.7}px ${parseInt(headSize) * 0.7}px ${parseInt(headSize) * 0.2}px ${parseInt(headSize) * 0.2}px`,
        };
      case 'plus-size':
      case 'full-figured':
        return {
          width: `${parseInt(headSize) * 1.1}px`,
          height: `${parseInt(headSize) * 1.7}px`,
          borderRadius: `${parseInt(headSize) * 0.4}px`,
        };
      case 'petite':
      case 'slim':
      case 'lean':
        return {
          width: `${parseInt(headSize) * 0.7}px`,
          height: `${parseInt(headSize) * 1.7}px`,
          borderRadius: `${parseInt(headSize) * 0.15}px`,
        };
      default:
        return {
          width: `${parseInt(headSize) * 0.8}px`,
          height: `${parseInt(headSize) * 1.8}px`,
          borderRadius: `${parseInt(headSize) * 0.25}px`,
        };
    }
  };
  
  const bodyShape = getBodyShape();
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Body */}
      <div 
        className="absolute mx-auto left-0 right-0" 
        style={{ 
          backgroundColor: skinToneColor || '#E8B88A',
          top: `${parseInt(headSize) * 1.1}px`,
          ...bodyShape
        }}
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
        {/* Eyes */}
        <div className="absolute flex gap-1" style={{ 
          top: `${parseInt(headSize) * 0.35}px`,
          left: `${parseInt(headSize) * 0.25}px`
        }}>
          <div className="rounded-full bg-black" style={{width: '6px', height: '6px'}}/>
          <div className="rounded-full bg-black ml-3" style={{width: '6px', height: '6px'}}/>
        </div>
        
        {/* Mouth */}
        <div className="absolute rounded-full bg-red-400" style={{ 
          width: `${parseInt(headSize) * 0.25}px`,
          height: '3px',
          top: `${parseInt(headSize) * 0.6}px`,
          left: `${parseInt(headSize) * 0.35}px`
        }}/>
        
        {/* Hair */}
        {renderHairStyle()}
        
        {/* Facial Features */}
        {renderFacialFeature()}
      </div>
      
      {/* Outfit */}
      {renderOutfit()}
    </div>
  );
};

export default CartoonAvatar;
