
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );

  const onMouseEnter = () => {
    const element = document.getElementById("pin-content");
    if (element) {
      element.style.transform = "scale3d(0.95, 0.95, 1)";
    }
  };

  const onMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    const element = document.getElementById("pin-content");
    if (element) {
      element.style.transform = "scale3d(1, 1, 1)";
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    const rotateX = mouseY * 20; // Adjusted for more subtle rotation
    const rotateY = mouseX * -20; // Adjusted for more subtle rotation

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative group/pin cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div
        style={{
          transform,
          transition: "transform 0.2s ease",
        }}
        className={cn("flex items-center justify-center", className)}
      >
        <div className="absolute -inset-[0.8rem] rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover/pin:opacity-10 blur transition duration-500" />
        <div
          id="pin-content"
          style={{
            transition: "transform 0.2s ease",
          }}
          className="relative z-10"
        >
          {children}
        </div>
      </div>
      {href && title && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={title}
        />
      )}
    </motion.div>
  );
};
