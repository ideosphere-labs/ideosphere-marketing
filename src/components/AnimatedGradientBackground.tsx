
import React, { useEffect, useRef } from 'react';

const AnimatedGradientBackground = () => {
  const filterRef = useRef<SVGFETurbulenceElement>(null);
  
  useEffect(() => {
    let animationId: number;
    let phase = 0;
    
    const animate = () => {
      if (filterRef.current) {
        phase += 0.005; // Increased speed for more noticeable animation
        const baseFrequencyX = 0.02 + Math.sin(phase) * 0.015; // Increased amplitude
        const baseFrequencyY = 0.05 + Math.cos(phase) * 0.015; // Increased amplitude
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
    <div className="absolute inset-0 z-0 overflow-hidden opacity-80">
      <svg className="w-full h-full" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" /> {/* Cyan-500 */}
            <stop offset="25%" stopColor="#4f46e5" /> {/* Indigo-600 */}
            <stop offset="50%" stopColor="#8b5cf6" /> {/* Violet-500 */}
            <stop offset="75%" stopColor="#4f46e5" /> {/* Indigo-600 */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan-600 */}
          </linearGradient>
          
          <filter id="noise">
            <feTurbulence 
              ref={filterRef}
              type="fractalNoise" 
              baseFrequency="0.02 0.05" 
              numOctaves="3" // Increased complexity
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="50" // Increased scale for more noticeable effect
              xChannelSelector="R"
              yChannelSelector="G" 
            />
          </filter>
        </defs>
        
        <rect 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          fill="url(#bg-gradient)" 
          filter="url(#noise)"
          className="animate-[hueRotate_15s_infinite_linear]"
        />
      </svg>
      
      {/* Added additional animated gradient shapes for more visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100px] blur-3xl opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 animate-[float_15s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[float_12s_ease-in-out_infinite_1s]"></div>
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-[float_10s_ease-in-out_infinite_0.5s]"></div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
    </div>
  );
};

export default AnimatedGradientBackground;
