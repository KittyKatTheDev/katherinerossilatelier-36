
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
      <Eyes eyeColor={eyeColor} expression={expression} headSize={headSize} />
      <Mouth expression={expression} headSize={headSize} />
      <FacialFeatures facialFeatures={facialFeatures} headSize={headSize} hairColor={hairColor} />
    </>
  );
};

export default Face;
