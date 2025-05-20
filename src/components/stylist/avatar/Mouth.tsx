
import React from 'react';
import { FacialExpression } from '@/types/UserProfile';

interface MouthProps {
  expression: FacialExpression;
  headSize: string;
}

const Mouth: React.FC<MouthProps> = ({ expression, headSize }) => {
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

export default Mouth;
