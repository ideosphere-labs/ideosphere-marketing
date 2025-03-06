
"use client";

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, useAnimation, useInView, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitBy = "characters" | "words" | "lines";
type StaggerFrom = "first" | "last" | "center" | "random" | number;

export interface VerticalCutRevealProps {
  children: string;
  splitBy?: SplitBy;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  reverse?: boolean;
  transition?: any;
  className?: string;
  containerClassName?: string;
}

export interface VerticalCutRevealRef {
  replay: () => void;
}

function splitText(text: string, method: SplitBy): string[] {
  switch (method) {
    case "characters":
      return text.split("");
    case "words":
      return text.split(/\s+/).filter(word => word.length > 0);
    case "lines":
      return text.split("\n").filter(line => line.length > 0);
    default:
      return text.split("");
  }
}

export const VerticalCutReveal = forwardRef<VerticalCutRevealRef, VerticalCutRevealProps>(
  ({ 
    children, 
    splitBy = "characters", 
    staggerDuration = 0.05, 
    staggerFrom = "first", 
    reverse = false, 
    transition = {}, 
    className,
    containerClassName
  }, ref) => {
    const controls = useAnimation();
    const rootRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(rootRef, { once: true, amount: 0.2 });
    
    const elements = splitText(children, splitBy);

    const getStaggerDelay = (index: number): number => {
      const len = elements.length;
      
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (len - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const middle = Math.floor(len / 2);
        return Math.abs(middle - index) * staggerDuration;
      }
      if (staggerFrom === "random") return Math.random() * staggerDuration * len;
      if (typeof staggerFrom === "number") {
        return Math.abs(staggerFrom - index) * staggerDuration;
      }
      return 0;
    };

    useImperativeHandle(ref, () => ({
      replay: () => {
        controls.set("hidden");
        controls.start("visible");
      }
    }));

    useEffect(() => {
      if (isInView) {
        controls.set("hidden");
        controls.start("visible");
      }
    }, [controls, isInView]);

    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: reverse ? -20 : 20 },
    };

    return (
      <motion.div ref={rootRef} className={cn("flex flex-wrap", containerClassName)}>
        {splitBy === "lines" ? (
          elements.map((line, i) => (
            <div key={i} className="w-full">
              <motion.div
                custom={getStaggerDelay(i)}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: (delay: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: { ...transition, delay },
                  }),
                  hidden: { opacity: 0, y: reverse ? -20 : 20 },
                }}
                className={className}
              >
                {line}
              </motion.div>
            </div>
          ))
        ) : splitBy === "words" ? (
          <>
            {elements.map((word, i) => (
              <React.Fragment key={i}>
                <motion.span
                  custom={getStaggerDelay(i)}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: (delay: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: { ...transition, delay },
                    }),
                    hidden: { opacity: 0, y: reverse ? -20 : 20 },
                  }}
                  className={cn("inline-block", className)}
                >
                  {word}
                </motion.span>
                {i !== elements.length - 1 && " "}
              </React.Fragment>
            ))}
          </>
        ) : (
          elements.map((char, i) => (
            <motion.span
              key={i}
              custom={getStaggerDelay(i)}
              initial="hidden"
              animate={controls}
              variants={{
                visible: (delay: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { ...transition, delay },
                }),
                hidden: { opacity: 0, y: reverse ? -20 : 20 },
              }}
              className={cn(
                "inline-block",
                char === " " ? "w-[0.3em]" : "",
                char === "\n" ? "w-full" : "",
                className
              )}
            >
              {char === "\n" ? <br /> : char}
            </motion.span>
          ))
        )}
      </motion.div>
    );
  }
);

VerticalCutReveal.displayName = "VerticalCutReveal";
