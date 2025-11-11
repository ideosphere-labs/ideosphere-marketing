"use client";

import React from "react";
import { TrendingUp, Award, Target, Rocket, DollarSign } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const traderIncentivesData = [
  {
    id: 1,
    title: "Trade",
    date: "Stage 1",
    content:
      "Take positions on emerging discoveries and profit from your insights.",
    category: "Discovery",
    icon: Target,
    relatedIds: [],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Forecast",
    date: "Stage 2",
    content:
      "Evaluate proposals to surface emerging trends in discovery markets and earn rewards for sharpening the signal.",
    category: "Analysis",
    icon: TrendingUp,
    relatedIds: [],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Earn Rewards",
    date: "Stage 3",
    content:
      "Earn rewards from your activity in discovery markets to boost your profits across your trading positions.",
    category: "Markets",
    icon: DollarSign,
    relatedIds: [],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Fund",
    date: "Stage 4",
    content:
      "Crowdfund risk-adjusted proposals on the discovery market and take ownership in the breakthoughs you identify.",
    category: "Resolution",
    icon: Award,
    relatedIds: [],
    status: "pending" as const,
    energy: 30,
  },
  // {
  //   id: 5,
  //   title: "Compound",
  //   date: "Stage 5",
  //   content:
  //     "Profits and reputation compound. Top forecasters gain influence in future project selection.",
  //   category: "Growth",
  //   icon: Rocket,
  //   relatedIds: [4],
  //   status: "pending" as const,
  //   energy: 10,
  // },
];

const TraderIncentivesSection = () => {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-300 mb-6">
            <span className="h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            Trader Incentives
          </div>
          <h2 className="text-4xl font-semibold mb-8 tracking-tight text-white">
            From Trading To Forecasting To Funding
          </h2>
          <p className="text-lg text-slate-400">
            Your market participation creates signals that surface breakthrough
            research and helps allocate funding efficiently.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl">
            <RadialOrbitalTimeline timelineData={traderIncentivesData} />
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Monetise Insight Before Consensus
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Convert expertise into early conviction. Detect emerging signals
                in underpriced research and profit from foresight while others
                wait for proof.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Earn Credibility That Compounds{" "}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Each accurate prediction strengthens your on-chain reputation.
                Influence funding decisions and shape which discoveries move
                from hypothesis to breakthrough.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <Rocket className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Turn Accuracy Into Control
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Profitable forecasts feed your influence; influence directs
                better projects; better projects yield new opportunities for
                alpha. The loop that rewards being right early.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraderIncentivesSection;
export { TraderIncentivesSection };
