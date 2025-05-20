
import React from 'react';
import { AvatarType } from '@/types/UserProfile';
import { Crown, Glasses, Shirt, Star, Diamond } from 'lucide-react';

interface OutfitProps {
  avatarType: AvatarType;
  outfit?: string;
  headSize: string;
}

const Outfit: React.FC<OutfitProps> = ({ avatarType, outfit, headSize }) => {
  // Render custom outfit based on config
  const renderCustomOutfit = () => {
    if (!outfit) return null;
    
    switch(outfit) {
      case 'superhero':
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
              boxShadow: 'inset 0px 5px 15px rgba(0,0,0,0.2)'
            }} />
            <div className="flex justify-center items-center" style={{ 
              backgroundColor: '#ff0000',
              width: `${parseInt(headSize)}px`,
              height: `${parseInt(headSize) * 0.5}px`,
              position: 'relative',
              boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
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
      case 'tshirt-jeans':
        return (
          <div className="absolute" style={{ 
            bottom: `-${parseInt(headSize) * 1.8}px`,
            left: 0,
            width: `${parseInt(headSize)}px`,
          }}>
            {/* T-shirt */}
            <div style={{ 
              backgroundColor: '#3498db',
              width: `${parseInt(headSize)}px`,
              height: `${parseInt(headSize) * 0.7}px`,
              borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
              borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
              boxShadow: 'inset 0px 10px 20px -10px rgba(0,0,0,0.3)',
              position: 'relative'
            }}>
              {/* Collar */}
              <div style={{
                backgroundColor: '#2980b9',
                height: `${parseInt(headSize) * 0.1}px`,
                width: `${parseInt(headSize) * 0.3}px`,
                borderBottomLeftRadius: `${parseInt(headSize) * 0.1}px`,
                borderBottomRightRadius: `${parseInt(headSize) * 0.1}px`,
                position: 'absolute',
                left: `${parseInt(headSize) * 0.35}px`,
                top: 0
              }} />
              {/* Sleeves */}
              <div style={{
                backgroundColor: '#2980b9',
                height: `${parseInt(headSize) * 0.15}px`,
                width: `${parseInt(headSize) * 0.2}px`,
                position: 'absolute',
                left: `-${parseInt(headSize) * 0.1}px`,
                top: `${parseInt(headSize) * 0.1}px`,
                borderRadius: '50%'
              }} />
              <div style={{
                backgroundColor: '#2980b9',
                height: `${parseInt(headSize) * 0.15}px`,
                width: `${parseInt(headSize) * 0.2}px`,
                position: 'absolute',
                right: `-${parseInt(headSize) * 0.1}px`,
                top: `${parseInt(headSize) * 0.1}px`,
                borderRadius: '50%'
              }} />
            </div>
            {/* Jeans */}
            <div style={{ 
              backgroundColor: '#2c3e50',
              width: `${parseInt(headSize)}px`,
              height: `${parseInt(headSize) * 0.8}px`,
              position: 'relative'
            }}>
              {/* Belt */}
              <div style={{
                backgroundColor: '#7f8c8d',
                height: `${parseInt(headSize) * 0.1}px`,
                width: `${parseInt(headSize) * 1}px`,
                top: 0,
                position: 'absolute'
              }} />
              {/* Pocket design */}
              <div style={{
                backgroundColor: '#34495e',
                height: `${parseInt(headSize) * 0.2}px`,
                width: `${parseInt(headSize) * 0.25}px`,
                top: `${parseInt(headSize) * 0.2}px`,
                left: `${parseInt(headSize) * 0.1}px`,
                position: 'absolute',
                borderRadius: `${parseInt(headSize) * 0.05}px`
              }} />
              <div style={{
                backgroundColor: '#34495e',
                height: `${parseInt(headSize) * 0.2}px`,
                width: `${parseInt(headSize) * 0.25}px`,
                top: `${parseInt(headSize) * 0.2}px`,
                right: `${parseInt(headSize) * 0.1}px`,
                position: 'absolute',
                borderRadius: `${parseInt(headSize) * 0.05}px`
              }} />
            </div>
          </div>
        );
      case 'summer-dress':
        return (
          <div className="absolute" style={{ 
            bottom: `-${parseInt(headSize) * 1.8}px`,
            left: 0,
            width: `${parseInt(headSize)}px`,
          }}>
            {/* Dress top */}
            <div style={{ 
              backgroundColor: '#ff6b81',
              width: `${parseInt(headSize)}px`,
              height: `${parseInt(headSize) * 0.5}px`,
              borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
              borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
              boxShadow: 'inset 0px 10px 20px -10px rgba(0,0,0,0.2)',
              position: 'relative'
            }}>
              {/* Straps */}
              <div style={{
                backgroundColor: '#ff6b81',
                height: `${parseInt(headSize) * 0.12}px`,
                width: `${parseInt(headSize) * 0.08}px`,
                position: 'absolute',
                left: `${parseInt(headSize) * 0.2}px`,
                top: `-${parseInt(headSize) * 0.1}px`,
                transform: 'rotate(15deg)',
              }} />
              <div style={{
                backgroundColor: '#ff6b81',
                height: `${parseInt(headSize) * 0.12}px`,
                width: `${parseInt(headSize) * 0.08}px`,
                position: 'absolute',
                right: `${parseInt(headSize) * 0.2}px`,
                top: `-${parseInt(headSize) * 0.1}px`,
                transform: 'rotate(-15deg)',
              }} />
            </div>
            {/* Dress skirt */}
            <div style={{ 
              backgroundColor: '#ff6b81',
              width: `${parseInt(headSize) * 1.2}px`,
              height: `${parseInt(headSize) * 1}px`,
              borderRadius: '0 0 50% 50%',
              left: `-${parseInt(headSize) * 0.1}px`,
              position: 'relative',
              boxShadow: 'inset 0px -10px 20px -10px rgba(0,0,0,0.2)',
            }}>
              {/* Pattern */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  style={{
                    position: 'absolute',
                    backgroundColor: '#ff8e9e',
                    height: `${parseInt(headSize) * 0.1}px`,
                    width: `${parseInt(headSize) * 0.1}px`,
                    borderRadius: '50%',
                    left: `${parseInt(headSize) * (i * 0.2 + 0.1)}px`,
                    top: `${parseInt(headSize) * 0.6}px`,
                  }}
                />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  // If we have a custom outfit, render it instead of default
  if (outfit) {
    return renderCustomOutfit();
  }
  
  // Render outfit based on avatar type
  switch(avatarType) {
    case 'bitmoji':
      return (
        <div className="absolute" style={{
          bottom: `-${parseInt(headSize) * 1.8}px`,
          left: 0,
          width: `${parseInt(headSize)}px`,
        }}>
          {/* T-shirt */}
          <div style={{ 
            backgroundColor: '#67e8f9',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.7}px`,
            borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
            borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
            boxShadow: 'inset 0px 10px 20px -10px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            {/* Collar */}
            <div style={{
              backgroundColor: '#06b6d4',
              height: `${parseInt(headSize) * 0.1}px`,
              width: `${parseInt(headSize) * 0.3}px`,
              borderBottomLeftRadius: `${parseInt(headSize) * 0.1}px`,
              borderBottomRightRadius: `${parseInt(headSize) * 0.1}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.35}px`,
              top: 0
            }} />
            {/* Sleeves */}
            <div style={{
              backgroundColor: '#06b6d4',
              height: `${parseInt(headSize) * 0.15}px`,
              width: `${parseInt(headSize) * 0.2}px`,
              position: 'absolute',
              left: `-${parseInt(headSize) * 0.1}px`,
              top: `${parseInt(headSize) * 0.1}px`,
              borderRadius: '50%'
            }} />
            <div style={{
              backgroundColor: '#06b6d4',
              height: `${parseInt(headSize) * 0.15}px`,
              width: `${parseInt(headSize) * 0.2}px`,
              position: 'absolute',
              right: `-${parseInt(headSize) * 0.1}px`,
              top: `${parseInt(headSize) * 0.1}px`,
              borderRadius: '50%'
            }} />
          </div>
          {/* Pants */}
          <div style={{ 
            backgroundColor: '#0ea5e9',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.8}px`,
            position: 'relative'
          }} />
        </div>
      );
    case 'princess':
      return (
        <div className="absolute" style={{ 
          bottom: `-${parseInt(headSize) * 1.8}px`,
          left: 0,
          width: `${parseInt(headSize)}px`,
        }}>
          {/* Crown */}
          <Crown className="absolute" style={{
            width: `${parseInt(headSize) * 0.6}px`,
            height: `${parseInt(headSize) * 0.6}px`,
            top: `-${parseInt(headSize) * 0.45}px`,
            left: `${parseInt(headSize) * 0.2}px`,
            color: '#FFD700',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
          }} />
          
          {/* Dress top */}
          <div style={{ 
            backgroundColor: '#FFB6C1',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.6}px`,
            borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
            borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
            boxShadow: 'inset 0px 10px 20px -10px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            {/* Sleeve left */}
            <div style={{
              backgroundColor: '#FFB6C1',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.3}px`,
              position: 'absolute',
              left: `-${parseInt(headSize) * 0.15}px`,
              top: `${parseInt(headSize) * 0.1}px`,
              borderRadius: '30%',
              boxShadow: 'inset -3px 3px 6px rgba(0,0,0,0.1)'
            }} />
            
            {/* Sleeve right */}
            <div style={{
              backgroundColor: '#FFB6C1',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.3}px`,
              position: 'absolute',
              right: `-${parseInt(headSize) * 0.15}px`,
              top: `${parseInt(headSize) * 0.1}px`,
              borderRadius: '30%',
              boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1)'
            }} />
          </div>
          
          {/* Dress skirt */}
          <div style={{ 
            backgroundColor: '#FFB6C1',
            width: `${parseInt(headSize) * 1.4}px`,
            height: `${parseInt(headSize) * 1}px`,
            borderRadius: '0 0 50% 50%',
            left: `-${parseInt(headSize) * 0.2}px`,
            position: 'relative',
            boxShadow: 'inset 0px -10px 20px -10px rgba(0,0,0,0.2)',
          }}>
            {/* Pattern */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                style={{
                  position: 'absolute',
                  backgroundColor: '#FFC0CB',
                  height: `${parseInt(headSize) * 0.15}px`,
                  width: `${parseInt(headSize) * 0.15}px`,
                  borderRadius: '50%',
                  left: `${parseInt(headSize) * (i * 0.25 + 0.15)}px`,
                  top: `${parseInt(headSize) * 0.6}px`,
                }}
              />
            ))}
          </div>
        </div>
      );
    case 'formal':
      return (
        <div className="absolute" style={{ 
          bottom: `-${parseInt(headSize) * 1.8}px`,
          left: 0,
          width: `${parseInt(headSize)}px`,
        }}>
          {/* Suit jacket */}
          <div style={{ 
            backgroundColor: '#2c3e50',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.7}px`,
            borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
            borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
            position: 'relative'
          }}>
            {/* Lapels */}
            <div style={{
              borderRight: `${parseInt(headSize) * 0.3}px solid #34495e`,
              borderBottom: `${parseInt(headSize) * 0.3}px solid transparent`,
              height: `${parseInt(headSize) * 0.3}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.2}px`,
              top: 0
            }} />
            <div style={{
              borderLeft: `${parseInt(headSize) * 0.3}px solid #34495e`,
              borderBottom: `${parseInt(headSize) * 0.3}px solid transparent`,
              height: `${parseInt(headSize) * 0.3}px`,
              position: 'absolute',
              right: `${parseInt(headSize) * 0.2}px`,
              top: 0
            }} />
            
            {/* Shirt */}
            <div style={{
              backgroundColor: '#ffffff',
              height: `${parseInt(headSize) * 0.5}px`,
              width: `${parseInt(headSize) * 0.3}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.35}px`,
              top: `${parseInt(headSize) * 0.15}px`,
              borderBottomLeftRadius: `${parseInt(headSize) * 0.05}px`,
              borderBottomRightRadius: `${parseInt(headSize) * 0.05}px`,
            }} />
            
            {/* Tie */}
            <div style={{
              backgroundColor: '#e74c3c',
              height: `${parseInt(headSize) * 0.3}px`,
              width: `${parseInt(headSize) * 0.1}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.45}px`,
              top: `${parseInt(headSize) * 0.25}px`,
            }} />
            
            {/* Pocket */}
            <div style={{
              backgroundColor: '#34495e',
              height: `${parseInt(headSize) * 0.1}px`,
              width: `${parseInt(headSize) * 0.2}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.1}px`,
              top: `${parseInt(headSize) * 0.2}px`,
              borderRadius: `${parseInt(headSize) * 0.02}px`,
            }} />
          </div>
          
          {/* Pants */}
          <div style={{ 
            backgroundColor: '#2c3e50',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.8}px`,
            position: 'relative'
          }}>
            {/* Belt */}
            <div style={{
              backgroundColor: '#000000',
              height: `${parseInt(headSize) * 0.05}px`,
              width: `${parseInt(headSize)}px`,
              top: 0,
              position: 'absolute'
            }} />
          </div>
        </div>
      );
    case 'sporty':
      return (
        <div className="absolute" style={{ 
          bottom: `-${parseInt(headSize) * 1.8}px`,
          left: 0,
          width: `${parseInt(headSize)}px`,
        }}>
          {/* Jersey */}
          <div style={{ 
            backgroundColor: '#e74c3c',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.7}px`,
            borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
            borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
            position: 'relative',
            boxShadow: 'inset 0px 10px 20px -10px rgba(0,0,0,0.3)'
          }}>
            {/* Number */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: `${parseInt(headSize) * 0.3}px`,
              fontWeight: 'bold'
            }}>
              7
            </div>
            
            {/* Stripes */}
            <div style={{
              backgroundColor: 'white',
              height: `${parseInt(headSize) * 0.06}px`,
              width: `${parseInt(headSize) * 1}px`,
              top: `${parseInt(headSize) * 0.2}px`,
              position: 'absolute'
            }} />
            <div style={{
              backgroundColor: 'white',
              height: `${parseInt(headSize) * 0.06}px`,
              width: `${parseInt(headSize) * 1}px`,
              top: `${parseInt(headSize) * 0.5}px`,
              position: 'absolute'
            }} />
          </div>
          
          {/* Shorts */}
          <div style={{ 
            backgroundColor: '#c0392b',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.4}px`,
            position: 'relative'
          }}>
            {/* Side stripe */}
            <div style={{
              backgroundColor: 'white',
              height: `${parseInt(headSize) * 0.4}px`,
              width: `${parseInt(headSize) * 0.05}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.1}px`
            }} />
            <div style={{
              backgroundColor: 'white',
              height: `${parseInt(headSize) * 0.4}px`,
              width: `${parseInt(headSize) * 0.05}px`,
              position: 'absolute',
              right: `${parseInt(headSize) * 0.1}px`
            }} />
          </div>
          
          {/* Legs */}
          <div style={{ 
            position: 'relative',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.4}px`,
          }}>
            <div style={{
              backgroundColor: '#e8b88a',  // Match skin tone
              height: `${parseInt(headSize) * 0.4}px`,
              width: `${parseInt(headSize) * 0.25}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.2}px`
            }} />
            <div style={{
              backgroundColor: '#e8b88a',  // Match skin tone
              height: `${parseInt(headSize) * 0.4}px`,
              width: `${parseInt(headSize) * 0.25}px`,
              position: 'absolute',
              right: `${parseInt(headSize) * 0.2}px`
            }} />
          </div>
        </div>
      );
    case 'casual':
    default:
      return (
        <div className="absolute" style={{ 
          bottom: `-${parseInt(headSize) * 1.8}px`,
          left: 0,
          width: `${parseInt(headSize)}px`,
        }}>
          {/* Hoodie */}
          <div style={{ 
            backgroundColor: '#9b59b6',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.8}px`,
            borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
            borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
            boxShadow: 'inset 0px 10px 20px -10px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            {/* Hood */}
            <div style={{
              backgroundColor: '#8e44ad',
              height: `${parseInt(headSize) * 0.15}px`,
              width: `${parseInt(headSize) * 0.7}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.15}px`,
              top: `-${parseInt(headSize) * 0.05}px`,
              borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
              borderTopRightRadius: `${parseInt(headSize) * 0.1}px`
            }} />
            
            {/* Pocket */}
            <div style={{
              backgroundColor: '#8e44ad',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.5}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.25}px`,
              bottom: `${parseInt(headSize) * 0.1}px`,
              borderRadius: `${parseInt(headSize) * 0.1}px`
            }} />
            
            {/* Strings */}
            <div style={{
              backgroundColor: 'white',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.03}px`,
              position: 'absolute',
              left: `${parseInt(headSize) * 0.35}px`,
              top: `${parseInt(headSize) * 0.1}px`
            }} />
            <div style={{
              backgroundColor: 'white',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.03}px`,
              position: 'absolute',
              right: `${parseInt(headSize) * 0.35}px`,
              top: `${parseInt(headSize) * 0.1}px`
            }} />
          </div>
          
          {/* Jeans */}
          <div style={{ 
            backgroundColor: '#3498db',
            width: `${parseInt(headSize)}px`,
            height: `${parseInt(headSize) * 0.7}px`,
            position: 'relative'
          }}>
            {/* Pocket design */}
            <div style={{
              backgroundColor: '#2980b9',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.2}px`,
              top: `${parseInt(headSize) * 0.2}px`,
              left: `${parseInt(headSize) * 0.1}px`,
              position: 'absolute',
              borderRadius: `${parseInt(headSize) * 0.05}px`
            }} />
            <div style={{
              backgroundColor: '#2980b9',
              height: `${parseInt(headSize) * 0.2}px`,
              width: `${parseInt(headSize) * 0.2}px`,
              top: `${parseInt(headSize) * 0.2}px`,
              right: `${parseInt(headSize) * 0.1}px`,
              position: 'absolute',
              borderRadius: `${parseInt(headSize) * 0.05}px`
            }} />
          </div>
        </div>
      );
  }
};

export default Outfit;
