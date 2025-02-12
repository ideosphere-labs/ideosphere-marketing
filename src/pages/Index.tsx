
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Microscope, Zap, Trophy } from "lucide-react";

// Neural network background animation
const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {[...Array(12)].map((_, i) => (
            <circle
              key={`node-${i}`}
              cx={20 + (i % 4) * 20}
              cy={20 + Math.floor(i / 4) * 30}
              r="1"
              className="text-cyan-500"
              fill="currentColor"
            >
              <animate
                attributeName="opacity"
                dur={`${2 + i * 0.5}s`}
                values="0.2;1;0.2"
                repeatCount="indefinite"
              />
            </circle>
          ))}
          {[...Array(20)].map((_, i) => {
            const startNode = i % 12;
            const endNode = (startNode + 3 + i % 4) % 12;
            const startX = 20 + (startNode % 4) * 20;
            const startY = 20 + Math.floor(startNode / 4) * 30;
            const endX = 20 + (endNode % 4) * 20;
            const endY = 20 + Math.floor(endNode / 4) * 30;
            
            return (
              <g key={`connection-${i}`}>
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  className="text-cyan-500"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  opacity="0.3"
                >
                  <animate
                    attributeName="opacity"
                    dur={`${3 + i * 0.2}s`}
                    values="0.1;0.4;0.1"
                    repeatCount="indefinite"
                  />
                </line>
                <circle
                  r="0.5"
                  className="text-cyan-400"
                  fill="currentColor"
                >
                  <animateMotion
                    dur={`${4 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M${startX},${startY} L${endX},${endY}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 p-8 hover:border-cyan-500/50 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="rounded-full w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// FAQ Component
const FAQ = ({ question }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex items-center justify-between">
        <h3 className="text-lg text-white">{question}</h3>
        <Network className="w-5 h-5 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
      </div>
    </div>
  </div>
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

      {/* Traders Section */}
      <section className="relative py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">For Traders</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl">
            Participate in the future of scientific funding through prediction markets. 
            Your trading activity generates direct funding for researchers while giving you 
            the opportunity to profit from successful predictions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                text: "Fuel pioneering research"
              },
              {
                icon: Network,
                text: "Bet on research outcomes"
              },
              {
                icon: Trophy,
                text: "Profit on scientific progress"
              },
              {
                icon: Microscope,
                text: "Disrupt the funding paradigm"
              }
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-cyan-400 mb-4" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
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
            <FAQ question="What is Ideosphere and how does it work?" />
            <FAQ question="How do researchers receive funding through prediction markets?" />
            <FAQ question="How do you ensure the validity of research outcomes?" />
            <FAQ question="How do researchers submit projects and what research areas do you support?" />
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
