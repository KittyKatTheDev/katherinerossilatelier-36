
import React from 'react';
import { Accessory } from '@/types/UserProfile';

interface AccessoriesProps {
  accessories: Accessory[];
  headSize: string;
}

const Accessories: React.FC<AccessoriesProps> = ({ accessories, headSize }) => {
  if (!accessories || accessories.length === 0) {
    return null;
  }
  
  return (
    <>
      {accessories.includes('hat') && (
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
      
      {accessories.includes('earrings') && (
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
      
      {accessories.includes('necklace') && (
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

export default Accessories;
