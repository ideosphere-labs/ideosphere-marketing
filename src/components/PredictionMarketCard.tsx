import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { ThumbsUp, ThumbsDown, Timer } from "lucide-react";

export function PredictionMarketCard() {
  return (
    <div className="py-24 w-full flex items-center justify-center">
      <PinContainer
        title="Intermittent Fasting Market"
        containerClassName="w-full max-w-md"
      >
        <div className="flex flex-col p-6 tracking-tight text-white w-[22rem] h-[22rem] bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-slate-800/50 rounded-2xl">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-cyan-400 animate-pulse" />
            <div className="text-xs text-slate-400">Live Market</div>
            <div className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-slate-800/80 text-indigo-400 border border-indigo-500/20">
              AI
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-4 space-y-4">
            <div className="text-xl font-medium text-white">
              AI Capabilities
            </div>

            <div className="text-lg text-slate-200 font-medium leading-tight">
              Will an open-source AI model outperform GPT-4 on the MMLU
              benchmark by March 31, 2026?
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-4 group hover:from-cyan-500/30 hover:to-blue-600/30 transition-all">
                <div className="absolute -inset-1 blur-sm bg-gradient-to-br from-cyan-500/10 to-blue-600/10 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-400">
                      YES
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-1">65%</div>
                  <div className="text-xs text-slate-300 mt-1">
                    +3% past week
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-4 group hover:from-indigo-500/30 hover:to-purple-600/30 transition-all">
                <div className="absolute -inset-1 blur-sm bg-gradient-to-br from-indigo-500/10 to-purple-600/10 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm font-medium text-indigo-400">
                      NO
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-1">35%</div>
                  <div className="text-xs text-slate-300 mt-1">
                    -3% past week
                  </div>
                </div>
              </div>
            </div>

            {/* Animated visualization */}
            <div className="relative h-16 overflow-hidden rounded-lg bg-slate-800/50">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-2 bg-slate-700/50">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>

              {/* Wave animation */}
              <div
                className="absolute w-full h-16 animate-[wave_3s_ease-in-out_infinite] opacity-30"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)`,
                }}
              />
              <div
                className="absolute w-full h-16 animate-[wave_3.5s_ease-in-out_infinite] opacity-20"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)`,
                  animationDelay: "0.5s",
                }}
              />
              <div
                className="absolute w-full h-16 animate-[wave_4s_ease-in-out_infinite] opacity-10"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)`,
                  animationDelay: "1s",
                }}
              />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end mt-2">
              <div className="flex items-center text-xs text-slate-400">
                <Timer className="w-3 h-3 mr-1" />
                Resolves: March 31, 2026
              </div>
              <div className="text-cyan-400 text-sm font-medium">
                Trade now →
              </div>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
