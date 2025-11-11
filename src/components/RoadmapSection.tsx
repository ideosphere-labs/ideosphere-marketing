"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2 } from "lucide-react";

export function RoadmapSection() {
  const data = [
    {
      title: "Q1 2025",
      content: (
        <div>
          <p className="text-slate-300 text-sm md:text-base font-normal mb-8">
            Platform foundation and initial community building. Launched core prediction market infrastructure and onboarded early adopters from the scientific research community.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-cyan-400 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Deployed smart contract architecture</span>
            </div>
            <div className="flex gap-2 items-center text-cyan-400 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Launched optimistic oracle system</span>
            </div>
            <div className="flex gap-2 items-center text-cyan-400 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Onboarded first 100 researchers</span>
            </div>
            <div className="flex gap-2 items-center text-cyan-400 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Community governance framework established</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Platform Launch</h4>
              <p className="text-slate-400 text-sm">Core infrastructure deployed on testnet with initial prediction markets.</p>
            </div>
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Community Beta</h4>
              <p className="text-slate-400 text-sm">Early access program for researchers and forecasters to test the platform.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q2 2025",
      content: (
        <div>
          <p className="text-slate-300 text-sm md:text-base font-normal mb-8">
            Mainnet launch and scaling to support multiple research domains. Integration with academic institutions and expansion of market maker liquidity pools.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-blue-400 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Mainnet deployment across 5 domains</span>
            </div>
            <div className="flex gap-2 items-center text-blue-400 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Partnership with 10 universities</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>$1M in community funding deployed</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Mobile app beta release</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Domain Expansion</h4>
              <p className="text-slate-400 text-sm">Supporting biotech, AI, materials science, physics, and climate research.</p>
            </div>
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Liquidity Growth</h4>
              <p className="text-slate-400 text-sm">Automated market makers and institutional capital partnerships.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q3 2025",
      content: (
        <div>
          <p className="text-slate-300 text-sm md:text-base font-normal mb-8">
            Advanced features rollout including reputation systems, cross-chain support, and AI-powered research discovery tools. First cohort of funded projects reaching validation milestones.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Reputation scoring system v2.0</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Cross-chain bridge integration</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>AI research recommendation engine</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>50+ projects in validation phase</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Smart Discovery</h4>
              <p className="text-slate-400 text-sm">AI tools to match forecasters with relevant research based on expertise.</p>
            </div>
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Multi-Chain Support</h4>
              <p className="text-slate-400 text-sm">Expand to Ethereum L2s and other ecosystems for broader accessibility.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q4 2025",
      content: (
        <div>
          <p className="text-slate-300 text-sm md:text-base font-normal mb-8">
            Global expansion and ecosystem maturation. Launch of Impact DAO for community-directed funding and establishment of research validation standards across domains.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>Impact DAO governance launch</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>International research partnerships</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>$10M+ in total project funding</span>
            </div>
            <div className="flex gap-2 items-center text-slate-500 text-sm md:text-base">
              <CheckCircle2 className="h-4 w-4" />
              <span>100,000+ active forecasters</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">DAO Governance</h4>
              <p className="text-slate-400 text-sm">Community-owned platform with decentralized decision making on funding priorities.</p>
            </div>
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
              <h4 className="text-white font-semibold mb-2">Global Scale</h4>
              <p className="text-slate-400 text-sm">Partnerships with research institutions across 50+ countries.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-slate-950">
      <Timeline data={data} />
    </div>
  );
}

export default RoadmapSection;
