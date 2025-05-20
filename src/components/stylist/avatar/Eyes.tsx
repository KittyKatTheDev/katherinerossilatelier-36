
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
  
  const eyeSize = parseInt(headSize) * 0.12;
  const eyeSpacing = parseInt(headSize) * 0.25;
  
  const renderEyes = () => {
    switch(expression) {
      case 'wink':
        return (
          <>
            {/* Left eye (open) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
                <div className="absolute" style={{
                  width: `${eyeSize * 0.15}px`, 
                  height: `${eyeSize * 0.15}px`, 
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  top: '25%',
                  left: '70%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
            
            {/* Right eye (winking) */}
            <div className="flex items-center justify-center" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize}px`,
            }}>
              <div style={{
                width: `${eyeSize * 0.8}px`,
                height: `${eyeSize * 0.15}px`,
                backgroundColor: 'black',
                borderRadius: `${eyeSize * 0.15}px`
              }} />
            </div>
          </>
        );
        
      case 'surprise':
        return (
          <>
            {/* Left eye (wide open) */}
            <div className="relative" style={{
              width: `${eyeSize * 1.2}px`, 
              height: `${eyeSize * 1.2}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.8}px`, 
                height: `${eyeSize * 0.8}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.4}px`, 
                  height: `${eyeSize * 0.4}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
            
            {/* Right eye (wide open) */}
            <div className="relative" style={{
              width: `${eyeSize * 1.2}px`, 
              height: `${eyeSize * 1.2}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.8}px`, 
                height: `${eyeSize * 0.8}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.4}px`, 
                  height: `${eyeSize * 0.4}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
          </>
        );
        
      case 'angry':
        return (
          <>
            {/* Eyebrows */}
            <div className="absolute" style={{
              width: `${eyeSize * 1}px`,
              height: `${eyeSize * 0.2}px`,
              backgroundColor: '#5D4037',
              top: `-${eyeSize * 0.3}px`,
              left: `-${eyeSize * 0.2}px`,
              transform: 'rotate(-25deg)'
            }} />
            <div className="absolute" style={{
              width: `${eyeSize * 1}px`,
              height: `${eyeSize * 0.2}px`,
              backgroundColor: '#5D4037',
              top: `-${eyeSize * 0.3}px`,
              right: `-${eyeSize * 0.2}px`,
              transform: 'rotate(25deg)'
            }} />
            
            {/* Left eye (angry) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              transform: 'rotate(-10deg)',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
            
            {/* Right eye (angry) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              transform: 'rotate(10deg)',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
          </>
        );
        
      case 'sad':
        return (
          <>
            {/* Eyebrows */}
            <div className="absolute" style={{
              width: `${eyeSize * 0.8}px`,
              height: `${eyeSize * 0.2}px`,
              backgroundColor: '#5D4037',
              top: `-${eyeSize * 0.4}px`,
              left: `0`,
              transform: 'rotate(15deg)',
              borderRadius: `${eyeSize * 0.1}px`
            }} />
            <div className="absolute" style={{
              width: `${eyeSize * 0.8}px`,
              height: `${eyeSize * 0.2}px`,
              backgroundColor: '#5D4037',
              top: `-${eyeSize * 0.4}px`,
              right: `0`,
              transform: 'rotate(-15deg)',
              borderRadius: `${eyeSize * 0.1}px`
            }} />
            
            {/* Left eye (sad) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize * 0.9}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
            
            {/* Right eye (sad) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize * 0.9}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
          </>
        );
        
      case 'laugh':
        return (
          <>
            {/* Left eye (laughing - squinted) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize * 0.5}px`, 
              borderTop: `${eyeSize * 0.15}px solid black`,
              borderRadius: '50%',
            }} />
            
            {/* Right eye (laughing - squinted) */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize * 0.5}px`, 
              borderTop: `${eyeSize * 0.15}px solid black`,
              borderRadius: '50%',
            }} />
          </>
        );
        
      default: // Normal eyes
        return (
          <>
            {/* Left eye */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
                <div className="absolute" style={{
                  width: `${eyeSize * 0.15}px`, 
                  height: `${eyeSize * 0.15}px`, 
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  top: '30%',
                  left: '70%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
            
            {/* Right eye */}
            <div className="relative" style={{
              width: `${eyeSize}px`, 
              height: `${eyeSize}px`, 
              backgroundColor: 'white',
              borderRadius: '50%',
              border: '1px solid #00000050',
              boxShadow: 'inset 0px 2px 2px rgba(0,0,0,0.1)'
            }}>
              <div className="absolute" style={{
                width: `${eyeSize * 0.65}px`, 
                height: `${eyeSize * 0.65}px`, 
                backgroundColor: eyeColorHex,
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <div className="absolute" style={{
                  width: `${eyeSize * 0.3}px`, 
                  height: `${eyeSize * 0.3}px`, 
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }} />
                <div className="absolute" style={{
                  width: `${eyeSize * 0.15}px`, 
                  height: `${eyeSize * 0.15}px`, 
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  top: '30%',
                  left: '70%',
                  transform: 'translate(-50%, -50%)'
                }} />
              </div>
            </div>
          </>
        );
    }
  };
  
  return (
    <div className="absolute flex justify-between" style={{ 
      width: `${eyeSpacing * 2 + eyeSize}px`,
      top: `${parseInt(headSize) * 0.35}px`,
      left: `${(parseInt(headSize) - (eyeSpacing * 2 + eyeSize)) / 2}px`
    }}>
      {renderEyes()}
    </div>
  );
};

export default Eyes;
