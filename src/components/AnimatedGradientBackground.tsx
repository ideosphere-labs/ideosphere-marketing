
import React, { useEffect, useRef } from 'react';

const AnimatedGradientBackground = () => {
  const filterRef = useRef<SVGFETurbulenceElement>(null);
  
  useEffect(() => {
    let animationId: number;
    let phase = 0;
    
    const animate = () => {
      if (filterRef.current) {
        phase += 0.002;
        const baseFrequencyX = 0.02 + Math.sin(phase) * 0.01;
        const baseFrequencyY = 0.05 + Math.cos(phase) * 0.01;
        filterRef.current.setAttribute('baseFrequency', `${baseFrequencyX} ${baseFrequencyY}`);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
      <svg className="w-full h-full" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="25%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="75%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <filter id="noise">
            <feTurbulence 
              ref={filterRef}
              type="fractalNoise" 
              baseFrequency="0.02 0.05" 
              numOctaves="2" 
              result="noise" 
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
          </filter>
        </defs>
        
        <rect 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          fill="url(#gradient)" 
          filter="url(#noise)"
          className="animate-[hueRotate_20s_infinite_linear]"
        />
      </svg>
      
      {/* Overlay layer for better text readability */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
    </div>
  );
};

export default AnimatedGradientBackground;
