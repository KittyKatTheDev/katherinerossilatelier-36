
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

export default Hair;
