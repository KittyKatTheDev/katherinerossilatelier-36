
import React from 'react';
import { BodyType } from '@/types/UserProfile';

interface BodyProps {
  bodyType: BodyType;
  skinToneColor: string;
  headSize: string;
}

const Body: React.FC<BodyProps> = ({ bodyType, skinToneColor, headSize }) => {
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
    <div 
      className="absolute mx-auto left-0 right-0" 
      style={{ 
        backgroundColor: skinToneColor || '#E8B88A',
        top: `${parseInt(headSize) * 1.1}px`,
        ...bodyShape
      }}
    />
  );
};

export default Body;
