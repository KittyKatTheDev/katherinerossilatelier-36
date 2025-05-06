
import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserProfile } from '@/types/UserProfile';

interface UserProfileContextType {
  profile: UserProfile | null;
  updateProfile: (profile: UserProfile) => void;
  hasProfile: boolean;
}

const defaultProfile: UserProfile = {
  skinTone: 'medium',
  bodyType: 'athletic',
  stylePreferences: ['casual']
};

const UserProfileContext = createContext<UserProfileContextType>({
  profile: null,
  updateProfile: () => {},
  hasProfile: false
});

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  
  // Load profile from localStorage on initial render
  useEffect(() => {
    const savedProfile = localStorage.getItem('userStyleProfile');
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (error) {
        console.error('Failed to parse saved profile', error);
        setProfile(defaultProfile);
      }
    }
  }, []);
  
  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem('userStyleProfile', JSON.stringify(newProfile));
  };
  
  return (
    <UserProfileContext.Provider value={{
      profile,
      updateProfile,
      hasProfile: !!profile
    }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
