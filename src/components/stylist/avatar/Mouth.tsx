
import React from 'react';
import { FacialExpression } from '@/types/UserProfile';

interface MouthProps {
  expression: FacialExpression;
  headSize: string;
}

const Mouth: React.FC<MouthProps> = ({ expression, headSize }) => {
  const mouthWidth = parseInt(headSize) * 0.4;
  const mouthHeight = parseInt(headSize) * 0.2;
  const mouthTop = parseInt(headSize) * 0.65;
  const mouthLeft = (parseInt(headSize) - mouthWidth) / 2;
  
  switch(expression) {
    case 'smile':
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${mouthHeight}px`,
          borderBottom: `${parseInt(headSize) * 0.06}px solid #D32F2F`,
          borderRadius: '0 0 100px 100px',
          backgroundColor: 'transparent'
        }} />
      );
      
    case 'laugh':
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${mouthHeight}px`,
          borderRadius: '0 0 100px 100px',
          backgroundColor: '#D32F2F',
          border: '2px solid #B71C1C',
          boxShadow: 'inset 0px -5px 10px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            position: 'absolute',
            width: `${mouthWidth * 0.8}px`,
            height: `${mouthHeight * 0.5}px`,
            backgroundColor: '#821616',
            borderRadius: '0 0 100px 100px',
            bottom: '2px',
            left: '10%'
          }} />
        </div>
      );
      
    case 'wink':
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${mouthHeight * 0.6}px`,
          borderBottom: `${parseInt(headSize) * 0.04}px solid #D32F2F`,
          borderRadius: '0 0 100px 100px',
          backgroundColor: 'transparent',
          transform: 'rotate(5deg)'
        }} />
      );
      
    case 'surprise':
      return (
        <div className="absolute rounded-full" style={{ 
          top: `${mouthTop}px`,
          left: `${mouthLeft + mouthWidth * 0.2}px`,
          width: `${mouthWidth * 0.6}px`,
          height: `${mouthWidth * 0.6}px`,
          backgroundColor: '#D32F2F',
          border: '2px solid #B71C1C',
          boxShadow: 'inset 0px -5px 10px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            position: 'absolute',
            width: `${mouthWidth * 0.4}px`,
            height: `${mouthWidth * 0.25}px`,
            backgroundColor: '#821616',
            borderRadius: '50%',
            bottom: '15%',
            left: '20%'
          }} />
        </div>
      );
      
    case 'sad':
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop + mouthHeight * 0.3}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${mouthHeight * 0.7}px`,
          borderTop: `${parseInt(headSize) * 0.04}px solid #D32F2F`,
          borderRadius: '100px 100px 0 0',
          backgroundColor: 'transparent'
        }} />
      );
      
    case 'angry':
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop + mouthHeight * 0.3}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${mouthHeight * 0.3}px`,
          backgroundColor: '#D32F2F',
          borderRadius: '5px'
        }} />
      );
      
    case 'neutral':
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop + mouthHeight * 0.3}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${parseInt(headSize) * 0.04}px`,
          backgroundColor: '#D32F2F',
          borderRadius: '5px'
        }} />
      );
      
    default:
      return (
        <div className="absolute" style={{ 
          top: `${mouthTop}px`,
          left: `${mouthLeft}px`,
          width: `${mouthWidth}px`,
          height: `${mouthHeight}px`,
          borderBottom: `${parseInt(headSize) * 0.05}px solid #D32F2F`,
          borderRadius: '0 0 100px 100px',
          backgroundColor: 'transparent'
        }} />
      );
  }
};

export default Mouth;
