
import React from "react";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";
import { motion } from "framer-motion";

export const HeroGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedGradient 
        colors={["#0ea5e9", "#2563eb", "#1e40af", "#172554"]} 
        speed={0.02} 
        blur="medium" 
      />
      
      {/* Additional Moving Light Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${2 + Math.random() * 6}px`,
            height: `${2 + Math.random() * 6}px`,
            filter: `blur(${1 + Math.random() * 2}px)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Wave Effect */}
      <div className="absolute inset-0">
        <div className="wave-animation"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-10" />
    </div>
  );
};
