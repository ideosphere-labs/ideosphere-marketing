import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Microscope, Zap, Trophy, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PredictionMarketCard } from "@/components/PredictionMarketCard";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";

// Scientific background animation
const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full opacity-20">
        {/* DNA Helix */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          {[...Array(10)].map((_, i) => (
            <g key={`helix-${i}`} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
              <path
                d={`M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20}`}
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
                    M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20};
                    M ${10 + (i * 8)} ${20 + Math.cos(i) * 20} Q ${20 + (i * 8)} ${40 + Math.sin(i) * 20} ${30 + (i * 8)} ${60 + Math.cos(i) * 20};
                    M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20}
                  `}
                />
              </path>
              <circle
                r="0.5"
                className="text-blue-400"
                fill="currentColor"
              >
                <animateMotion
                  dur={`${8 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M ${10 + (i * 8)} ${10 + Math.sin(i) * 20} Q ${20 + (i * 8)} ${30 + Math.cos(i) * 20} ${30 + (i * 8)} ${50 + Math.sin(i) * 20}`}
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
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
      <p className="text-slate-400 leading-relaxed transform transition-all duration-300 group-hover:text-slate-300">{description}</p>
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
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
      <p className="text-slate-400 leading-relaxed transform transition-all duration-300 group-hover:text-slate-300">{description}</p>
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
          <h3 className="text-lg text-white group-hover:translate-x-1 transition-transform duration-300">{question}</h3>
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
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ideosphere
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
              Join the waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 flex items-center justify-center min-h-screen">
        <NetworkBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium mb-12 animate-fade-in">
              Access Now Open
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] animate-fade-up">
              Bet on the future of
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  science
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl transform -rotate-2"></div>
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl animate-fade-up">
              Ideosphere harnesses the power of prediction markets to fund research
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-up">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-8 py-5 text-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Join the waitlist
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Market Card */}
      <PredictionMarketCard />

      {/* Glowing Effect Demo Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlowingEffectDemo />
        </div>
      </section>

      {/* Researchers Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">For Researchers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Microscope}
              title="Unlock a novel funding stream"
              description="Transform the inherent volatility of scientific discovery into a new source of funding. Create prediction markets around your subject of research and profit each time trades are made on the topic."
            />
            <FeatureCard
              icon={Network}
              title="Tap into collective intelligence"
              description="Price action is a potent form of communication. Those who engage with your prediction markets likely have strong opinions on the subject that can be helpful."
            />
          </div>
          <div className="mt-12 flex justify-center">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-8 py-5 text-lg hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Submit a hypothesis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Traders Section */}
      <section className="relative py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-8">For Traders</h2>
            <p className="text-xl text-slate-300 mb-6">
              Ideosphere connects traders to emerging science through prediction markets. Join a community exploring research outcomes, get direct access to project updates, and participate in a new model for funding science.
            </p>
            <p className="text-slate-400">
              Traditional grant funding wastes $28B annually on abandoned research, with researchers spending 44% of their time chasing grants. Your market participation creates a more efficient funding mechanism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <TraderFeatureCard
              icon={Zap}
              title="Provide liquidity to fuel pioneering research"
              description="Bootstrap promising research markets as a liquidity provider. Face capped losses while accessing unlimited upside potential on breakthrough discoveries. Your participation helps create deep, efficient markets for scientific predictions."
            />
            <TraderFeatureCard
              icon={Network}
              title="Bet on research outcomes"
              description="Take positions on scientific hypotheses and research milestones. Your trading activity generates direct funding for researchers while giving you the opportunity to profit from successful predictions. Access unique alpha in the scientific domain."
            />
            <TraderFeatureCard
              icon={Trophy}
              title="Profit on scientific progress"
              description="Contribute to price discovery while generating immediate cash flow for researchers. Access project updates directly from research teams to inform your trading decisions and maximize returns. Build a portfolio of scientific predictions."
            />
            <TraderFeatureCard
              icon={Microscope}
              title="Disrupt the funding paradigm"
              description="Help revolutionize how science gets funded. Traditional funding methods are inefficient and slow. Your market participation creates a more dynamic funding mechanism that lets researchers focus on breakthroughs instead of grant applications."
            />
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Benefits for Traders
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">Direct access to research teams</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">Early access to research findings</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">Capped downside, unlimited upside</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="rounded-full p-1 bg-cyan-500/10 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-slate-300">Community of scientific traders</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-8 py-5 text-lg hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Join as trader
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">FAQ</h2>
          <div className="space-y-4">
            <FAQ 
              question="What is Ideosphere and how does it work?" 
              answer="Ideosphere is a pioneering platform that connects scientific research with prediction markets. It allows traders to bet on research outcomes while simultaneously providing funding for researchers. The platform creates a unique ecosystem where market forces help drive scientific progress."
            />
            <FAQ 
              question="How do researchers receive funding through prediction markets?" 
              answer="Researchers receive funding through a percentage of trading fees and market activity on their research predictions. Every time traders place bets or provide liquidity for research outcomes, a portion of those transactions goes directly to funding the research project. This creates a continuous funding stream based on market interest."
            />
            <FAQ 
              question="How do you ensure the validity of research outcomes?" 
              answer="We use an optimistic oracle system where researchers submit their findings which can then be challenged by domain experts. Here's how it works:

1. Researchers submit their scientific claims
2. A dispute period follows where experts can verify or challenge the findings
3. Financial incentives encourage accurate reporting (rewards) and discourage false claims (penalties)

This creates a transparent system where the scientific community's expertise, combined with economic incentives, ensures reliable verification of research outcomes."
            />
            <FAQ 
              question="How do researchers submit projects and what research areas do you support?" 
              answer="Researchers can submit their projects through our online portal after creating an account. We support a wide range of research areas including life sciences, physics, chemistry, and computer science. Each submission undergoes a review process to ensure it meets our criteria for market creation, including clear outcome metrics and timeline feasibility."
            />
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-slate-400">
              Can't find the answer you're looking for? Please reach to our friendly team at{' '}
              <a href="mailto:mariana@ideosphere.io" className="text-cyan-400 hover:text-cyan-300">
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
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Ideosphere
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Markets</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Research</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy</a>
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
