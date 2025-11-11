"use client";

import React from "react";
import { TrendingUp, Award, Target, Rocket, DollarSign } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const traderIncentivesData = [
  {
    id: 1,
    title: "Discover",
    date: "Stage 1",
    content: "Identify high-potential research proposals before they're funded. Early discovery means better positions.",
    category: "Discovery",
    icon: Target,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Evaluate",
    date: "Stage 2",
    content: "Analyze proposals using your domain expertise. Accurate forecasts build reputation and credibility.",
    category: "Analysis",
    icon: TrendingUp,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Trade",
    date: "Stage 3",
    content: "Take positions in prediction markets. Your insights drive market prices and funding allocation.",
    category: "Markets",
    icon: DollarSign,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Validate",
    date: "Stage 4",
    content: "Projects reach milestones and markets resolve. Accurate forecasters earn rewards on-chain.",
    category: "Resolution",
    icon: Award,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Compound",
    date: "Stage 5",
    content: "Profits and reputation compound. Top forecasters gain influence in future project selection.",
    category: "Growth",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
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
            How Forecasters Drive Discovery
          </h2>
          <p className="text-lg text-slate-400">
            Your market participation creates signals that surface breakthrough research and allocate funding efficiently. Each accurate forecast builds reputation and earns rewards.
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
                Alpha Generation
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Leverage your domain expertise to identify breakthrough research before mainstream markets. Capture alpha from early positions in high-impact projects.
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
                Reputation Rewards
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Build verifiable on-chain reputation through accurate forecasts. Top forecasters earn influence in project selection and governance decisions.
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
                Compounding Returns
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Successful predictions compound over time. As your track record grows, so does your influence in shaping the future of scientific funding.
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
