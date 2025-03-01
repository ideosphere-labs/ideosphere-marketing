
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface GridOptionsProps {
  angle?: number;
  opacity?: number;
  cellSize?: number;
  lineColor?: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: {
    regular: string;
    gradient: string;
  };
  description: string;
  ctaText: string;
  ctaHref: string;
  gridOptions?: GridOptionsProps;
  className?: string;
}

const GridBackground = ({ options }: { options?: GridOptionsProps }) => {
  const {
    angle = 65,
    opacity = 0.4,
    cellSize = 50,
    lineColor = "rgba(74, 222, 234, 0.2)",
  } = options || {};

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute h-full w-full"
        style={{
          opacity,
          backgroundImage: `
            linear-gradient(${angle}deg, ${lineColor} 1px, transparent 1px),
            linear-gradient(${angle + 90}deg, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />
    </div>
  );
};

// DNA Helix Animation Component
const DNAAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full opacity-20">
        {/* DNA Helix */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          {[...Array(10)].map((_, i) => (
            <g key={`helix-${i}`} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
              <path
                d={`M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20}`}
                className="text-cyan-500"
                stroke="currentColor"
                strokeWidth="0.2"
                fill="none"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values={`
                    M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20};
                    M ${10 + (i * 8)} ${20 + Math.cos(i) * 20} Q ${20 + (i * 8)} ${40 + Math.sin(i) * 20} ${30 + (i * 8)} ${60 + Math.cos(i) * 20};
                    M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20}
                  `}
                />
              </path>
              <circle
                r="0.5"
                className="text-blue-400"
                fill="currentColor"
              >
                <animateMotion
                  dur={`${8 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20}`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Floating Particles */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          {[...Array(20)].map((_, i) => (
            <circle
              key={`particle-${i}`}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={0.3 + Math.random() * 0.5}
              className="text-cyan-400"
              fill="currentColor"
            >
              <animate
                attributeName="opacity"
                dur={`${3 + Math.random() * 2}s`}
                values="0;1;0"
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
              <animate
                attributeName="cy"
                dur={`${10 + Math.random() * 5}s`}
                values={`${Math.random() * 100};${Math.random() * 100}`}
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
};

export const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  gridOptions,
  className,
}: HeroSectionProps) => {
  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center justify-center ${className || ""}`}>
      <GridBackground options={gridOptions} />
      <DNAAnimation />
      
      {/* Frosted Glass Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex px-4 py-2 rounded-full glass-effect text-cyan-400 border border-cyan-500/20 text-sm font-medium mb-12"
          >
            🧬 Access Now Open 🧪
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]"
          >
            {title}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {subtitle.gradient}
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl transform -rotate-2"></div>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-8 py-5 text-lg hover:scale-105 transition-all duration-300"
            >
              <a href={ctaHref}>
                <span className="relative z-10 flex items-center">
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
