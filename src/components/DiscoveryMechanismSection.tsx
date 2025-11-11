import IncentiveMechanism from "@/components/IncentiveMechanism";

const DiscoveryMechanismSection = () => {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-300 mb-6">
            <span className="h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            Discovery Market Mechanism
          </div>
          <h2 className="text-4xl font-semibold mb-8 tracking-tight text-white">
            How Ideas Become Funded Projects
          </h2>
          <p className="text-lg text-slate-400">
            Our four-stage pipeline transforms ideas into validated projects
            through community intelligence and transparent markets.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Component */}
          <div className="flex justify-center">
            <IncentiveMechanism
              title="Community-driven validation pipeline"
              circleText="IDEA"
              badgeTexts={{
                first: "Submit",
                second: "Evaluate",
                third: "Fund",
                fourth: "Validate",
              }}
              buttonTexts={{
                first: "Innovators",
                second: "Traders",
              }}
              lightColor="#22d3ee"
            />
          </div>

          {/* Right: Process Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Proposal Submission
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Submit proposals with clear success criteria and a
                      strategy for proving or disproving the idea.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Community Evaluation
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Traders forecast feasibility, impact, and risk. Aggregated
                      predictions surface the most promising projects early.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Funding Allocation
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      High-confidence proposals receive crowdfunding through
                      smart contracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
                    04
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Outcome Validation
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Results are verified through our optimistic oracle system
                      and long-term projects become prediction markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryMechanismSection;
export { DiscoveryMechanismSection };
