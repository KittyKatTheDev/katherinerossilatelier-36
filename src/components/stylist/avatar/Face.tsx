
import React from 'react';
import { UserProfile } from '@/types/UserProfile';
import Eyes from './Eyes';
import Mouth from './Mouth';
import FacialFeatures from './FacialFeatures';

interface FaceProps {
  profile: UserProfile;
  headSize: string;
  hairColor: string;
}

const Face: React.FC<FaceProps> = ({ profile, headSize, hairColor }) => {
  const { avatarConfig } = profile;
  
  // Get eye color from avatar config or default to brown
  const eyeColor = avatarConfig?.eyeColor || 'brown';
  
  // Get expression from avatar config or default to smile
  const expression = avatarConfig?.expression || 'smile';
  
  // Get facial features from avatar config
  const facialFeatures = avatarConfig?.facialFeatures || ['neutral'];
  
  return (
    <>
      {/* Add eyebrows for expressions that don't include them */}
      {expression !== 'angry' && expression !== 'sad' && (
        <div className="absolute" style={{ 
          top: `${parseInt(headSize) * 0.28}px`,
          left: `${parseInt(headSize) * 0.25}px`,
          width: `${parseInt(headSize) * 0.5}px`,
          height: `${parseInt(headSize) * 0.05}px`,
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{ 
            width: `${parseInt(headSize) * 0.15}px`,
            height: `${parseInt(headSize) * 0.03}px`,
            backgroundColor: hairColor || '#5D4037',
            borderRadius: `${parseInt(headSize) * 0.02}px`
          }} />
          <div style={{ 
            width: `${parseInt(headSize) * 0.15}px`,
            height: `${parseInt(headSize) * 0.03}px`,
            backgroundColor: hairColor || '#5D4037',
            borderRadius: `${parseInt(headSize) * 0.02}px`
          }} />
        </div>
      )}
      
      <Eyes eyeColor={eyeColor} expression={expression} headSize={headSize} />
      <Mouth expression={expression} headSize={headSize} />
      <FacialFeatures facialFeatures={facialFeatures} headSize={headSize} hairColor={hairColor} />
    </>
  );
};

export default Face;
