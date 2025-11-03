import React from "react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  ArrowRight,
  Network,
  Microscope,
  Zap,
  Trophy,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HeroGeometric } from "@/components/HeroGeometric";
import { PredictionMarketCard } from "@/components/PredictionMarketCard";

// Scientific background animation
const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full opacity-20">
        {/* DNA Helix */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          {[...Array(10)].map((_, i) => (
            <g
              key={`helix-${i}`}
              className="animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <path
                d={`M ${10 + i * 8} ${10 + Math.sin(i) * 20} Q ${20 + i * 8} ${
                  30 + Math.cos(i) * 20
                } ${30 + i * 8} ${50 + Math.sin(i) * 20}`}
                className="text-cyan-500"
                stroke="currentColor"
                strokeWidth="0.2"
                fill="none"
              >
                <animate
                  attributeName="d"
                  dur="10s"
                  repeatCount="indefinite"
                  values={`
                    M ${10 + i * 8} ${10 + Math.sin(i) * 20} Q ${20 + i * 8} ${
                    30 + Math.cos(i) * 20
                  } ${30 + i * 8} ${50 + Math.sin(i) * 20};
                    M ${10 + i * 8} ${20 + Math.cos(i) * 20} Q ${20 + i * 8} ${
                    40 + Math.sin(i) * 20
                  } ${30 + i * 8} ${60 + Math.cos(i) * 20};
                    M ${10 + i * 8} ${10 + Math.sin(i) * 20} Q ${20 + i * 8} ${
                    30 + Math.cos(i) * 20
                  } ${30 + i * 8} ${50 + Math.sin(i) * 20}
                  `}
                />
              </path>
              <circle r="0.5" className="text-blue-400" fill="currentColor">
                <animateMotion
                  dur={`${8 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M ${10 + i * 8} ${10 + Math.sin(i) * 20} Q ${
                    20 + i * 8
                  } ${30 + Math.cos(i) * 20} ${30 + i * 8} ${
                    50 + Math.sin(i) * 20
                  }`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Floating Particles */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          {[...Array(20)].map((_, i) => (
            <circle
              key={`particle-${i}`}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={0.3 + Math.random() * 0.5}
              className="text-cyan-400"
              fill="currentColor"
            >
              <animate
                attributeName="opacity"
                dur={`${3 + Math.random() * 2}s`}
                values="0;1;0"
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
              <animate
                attributeName="cy"
                dur={`${10 + Math.random() * 5}s`}
                values={`${Math.random() * 100};${Math.random() * 100}`}
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
};

// Enhanced Feature card component with more animations
const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="rounded-full w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed transform transition-all duration-300 group-hover:text-slate-300">
        {description}
      </p>
    </div>
  </div>
);

// Enhanced Trader Feature Card
const TraderFeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="rounded-full w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed transform transition-all duration-300 group-hover:text-slate-300">
        {description}
      </p>
    </div>
  </div>
);

// Enhanced FAQ Component with expansion
const FAQ = ({ question, answer }) => (
  <Collapsible className="group">
    <CollapsibleTrigger className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex items-center justify-between">
          <h3 className="text-lg text-white text-left group-hover:translate-x-1 transition-transform duration-300">
            {question}
          </h3>
          <ChevronDown className="w-5 h-5 text-cyan-400 transform transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className="overflow-hidden">
        <div className="p-6 text-slate-300 bg-slate-800/50 rounded-b-xl border-x border-b border-slate-800/50">
          {answer}
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/ideosphere-logo-text.png"
                alt="Ideosphere Logo"
                className="h-10"
              />
            </div>
            {/* Removed the button from the top right */}
          </div>
        </div>
      </nav>

      {/* Hero Section - Replaced with HeroGeometric */}
      <HeroGeometric
        badge="Project submissions open"
        title1="The world’s first"
        title2="Forecast-to-Funding Network"
      />

      {/* Researchers Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-normal mb-12 tracking-tight">
            For Scientists & Technologists
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Microscope}
              title="Propose & Validate"
              description="Turn hypotheses into signals of confidence. Submit or support research ideas that the community tests for feasibility, risk, and impact, turning uncertainty into measurable probability. Instead of applying for grants, participants fund the methods, experiments, and success criteria that prove or disprove each idea."
            />
            <FeatureCard
              icon={Network}
              title="Market & Evolve"
              description="Ideosphere turns verified ideas into live markets that build cumulative credibility. When a project proves feasible, a prediction market tracks its progress and resolves automatically once success criteria are met. Forecasters and early backers earn rewards from market liquidity, and validated outcomes strengthen the network’s models, sharpening foresight and guiding smarter capital allocation."
            />
          </div>
          {/* <div className="mt-12 flex justify-center">
            <GradientButton className="flex items-center gap-2">
              <a href="https://tally.so/r/wL0qry" target="_blank">
                Submit a hypothesis
              </a>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </GradientButton>
          </div> */}
        </div>
      </section>

      {/* Enhanced Traders Section */}
      <section className="relative py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-normal mb-8 tracking-tight">
              For Traders & Forecasters
            </h2>
            {/* <p className="text-xl text-slate-300 mb-6">
              Trade on the frontier of science and technology
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <TraderFeatureCard
              icon={Zap}
              title="Trade On A New Frontier"
              description="Forecast what’s next by trading on the frontier of science and technology. Hedge on research outcomes, clinical trials, and emerging breakthroughs to profit from your foresight and gain alpha from your domain expertise. Your predictions turn insight into transparent, data-driven signals that surface credible discoveries before they reach the mainstream."
            />
            <TraderFeatureCard
              icon={Network}
              title="Forecast Outcomes Across Domains"
              description="Discover and evaluate high-impact, overlooked research proposals before they’re funded. Perform due diligence across science and technology—from biotech to AI—and gain shared ownership in projects you help surface and validate. Each assessment sharpens collective foresight and directs capital toward ideas that matter most."
            />
            <TraderFeatureCard
              icon={Trophy}
              title="Profit from Verified Progress"
              description="When projects reach their milestones, markets resolve transparently on-chain. Top forecasters earn rewards, reputation, and influence, while a share of market activity fuels new community-funded research—building both prestige and impact with every accurate call."
            />
            <TraderFeatureCard
              icon={Microscope}
              title="Disrupt the funding paradigm"
              description="Traditional funding methods are inefficient and slow. Your market participation creates a more dynamic funding mechanism that lets researchers & technologists focus on breakthroughs instead of grant applications."
            />
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-normal mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Benefits for Traders
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">
                  Trade on the tech tree and capture alpha before it becomes
                  consensus.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">
                  Hedge against industry outcomes such as clinical trials or
                  research outcomes.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">
                  Earn rewards, prestige, and tokens by turning foresight into
                  the fuel of discovery.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                x
                <span className="text-slate-300">
                  Join a community shaping a new economy where collective
                  foresight funds discovery.
                </span>
              </li>
            </ul>
          </div>

          {/* <div className="flex justify-center">
            <GradientButton variant="variant" className="flex items-center">
              <a href="https://tally.so/r/mR41VP" target="_blank">
                Join as trader
              </a>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </GradientButton>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-normal mb-12 tracking-tight">FAQ</h2>
          <div className="space-y-4">
            <FAQ
              question="What is Ideosphere and how does it work?"
              answer="Ideosphere connects forecasting with funding. Researchers & technologists submit hypotheses. The community forecasts feasibility and pledges funds to projects they support. When projects reach verification milestones, prediction markets track and validate their progress."
            />
            <FAQ
              question="How do researchers & technologists receive funding?"
              answer="Researchers & technologists receive funding from community members who pledge money to projects. When a project shows promise, contributors fund its verification method (the experiment or study that tests the hypothesis). Funds are held in smart contracts and released as projects reach milestones. Successful projects can become prediction markets."
            />
            <FAQ
              question="How do you ensure the validity of outcomes?"
              answer="We use an optimistic oracle system to verify results. Researchers & technologists submit findings. Domain experts can challenge these findings during a dispute period. Financial and reputational incentives reward accurate reports and penalize false claims. This combines peer validation with economic incentives."
            />
            <FAQ
              question="How does one submit projects and what fields do you support?"
              answer="Researchers & technologists submit proposals through our portal. Projects need a clear hypothesis, a verification method, and a measurable timeline. We support all falsifiable domains: life sciences, materials, physics, chemistry, computer science, and AI. After approval, the community forecasts and funds each project."
            />
            <FAQ
              question="How is Ideosphere different from traditional prediction markets or funding platforms?"
              answer="Most prediction markets exist for speculation. Ideosphere uses markets for discovering high impact feasible early-stage R&D projects. Forecasts guide where community funding flows. By connecting forecasting, crowdfunding, and validation, we fund ideas and make them a reality."
            />
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-normal mb-4 tracking-tight">
              Still have questions?
            </h3>
            <p className="text-slate-400">
              Can't find the answer you're looking for? Please reach to our
              friendly team at{" "}
              <a
                href="mailto:mariana@ideosphere.io"
                className="text-cyan-400 hover:text-cyan-300"
              >
                mariana@ideosphere.io
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/ideosphere-logo-text.png"
                alt="Ideosphere Logo"
                className="h-7"
              />
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Markets
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Research
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
            </nav>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Ideosphere. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
