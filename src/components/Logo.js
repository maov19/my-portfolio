import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/MO.json';

const Logo = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.setSpeed(1.5); 
      animationRef.current.play();
    }
  }, []);

  return (
      <div>
        <Lottie
          style={{height: '45vh'}}
          animationData={animationData}
          loop={false}
          autoplay
          renderer="svg" 
          ref={animationRef}
        />
      </div>
    )
  }
export default Logo;
