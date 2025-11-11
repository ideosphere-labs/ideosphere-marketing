import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HeroGeometric } from "@/components/HeroGeometric";
import { TraderSection } from "@/components/TraderSection";
import { InnovatorsSection } from "@/components/InnovatorsSection";
import { DiscoveryMechanismSection } from "@/components/DiscoveryMechanismSection";
import { TraderIncentivesSection } from "@/components/TraderIncentivesSection";
import { IdeosphereTeamSection } from "@/components/IdeosphereTeamSection";
import RoadmapSection from "@/components/RoadmapSection";

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
        title1="The World’s First"
        title2="Forecast-to-Funding Network"
      />

      {/* Traders Section */}
      <TraderSection />

      {/* Trader Incentives Section */}
      <TraderIncentivesSection />

      {/* Innovators Section */}
      <InnovatorsSection />

      {/* Discovery Mechanism Section */}
      <DiscoveryMechanismSection />

      {/* Team Section */}
      <IdeosphereTeamSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* FAQ Section */}
      {/* <section className="relative py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-normal mb-12 tracking-tight">FAQ</h2>
          <div className="space-y-4">
            <FAQ
              question="What is Ideosphere and how does it work?"
              answer="Ideosphere connects forecasting with funding. Innovators submit proposals. The community forecasts feasibility and pledges funds to projects they support. When projects reach verification milestones, prediction markets track and validate their progress."
            />
            <FAQ
              question="How do innovators receive funding?"
              answer="Innovators receive funding from community members who pledge money to projects. When a project shows promise, contributors fund its verification method (the experiment or study that tests the hypothesis). Funds are held in smart contracts and released as projects reach milestones. Successful projects can become prediction markets."
            />
            <FAQ
              question="How do you ensure the validity of outcomes?"
              answer="We use an optimistic oracle system to verify results. Innovators submit findings. Domain experts can challenge these findings during a dispute period. Financial and reputational incentives reward accurate reports and penalize false claims. This combines peer validation with economic incentives."
            />
            <FAQ
              question="How does one submit projects and what fields do you support?"
              answer="Innovators submit proposals through our portal. Projects need a clear hypothesis, a verification method, and a measurable timeline. We support all falsifiable domains: life sciences, materials, physics, chemistry, computer science, and AI. After approval, the community forecasts and funds each project."
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
      </section> */}

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
