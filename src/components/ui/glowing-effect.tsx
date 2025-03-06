
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface GlowingEffectProps {
  /**
   * Control the size of the glow
   * @default 40
   */
  spread?: number;
  /**
   * Whether to show the glow
   * @default true
   */
  glow?: boolean;
  /**
   * Disable showing the glow 
   * @default false
   */
  disabled?: boolean;
  /**
   * How close to get to the edge before moving
   * @default 64
   */
  proximity?: number;
  /**
   * Size of the inactive zone in the center, from 0 to 1
   * @default 0.01
   */
  inactiveZone?: number;
  /**
   * Width of the border
   * @default 3
   */
  borderWidth?: number;
  /**
   * CSS class name for the container
   */
  className?: string;
  /**
   * CSS class name for the glow
   */
  glowClassName?: string;
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  borderWidth = 3,
  className,
  glowClassName,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current || disabled) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Get the pointer position relative to the center of the element
    pointerRef.current = { 
      x: mouseX - centerX, 
      y: mouseY - centerY
    };
    
    // Calculate distance from center (normalized)
    const distanceFromCenter = Math.sqrt(
      (mouseX - centerX) ** 2 + (mouseY - centerY) ** 2
    ) / (Math.min(rect.width, rect.height) / 2);
    
    // If cursor is in the inactive zone, don't move the glow
    if (distanceFromCenter < inactiveZone) {
      return;
    }
    
    // Set the position based on the mouse coordinates relative to the element
    const x = (mouseX - rect.left) / rect.width;
    const y = (mouseY - rect.top) / rect.height;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpacity(0);
    setPosition({ x: 0.5, y: 0.5 });
  };

  useEffect(() => {
    const container = containerRef.current;
    
    if (!container || disabled) return;
    
    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[inherit]",
        className
      )}
    >
      {glow && !disabled && (
        <div
          className={cn(
            "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500",
            "rounded-[inherit]",
            {
              "opacity-100": opacity === 1,
            },
            glowClassName
          )}
          style={{
            opacity,
            background: `radial-gradient(
              ${spread * 2}rem circle at 
              ${position.x * 100}% 
              ${position.y * 100}%, 
              rgba(6, 182, 212, 0.15), 
              rgba(6, 182, 212, 0.1), 
              rgba(59, 130, 246, 0.05), 
              transparent
            )`
          }}
        />
      )}
      
      {!disabled && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500",
            {
              "opacity-100": opacity === 1,
              "opacity-0": opacity === 0,
            }
          )}
          style={{
            border: `${borderWidth}px solid transparent`,
            background: `linear-gradient(rgb(18, 18, 24), rgb(18, 18, 24)) padding-box, 
                        linear-gradient(
                          to bottom right, 
                          rgba(6, 182, 212, ${opacity * 0.5}), 
                          rgba(59, 130, 246, ${opacity * 0.5})
                        ) border-box`
          }}
        />
      )}
    </div>
  );
}
