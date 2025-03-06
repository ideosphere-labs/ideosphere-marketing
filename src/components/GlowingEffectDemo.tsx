
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

export function GlowingEffectDemo() {
  return (
    <div className="py-12 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Glowing Effect Cards
      </h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4" />}
          title="Bet on outcomes"
          description="Participate in prediction markets and bet on scientific breakthroughs."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4" />}
          title="Support research"
          description="Your market participation directly funds promising scientific research."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4" />}
          title="Secure platform"
          description="Our platform ensures transparent and secure market operations."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4" />}
          title="Reward discovery"
          description="Earn profits while accelerating scientific innovation and breakthroughs."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4" />}
          title="Discover markets"
          description="Explore diverse prediction markets across multiple scientific fields."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[12rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-700/50 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          glowClassName="bg-gradient-to-br from-cyan-500/10 to-blue-500/5"
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-slate-700/50 bg-slate-800/50 p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-slate-700/50 bg-slate-800/80 p-2">
              <div className="text-cyan-400">
                {icon}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-sm md:leading-[1.375rem] text-slate-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
