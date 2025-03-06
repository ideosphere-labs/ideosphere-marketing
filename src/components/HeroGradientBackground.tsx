
import React from "react";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

export const HeroGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedGradient 
        colors={["#0ea5e9", "#2563eb", "#1e40af", "#172554"]} 
        speed={0.02} 
        blur="medium" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-10" />
    </div>
  );
};
