
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "none" | "light" | "medium" | "heavy";
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 0.05,
  blur = "none"
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const blurAmount = 
    blur === "none" ? "0px" :
    blur === "light" ? "20px" :
    blur === "medium" ? "40px" :
    "60px";

  const gradientId = `gradient-${colors.join("-").replace(/#/g, "")}`;
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (svgRef.current) {
        const defs = svgRef.current.querySelector("defs");
        const gradient = defs?.querySelector(`#${gradientId}`);
        
        if (gradient) {
          const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
          animate.setAttribute("attributeName", "gradientTransform");
          animate.setAttribute("from", `rotate(${Math.random() * 360})`);
          animate.setAttribute("to", `rotate(${Math.random() * 360})`);
          animate.setAttribute("dur", `${20 + Math.random() * 10}s`);
          animate.setAttribute("repeatCount", "1");
          
          // Remove old animations
          gradient.querySelectorAll("animate").forEach(el => el.remove());
          gradient.appendChild(animate);
          animate.beginElement();
        }
      }
    }, 1000 / speed);
    
    return () => clearInterval(timer);
  }, [gradientId, speed]);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 2 }}
    >
      <svg 
        ref={svgRef}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient
            id={gradientId}
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            {colors.map((color, i) => (
              <stop
                key={`${color}-${i}`}
                offset={`${(i / (colors.length - 1)) * 100}%`}
                stopColor={color}
                stopOpacity={i === colors.length - 1 ? 0.2 : 0.7}
              />
            ))}
          </radialGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${gradientId})`}
          style={{ filter: `blur(${blurAmount})` }}
        />
      </svg>
      
      {/* Moving Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`light-effect-${i}`}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${30 + Math.random() * 100}px`,
              height: `${30 + Math.random() * 100}px`,
              filter: `blur(${15 + Math.random() * 30}px)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
              ],
              y: [
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
              ],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
