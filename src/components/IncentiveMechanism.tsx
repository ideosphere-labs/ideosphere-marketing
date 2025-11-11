"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IncentiveMechanismProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const IncentiveMechanism = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: IncentiveMechanismProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
        "bg-[rgba(15,18,28,0.6)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.08)] shadow-[0_0_40px_rgba(74,200,255,0.1)]",
        className
      )}
    >
      {/* SVG Paths */}
      <svg
        className="h-full sm:w-full opacity-80"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <defs>
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#4AC8FF"} />
            <stop offset="70%" stopColor="#7F6BFF" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
        </defs>

        <g
          stroke="rgba(255,255,255,0.12)"
          fill="none"
          strokeWidth="0.5"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />

          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1.2s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>

        {/* Glowing Circles */}
        {[1, 2, 3, 4].map((n) => (
          <g key={n} mask={`url(#db-mask-${n})`}>
            <circle
              className={`database db-light-${n}`}
              cx="0"
              cy="0"
              r="12"
              fill="url(#db-blue-grad)"
              opacity="0.8"
              filter="url(#softGlow)"
            />
          </g>
        ))}

        {/* Buttons */}
        <g stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="0.4">
          {[
            { x: 14, text: badgeTexts?.first || "GET" },
            { x: 60, text: badgeTexts?.second || "POST" },
            { x: 108, text: badgeTexts?.third || "PUT" },
            { x: 150, text: badgeTexts?.fourth || "DELETE" },
          ].map((btn, i) => (
            <g key={i}>
              <rect
                fill="rgba(20,22,35,0.8)"
                x={btn.x}
                y="5"
                width={i === 3 ? "40" : "34"}
                height="10"
                rx="5"
                className="transition-all duration-300 hover:fill-[rgba(74,200,255,0.2)]"
              ></rect>
              <DatabaseIcon x={(btn.x + 4).toString()} y="7.5" />
              <text
                x={(btn.x + 14).toString()}
                y="12"
                fill="white"
                stroke="none"
                fontSize="5"
                fontWeight="500"
              >
                {btn.text}
              </text>
            </g>
          ))}
        </g>
      </svg>

      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-[rgba(74,200,255,0.15)] blur-xl" />
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(15,18,28,0.8)] px-2 py-1 sm:-top-4 sm:py-1.5 backdrop-blur-md">
          <SparklesIcon className="size-3 text-cyan-300" />
          <span className="ml-2 text-[10px] text-white/80">
            {title ?? "Data exchange using a customized REST API"}
          </span>
        </div>

        {/* Outer Circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t border-[rgba(255,255,255,0.1)] bg-[rgba(15,18,28,0.8)] font-semibold text-xs text-white/70 shadow-[0_0_20px_rgba(74,200,255,0.15)] backdrop-blur-md">
          {circleText ?? "SVG"}
        </div>

        {/* Box Content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(20,22,35,0.7)] shadow-[0_0_50px_rgba(74,200,255,0.05)] backdrop-blur-md">
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 flex h-7 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(15,18,28,0.7)] px-3 text-xs text-white/80 backdrop-blur-md">
            <HeartHandshakeIcon className="size-4 text-cyan-400" />
            <span>{buttonTexts?.first || "LegionDev"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(15,18,28,0.7)] px-3 text-xs text-white/80 sm:flex backdrop-blur-md">
            <Folder className="size-4 text-indigo-400" />
            <span>{buttonTexts?.second || "v2_updates"}</span>
          </div>

          {/* Pulsating Circles */}
          {[100, 145, 190, 235].map((size, i) => (
            <motion.div
              key={i}
              className={`absolute -bottom-[${
                size / 2
              }px] h-[${size}px] w-[${size}px] rounded-full border-t border-[rgba(255,255,255,0.05)] bg-[rgba(74,200,255,0.05)]`}
              animate={{
                scale: [1, 0.98, 1.02, 0.98, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncentiveMechanism;

const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => (
  <svg
    x={x}
    y={y}
    xmlns="http://www.w3.org/2000/svg"
    width="5"
    height="5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);
