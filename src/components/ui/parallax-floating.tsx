
"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingElement = ({
  children,
  depth = 1,
  className,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("absolute", className)}
      style={{
        zIndex: depth * 10,
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Floating({
  children,
  sensitivity = 0.5,
  className,
}: {
  children: ReactNode;
  sensitivity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isInView, setIsInView] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
      setIsInView(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isInView) return;

    const { left, top } = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to container
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    
    // Calculate position in percentage for x and y
    const newX = ((mouseX / dimensions.width) - 0.5) * sensitivity;
    const newY = ((mouseY / dimensions.height) - 0.5) * sensitivity;
    
    // Update the motion values
    x.set(newX);
    y.set(newY);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1000,
      }}
    >
      {Array.isArray(children) && 
        children.map((child, idx) => {
          // Apply the 3D transform to each child
          return (
            <motion.div
              key={idx}
              style={{
                x: x.get() * (child.props.depth || 1) * -100, 
                y: y.get() * (child.props.depth || 1) * -100,
                position: "absolute",
                transformStyle: "preserve-3d",
                ...child.props.style,
              }}
              className={child.props.className}
            >
              {child}
            </motion.div>
          );
        })}
    </motion.div>
  );
}
