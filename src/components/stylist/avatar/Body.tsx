
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
          borderRadius: `${parseInt(headSize) * 0.2}px ${parseInt(headSize) * 0.2}px ${parseInt(headSize) * 0.1}px ${parseInt(headSize) * 0.1}px`,
          boxShadow: `inset 0px -10px 15px -5px rgba(0,0,0,0.15), 
                      inset ${parseInt(headSize) * 0.1}px 0px ${parseInt(headSize) * 0.1}px rgba(255,255,255,0.1), 
                      inset -${parseInt(headSize) * 0.1}px 0px ${parseInt(headSize) * 0.1}px rgba(0,0,0,0.1)`
        };
      case 'curvy':
      case 'hourglass':
        return {
          width: `${parseInt(headSize) * 0.9}px`,
          height: `${parseInt(headSize) * 1.8}px`,
          borderRadius: `${parseInt(headSize) * 0.7}px ${parseInt(headSize) * 0.7}px ${parseInt(headSize) * 0.2}px ${parseInt(headSize) * 0.2}px`,
          boxShadow: `inset 0px -10px 15px -5px rgba(0,0,0,0.15),
                      inset ${parseInt(headSize) * 0.15}px 0px ${parseInt(headSize) * 0.1}px rgba(255,255,255,0.1), 
                      inset -${parseInt(headSize) * 0.15}px 0px ${parseInt(headSize) * 0.1}px rgba(0,0,0,0.1)`
        };
      case 'plus-size':
      case 'full-figured':
        return {
          width: `${parseInt(headSize) * 1.1}px`,
          height: `${parseInt(headSize) * 1.7}px`,
          borderRadius: `${parseInt(headSize) * 0.4}px ${parseInt(headSize) * 0.4}px ${parseInt(headSize) * 0.2}px ${parseInt(headSize) * 0.2}px`,
          boxShadow: `inset 0px -10px 15px -5px rgba(0,0,0,0.15),
                      inset ${parseInt(headSize) * 0.15}px 0px ${parseInt(headSize) * 0.1}px rgba(255,255,255,0.1), 
                      inset -${parseInt(headSize) * 0.15}px 0px ${parseInt(headSize) * 0.1}px rgba(0,0,0,0.1)`
        };
      case 'petite':
      case 'slim':
      case 'lean':
        return {
          width: `${parseInt(headSize) * 0.7}px`,
          height: `${parseInt(headSize) * 1.7}px`,
          borderRadius: `${parseInt(headSize) * 0.15}px ${parseInt(headSize) * 0.15}px ${parseInt(headSize) * 0.08}px ${parseInt(headSize) * 0.08}px`,
          boxShadow: `inset 0px -10px 15px -5px rgba(0,0,0,0.15),
                      inset ${parseInt(headSize) * 0.08}px 0px ${parseInt(headSize) * 0.08}px rgba(255,255,255,0.1), 
                      inset -${parseInt(headSize) * 0.08}px 0px ${parseInt(headSize) * 0.08}px rgba(0,0,0,0.1)`
        };
      default:
        return {
          width: `${parseInt(headSize) * 0.8}px`,
          height: `${parseInt(headSize) * 1.8}px`,
          borderRadius: `${parseInt(headSize) * 0.25}px ${parseInt(headSize) * 0.25}px ${parseInt(headSize) * 0.15}px ${parseInt(headSize) * 0.15}px`,
          boxShadow: `inset 0px -10px 15px -5px rgba(0,0,0,0.15),
                      inset ${parseInt(headSize) * 0.1}px 0px ${parseInt(headSize) * 0.1}px rgba(255,255,255,0.1), 
                      inset -${parseInt(headSize) * 0.1}px 0px ${parseInt(headSize) * 0.1}px rgba(0,0,0,0.1)`
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
    >
      {/* Add neck */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: skinToneColor || '#E8B88A',
          width: `${parseInt(headSize) * 0.25}px`,
          height: `${parseInt(headSize) * 0.15}px`,
          top: `-${parseInt(headSize) * 0.15}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          borderTopLeftRadius: `${parseInt(headSize) * 0.05}px`,
          borderTopRightRadius: `${parseInt(headSize) * 0.05}px`,
          zIndex: -1
        }}
      />
      
      {/* Add subtle highlights */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.1)',
          width: `${parseInt(headSize) * 0.4}px`,
          height: `${parseInt(headSize) * 0.7}px`,
          top: `${parseInt(headSize) * 0.2}px`,
          left: `${parseInt(headSize) * 0.1}px`,
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default Body;
