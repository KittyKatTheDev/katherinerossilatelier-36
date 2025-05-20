
import React from 'react';
import { EyeColor, FacialExpression } from '@/types/UserProfile';

interface EyesProps {
  eyeColor: EyeColor;
  expression: FacialExpression;
  headSize: string;
}

const Eyes: React.FC<EyesProps> = ({ eyeColor, expression, headSize }) => {
  // Get eye color from avatar config or default to brown
  const eyeColorHex = {
    'brown': '#4E3620',
    'blue': '#1E90FF',
    'green': '#2E8B57',
    'hazel': '#A67B5B',
    'amber': '#FFBF00',
    'gray': '#808080'
  }[eyeColor] || '#4E3620';
  
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

export default Eyes;
