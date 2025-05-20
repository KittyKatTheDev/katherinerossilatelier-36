
import React from 'react';
import { FacialFeature } from '@/types/UserProfile';
import { Glasses } from 'lucide-react';

interface FacialFeaturesProps {
  facialFeatures: FacialFeature[];
  headSize: string;
  hairColor: string;
}

const FacialFeatures: React.FC<FacialFeaturesProps> = ({ 
  facialFeatures, 
  headSize,
  hairColor
}) => {
  if (!facialFeatures || facialFeatures.length === 0) {
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

export default FacialFeatures;
