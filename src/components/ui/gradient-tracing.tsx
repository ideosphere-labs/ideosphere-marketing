
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientTracingProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  path: string;
  gradientColors?: string[];
  strokeWidth?: number;
  duration?: number;
  className?: string;
}

export function GradientTracing({
  width = 400,
  height = 400,
  path,
  gradientColors = ["#06b6d4", "#0ea5e9", "#3b82f6"],
  strokeWidth = 2,
  duration = 6,
  className,
  ...props
}: GradientTracingProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const gradientId = `gradient-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    if (!svgRef.current) return;
    
    const pathElement = svgRef.current.querySelector("path");
    if (!pathElement) return;

    const pathLength = pathElement.getTotalLength();
    
    pathElement.style.strokeDasharray = `${pathLength}`;
    pathElement.style.strokeDashoffset = `${pathLength}`;
    
    // Reset animation
    pathElement.style.animation = "none";
    pathElement.getBoundingClientRect();
    
    // Start animation
    pathElement.style.animation = `svgTrace ${duration}s linear infinite`;
    
    // Add the keyframes if they don't exist yet
    if (!document.querySelector("style#gradient-tracing-keyframes")) {
      const style = document.createElement("style");
      style.id = "gradient-tracing-keyframes";
      style.textContent = `
        @keyframes svgTrace {
          0% {
            stroke-dashoffset: ${pathLength};
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [path, duration]);

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <svg 
        ref={svgRef}
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(0.5px)" }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {gradientColors.map((color, index) => (
              <stop 
                key={index} 
                offset={`${(index / (gradientColors.length - 1)) * 100}%`} 
                stopColor={color} 
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            opacity: 0.6,
          }}
        />
      </svg>
    </div>
  );
}
