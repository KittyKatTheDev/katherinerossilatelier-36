
import React from 'react';
import { HairStyle } from '@/types/UserProfile';

interface HairProps {
  hairStyle?: HairStyle;
  hairColor: string;
  headSize: string;
}

const Hair: React.FC<HairProps> = ({ hairStyle, hairColor, headSize }) => {
  if (!hairStyle) return null;
  
  switch(hairStyle) {
    case 'short':
      return (
        <div className="absolute">
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1}px`,
              height: `${parseInt(headSize) * 0.4}px`,
              top: `-${parseInt(headSize) * 0.13}px`,
              left: '0',
              boxShadow: 'inset 0px 5px 10px -5px rgba(0,0,0,0.3)'
            }}
          />
          <div 
            className="absolute rounded-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.15}px`,
              height: `${parseInt(headSize) * 0.15}px`,
              top: `-${parseInt(headSize) * 0.05}px`,
              left: `${parseInt(headSize) * 0.42}px`,
              filter: 'brightness(1.1)'
            }}
          />
        </div>
      );
    case 'medium':
      return (
        <div className="absolute">
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1.1}px`,
              height: `${parseInt(headSize) * 0.6}px`,
              top: `-${parseInt(headSize) * 0.2}px`,
              left: `-${parseInt(headSize) * 0.05}px`,
              boxShadow: 'inset 0px 5px 10px -5px rgba(0,0,0,0.3)'
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.2}px`,
              height: `${parseInt(headSize) * 0.25}px`,
              top: `${parseInt(headSize) * 0.3}px`,
              left: `-${parseInt(headSize) * 0.05}px`,
              borderBottomLeftRadius: `${parseInt(headSize) * 0.1}px`
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.2}px`,
              height: `${parseInt(headSize) * 0.25}px`,
              top: `${parseInt(headSize) * 0.3}px`,
              right: `-${parseInt(headSize) * 0.05}px`,
              borderBottomRightRadius: `${parseInt(headSize) * 0.1}px`
            }}
          />
        </div>
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
              left: `-${parseInt(headSize) * 0.05}px`,
              boxShadow: 'inset 0px 5px 10px -5px rgba(0,0,0,0.3)'
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 1.2}px`,
              height: `${parseInt(headSize) * 1.0}px`,
              top: `${parseInt(headSize) * 0.35}px`,
              left: `-${parseInt(headSize) * 0.1}px`,
              borderRadius: '0 0 40% 40%'
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.3}px`,
              height: `${parseInt(headSize) * 0.6}px`,
              top: `${parseInt(headSize) * 0.3}px`,
              left: `-${parseInt(headSize) * 0.05}px`,
              borderRadius: '0 0 0 40%',
              filter: 'brightness(0.9)'
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.3}px`,
              height: `${parseInt(headSize) * 0.6}px`,
              top: `${parseInt(headSize) * 0.3}px`,
              right: `-${parseInt(headSize) * 0.05}px`,
              borderRadius: '0 0 40% 0',
              filter: 'brightness(0.9)'
            }}
          />
        </>
      );
    case 'curly':
      return (
        <div className="absolute" style={{top: `-${parseInt(headSize) * 0.2}px`, left: `-${parseInt(headSize) * 0.2}px`}}>
          {[...Array(18)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full" 
              style={{ 
                backgroundColor: hairColor,
                width: `${parseInt(headSize) * 0.25}px`,
                height: `${parseInt(headSize) * 0.25}px`,
                top: `${Math.sin(i / 2) * parseInt(headSize) * 0.3 + parseInt(headSize) * 0.2}px`,
                left: `${(i * parseInt(headSize) * 0.12) % (parseInt(headSize) * 1.4)}px`,
                filter: i % 3 === 0 ? 'brightness(1.1)' : 'brightness(1)'
              }}
            />
          ))}
        </div>
      );
    case 'bun':
      return (
        <>
          <div 
            className="absolute rounded-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.5}px`,
              height: `${parseInt(headSize) * 0.5}px`,
              top: `-${parseInt(headSize) * 0.3}px`,
              left: `${parseInt(headSize) * 0.25}px`,
              boxShadow: 'inset 0px 5px 10px -5px rgba(0,0,0,0.3)'
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.7}px`,
              height: `${parseInt(headSize) * 0.35}px`,
              top: `-${parseInt(headSize) * 0.1}px`,
              left: `${parseInt(headSize) * 0.15}px`,
              borderTopLeftRadius: `${parseInt(headSize) * 0.3}px`,
              borderTopRightRadius: `${parseInt(headSize) * 0.3}px`,
              filter: 'brightness(0.95)'
            }}
          />
        </>
      );
    case 'mohawk':
      return (
        <>
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.15}px`,
              height: `${parseInt(headSize) * 0.7}px`,
              top: `-${parseInt(headSize) * 0.5}px`,
              left: `${parseInt(headSize) * 0.425}px`,
              borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
              borderTopRightRadius: `${parseInt(headSize) * 0.1}px`,
              boxShadow: '0px -3px 6px rgba(0,0,0,0.2)'
            }}
          />
          <div 
            className="absolute rounded-t-full" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.3}px`,
              height: `${parseInt(headSize) * 0.15}px`,
              top: `-${parseInt(headSize) * 0.05}px`,
              left: `${parseInt(headSize) * 0.35}px`,
              filter: 'brightness(0.9)'
            }}
          />
        </>
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
              borderTopLeftRadius: `${parseInt(headSize) * 0.1}px`,
              boxShadow: 'inset 0px 5px 10px -5px rgba(0,0,0,0.3)'
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
              filter: 'brightness(0.9)'
            }}
          />
          <div 
            className="absolute" 
            style={{ 
              backgroundColor: hairColor,
              width: `${parseInt(headSize) * 0.2}px`,
              height: `${parseInt(headSize) * 0.3}px`,
              top: `${parseInt(headSize) * 0.3}px`,
              left: `${parseInt(headSize) * 0.75}px`,
              borderBottomRightRadius: `${parseInt(headSize) * 0.1}px`,
              filter: 'brightness(0.85)'
            }}
          />
        </>
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
            left: '0',
            filter: 'brightness(0.95)',
            boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.2)'
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
            left: '0',
            boxShadow: 'inset 0px 5px 10px -5px rgba(0,0,0,0.3)'
          }}
        />
      );
  }
};

export default Hair;
