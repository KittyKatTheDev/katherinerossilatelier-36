
import React from 'react';
import { UserProfile, skinToneOptions } from '@/types/UserProfile';
import { Crown, Glasses, Shirt, Star, Diamond, User, Smile } from 'lucide-react';

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
  
  // Get the skin tone color from options array instead of DOM
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
  
  // Get eye color from avatar config or default to brown
  const eyeColor = avatarConfig?.eyeColor || 'brown';
  const eyeColorHex = {
    'brown': '#4E3620',
    'blue': '#1E90FF',
    'green': '#2E8B57',
    'hazel': '#A67B5B',
    'amber': '#FFBF00',
    'gray': '#808080'
  }[eyeColor] || '#4E3620';
  
  // Get expression from avatar config or default to smile
  const expression = avatarConfig?.expression || 'smile';
  
  // Get facial features from avatar config
  const facialFeatures = avatarConfig?.facialFeatures || ['neutral'];
  
  // Render facial features based on config
  const renderFacialFeature = () => {
    if (!avatarConfig?.facialFeatures || avatarConfig.facialFeatures.length === 0) {
      return null;
    }
    
    return (
      <>
        {facialFeatures.includes('glasses') && 
          <Glasses className="absolute" style={{ 
            width: `${parseInt(headSize) * 0.6}px`, 
            height: `${parseInt(headSize) * 0.25}px`,
            top: `${parseInt(headSize) * 0.30}px`,
            left: `${parseInt(headSize) * 0.20}px`
          }} />
        }
        
        {facialFeatures.includes('sunglasses') && 
          <Glasses className="absolute" fill="black" style={{ 
            width: `${parseInt(headSize) * 0.6}px`, 
            height: `${parseInt(headSize) * 0.25}px`,
            top: `${parseInt(headSize) * 0.30}px`,
            left: `${parseInt(headSize) * 0.20}px`
          }} />
        }
        
        {facialFeatures.includes('freckles') && 
          <div className="absolute flex flex-wrap gap-1" style={{ 
            top: `${parseInt(headSize) * 0.45}px`,
            left: `${parseInt(headSize) * 0.30}px`,
            width: `${parseInt(headSize) * 0.4}px`,
          }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-full bg-amber-800" style={{
                width: '2px',
                height: '2px'
              }}/>
            ))}
          </div>
        }
        
        {facialFeatures.includes('beard') && 
          <div className="absolute rounded-b-full" style={{
            backgroundColor: hairColor,
            width: `${parseInt(headSize) * 0.5}px`,
            height: `${parseInt(headSize) * 0.3}px`,
            bottom: `-${parseInt(headSize) * 0.15}px`,
            left: `${parseInt(headSize) * 0.25}px`
          }}/>
        }
        
        {facialFeatures.includes('mustache') && 
          <div className="absolute" style={{
            backgroundColor: hairColor,
            width: `${parseInt(headSize) * 0.3}px`,
            height: `${parseInt(headSize) * 0.05}px`,
            top: `${parseInt(headSize) * 0.55}px`,
            left: `${parseInt(headSize) * 0.35}px`,
            borderRadius: '40%'
          }}/>
        }
        
        {facialFeatures.includes('eyebrows-thick') && (
          <div className="absolute flex w-full justify-center gap-2" style={{ 
            top: `${parseInt(headSize) * 0.25}px`,
          }}>
            <div style={{
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.15}px`,
              height: `${parseInt(headSize) * 0.03}px`,
              borderRadius: '40%'
            }}/>
            <div style={{
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.15}px`,
              height: `${parseInt(headSize) * 0.03}px`,
              borderRadius: '40%'
            }}/>
          </div>
        )}
        
        {facialFeatures.includes('eyebrows-thin') && (
          <div className="absolute flex w-full justify-center gap-2" style={{ 
            top: `${parseInt(headSize) * 0.25}px`,
          }}>
            <div style={{
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.12}px`,
              height: `${parseInt(headSize) * 0.02}px`,
              borderRadius: '40%'
            }}/>
            <div style={{
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.12}px`,
              height: `${parseInt(headSize) * 0.02}px`,
              borderRadius: '40%'
            }}/>
          </div>
        )}
        
        {facialFeatures.includes('eyelashes') && (
          <div className="absolute flex w-full justify-center" style={{ 
            top: `${parseInt(headSize) * 0.33}px`,
            left: `${parseInt(headSize) * 0.15}px`,
          }}>
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  backgroundColor: 'black',
                  width: '2px',
                  height: '3px',
                  left: `${i * 3}px`,
                  transform: `rotate(${(i-1) * 30}deg)`,
                  transformOrigin: 'bottom'
                }}/>
              ))}
            </div>
            <div className="relative ml-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  backgroundColor: 'black',
                  width: '2px',
                  height: '3px',
                  left: `${i * 3}px`,
                  transform: `rotate(${(i-1) * 30}deg)`,
                  transformOrigin: 'bottom'
                }}/>
              ))}
            </div>
          </div>
        )}
      </>
    );
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
      case 'mohawk':
        return (
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.15}px`,
              height: `${parseInt(headSize) * 0.6}px`,
              top: `-${parseInt(headSize) * 0.4}px`,
              left: `${parseInt(headSize) * 0.425}px`,
              borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
              borderTopRightRadius: `${parseInt(headSize) * 0.1}px`
            }}
          />
        );
      case 'buzzcut':
        return (
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1}px`,
              height: `${parseInt(headSize) * 0.15}px`,
              top: `-${parseInt(headSize) * 0.05}px`,
              left: '0'
            }}
          />
        );
      case 'sidepart':
        return (
          <>
            <div 
              className="absolute" 
              style={{ 
                backgroundColor: hairColor,
                width: `${parseInt(headSize) * 0.7}px`,
                height: `${parseInt(headSize) * 0.4}px`,
                top: `-${parseInt(headSize) * 0.1}px`,
                left: `${parseInt(headSize) * 0.3}px`,
                borderTopRightRadius: `${parseInt(headSize) * 0.4}px`,
                borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`
              }}
            />
            <div 
              className="absolute" 
              style={{ 
                backgroundColor: hairColor,
                width: `${parseInt(headSize) * 0.3}px`,
                height: `${parseInt(headSize) * 0.5}px`,
                top: `-${parseInt(headSize) * 0.1}px`,
                left: `${parseInt(headSize) * 0.7}px`,
                borderTopRightRadius: `${parseInt(headSize) * 0.3}px`,
              }}
            />
          </>
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
  
  // Render accessories based on config
  const renderAccessories = () => {
    if (!avatarConfig?.accessories || avatarConfig.accessories.length === 0) {
      return null;
    }
    
    return (
      <>
        {avatarConfig.accessories.includes('hat') && (
          <div
            className="absolute rounded-t-full"
            style={{
              backgroundColor: '#e74c3c',
              width: `${parseInt(headSize) * 1.2}px`,
              height: `${parseInt(headSize) * 0.4}px`,
              top: `-${parseInt(headSize) * 0.35}px`,
              left: `-${parseInt(headSize) * 0.1}px`,
              zIndex: 10
            }}
          />
        )}
        
        {avatarConfig.accessories.includes('earrings') && (
          <>
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: 'gold',
                width: `${parseInt(headSize) * 0.08}px`,
                height: `${parseInt(headSize) * 0.08}px`,
                top: `${parseInt(headSize) * 0.5}px`,
                left: `-${parseInt(headSize) * 0.04}px`,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                backgroundColor: 'gold',
                width: `${parseInt(headSize) * 0.08}px`,
                height: `${parseInt(headSize) * 0.08}px`,
                top: `${parseInt(headSize) * 0.5}px`,
                right: `-${parseInt(headSize) * 0.04}px`,
              }}
            />
          </>
        )}
        
        {avatarConfig.accessories.includes('necklace') && (
          <div
            className="absolute"
            style={{
              backgroundColor: 'gold',
              width: `${parseInt(headSize) * 0.6}px`,
              height: `${parseInt(headSize) * 0.05}px`,
              borderRadius: '50%',
              top: `${parseInt(headSize) * 1.05}px`,
              left: `${parseInt(headSize) * 0.2}px`,
            }}
          />
        )}
      </>
    );
  };
  
  // Render mouth based on expression
  const renderMouth = () => {
    switch(expression) {
      case 'smile':
        return (
          <div className="absolute bg-red-400" style={{ 
            width: `${parseInt(headSize) * 0.3}px`,
            height: '3px',
            top: `${parseInt(headSize) * 0.6}px`,
            left: `${parseInt(headSize) * 0.35}px`,
            borderRadius: '0 0 100% 100%',
            transform: 'rotate(10deg)'
          }}/>
        );
      case 'laugh':
        return (
          <div className="absolute" style={{ 
            top: `${parseInt(headSize) * 0.6}px`,
            left: `${parseInt(headSize) * 0.35}px`,
          }}>
            <div className="bg-red-400" style={{ 
              width: `${parseInt(headSize) * 0.3}px`,
              height: `${parseInt(headSize) * 0.15}px`,
              borderRadius: '0 0 100% 100%',
            }}/>
            <div className="absolute bg-black" style={{ 
              width: `${parseInt(headSize) * 0.25}px`,
              height: `${parseInt(headSize) * 0.1}px`,
              top: '2px',
              left: '2px',
              borderRadius: '0 0 100% 100%',
            }}/>
          </div>
        );
      case 'wink':
        return (
          <div className="absolute bg-red-400" style={{ 
            width: `${parseInt(headSize) * 0.25}px`,
            height: '3px',
            top: `${parseInt(headSize) * 0.6}px`,
            left: `${parseInt(headSize) * 0.35}px`,
            borderRadius: '0 0 100% 100%',
            transform: 'rotate(15deg)'
          }}/>
        );
      case 'surprise':
        return (
          <div className="absolute bg-red-400 rounded-full" style={{ 
            width: `${parseInt(headSize) * 0.15}px`,
            height: `${parseInt(headSize) * 0.15}px`,
            top: `${parseInt(headSize) * 0.6}px`,
            left: `${parseInt(headSize) * 0.425}px`,
          }}/>
        );
      case 'sad':
        return (
          <div className="absolute bg-red-400" style={{ 
            width: `${parseInt(headSize) * 0.3}px`,
            height: '3px',
            top: `${parseInt(headSize) * 0.65}px`,
            left: `${parseInt(headSize) * 0.35}px`,
            borderRadius: '100% 100% 0 0',
            transform: 'rotate(-10deg)'
          }}/>
        );
      case 'angry':
        return (
          <div className="absolute bg-red-400" style={{ 
            width: `${parseInt(headSize) * 0.3}px`,
            height: '3px',
            top: `${parseInt(headSize) * 0.65}px`,
            left: `${parseInt(headSize) * 0.35}px`,
            borderRadius: '100% 100% 0 0',
          }}/>
        );
      default:
        return (
          <div className="absolute bg-red-400" style={{ 
            width: `${parseInt(headSize) * 0.25}px`,
            height: '3px',
            top: `${parseInt(headSize) * 0.6}px`,
            left: `${parseInt(headSize) * 0.35}px`,
          }}/>
        );
    }
  };
  
  // Render eyes based on expression
  const renderEyes = () => {
    switch(expression) {
      case 'wink':
        return (
          <div className="absolute flex gap-4" style={{ 
            top: `${parseInt(headSize) * 0.35}px`,
            left: `${parseInt(headSize) * 0.25}px`
          }}>
            <div className="rounded-full" style={{
              width: '6px', 
              height: '6px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black'
            }}/>
            <div className="w-6 h-1 bg-black" style={{
              height: '2px',
              width: '6px'
            }}/>
          </div>
        );
      case 'surprise':
        return (
          <div className="absolute flex gap-4" style={{ 
            top: `${parseInt(headSize) * 0.35}px`,
            left: `${parseInt(headSize) * 0.25}px`
          }}>
            <div className="rounded-full" style={{
              width: '8px', 
              height: '8px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black'
            }}/>
            <div className="rounded-full" style={{
              width: '8px', 
              height: '8px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black'
            }}/>
          </div>
        );
      case 'angry':
        return (
          <div className="absolute flex gap-4" style={{ 
            top: `${parseInt(headSize) * 0.35}px`,
            left: `${parseInt(headSize) * 0.25}px`
          }}>
            <div className="rounded-full" style={{
              width: '6px', 
              height: '6px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black',
              transform: 'rotate(15deg)'
            }}/>
            <div className="rounded-full" style={{
              width: '6px', 
              height: '6px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black',
              transform: 'rotate(-15deg)'
            }}/>
          </div>
        );
      default:
        return (
          <div className="absolute flex gap-4" style={{ 
            top: `${parseInt(headSize) * 0.35}px`,
            left: `${parseInt(headSize) * 0.25}px`
          }}>
            <div className="rounded-full" style={{
              width: '6px', 
              height: '6px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black'
            }}/>
            <div className="rounded-full" style={{
              width: '6px', 
              height: '6px', 
              backgroundColor: eyeColorHex,
              border: '1px solid black'
            }}/>
          </div>
        );
    }
  };
  
  // Render outfit based on avatar type and outfit config
  const renderOutfit = () => {
    const avatarType = avatarConfig?.avatarType || 'casual';
    
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
  
  // Custom outfit based on config
  const renderCustomOutfit = () => {
    if (!avatarConfig?.outfit) return null;
    
    if (avatarConfig.outfit === 'superhero') {
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
      
      {/* Custom outfit if present */}
      {renderCustomOutfit()}
      
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
        {renderEyes()}
        
        {/* Mouth */}
        {renderMouth()}
        
        {/* Hair */}
        {renderHairStyle()}
        
        {/* Facial Features */}
        {renderFacialFeature()}
        
        {/* Accessories */}
        {renderAccessories()}
      </div>
      
      {/* Outfit */}
      {renderOutfit()}
    </div>
  );
};

export default CartoonAvatar;
