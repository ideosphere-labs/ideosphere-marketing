
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from "framer-motion";
import { Dna, ThumbsUp, ThumbsDown } from "lucide-react";

export function PredictionMarketCard() {
  return (
    <div className="py-24 w-full flex items-center justify-center">
      <PinContainer title="CRISPR Market" containerClassName="w-full max-w-md">
        <div className="flex flex-col p-6 tracking-tight text-white w-[22rem] h-[22rem] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl neo-morphism border border-slate-700/50 rounded-2xl">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-cyan-500 animate-pulse" />
            <div className="text-xs text-slate-400">Live Market</div>
            <div className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-slate-800/80 text-cyan-400 border border-cyan-500/20">
              Life Sciences
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Dna className="w-6 h-6 text-cyan-400" />
              <div className="text-xl font-bold text-white">
                CRISPR Market
              </div>
            </div>
            
            <div className="text-lg text-slate-200 font-medium leading-tight">
              Will CRISPR-Cas9 be used to cure a genetic disease in humans by end of 2024?
            </div>
            
            {/* Market Stats */}
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 group hover:from-green-500/30 hover:to-green-600/30 transition-all">
                <div className="absolute -inset-1 blur-sm bg-gradient-to-br from-green-500/10 to-green-600/10 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-green-400">YES</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-1">72%</div>
                  <div className="text-xs text-slate-300 mt-1">+5% past week</div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 p-4 group hover:from-red-500/30 hover:to-red-600/30 transition-all">
                <div className="absolute -inset-1 blur-sm bg-gradient-to-br from-red-500/10 to-red-600/10 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="w-5 h-5 text-red-400" />
                    <span className="text-sm font-medium text-red-400">NO</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-1">28%</div>
                  <div className="text-xs text-slate-300 mt-1">-5% past week</div>
                </div>
              </div>
            </div>

            {/* Animated DNA visualization */}
            <div className="relative h-16 overflow-hidden rounded-lg bg-slate-800/50">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-2 bg-slate-700/50">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
              
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="absolute w-full h-16"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)`,
                    animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                    opacity: 0.3 / i,
                    transform: `translateX(${i * 10}px)`,
                  }}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end mt-2">
              <div className="text-xs text-slate-400">
                Market closes: Dec 31, 2024
              </div>
              <div className="text-cyan-400 text-sm font-medium">
                Trade now →
              </div>
            </div>
          </div>
        </div>
      </PinContainer>

      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(50px);
          }
        }
      `}</style>
    </div>
  );
}
