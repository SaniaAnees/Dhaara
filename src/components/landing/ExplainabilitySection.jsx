import React from 'react';
import { CheckCircle2, ShieldCheck, AlertTriangle, Layers, Award } from 'lucide-react';
import { SpotlightCard } from '../kinetics/SpotlightCard';

export const ExplainabilitySection = () => {
  const FACTORS = [
    { label: "Recharge potential", value: "HIGH", score: 92, color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/40" },
    { label: "Terrain suitability", value: "HIGH", score: 88, color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/40" },
    { label: "Runoff potential", value: "HIGH", score: 95, color: "text-teal-300", bg: "bg-teal-500/20", border: "border-teal-500/40" },
    { label: "Landslide susceptibility", value: "LOW", score: 12, color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/40" }
  ];

  return (
    <section id="explainability" className="relative py-24 bg-dark-800/80 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 6 · Scientific Transparency</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-6">
              Every recommendation has a reason.
            </h2>

            <p className="text-emerald-100/80 text-lg leading-relaxed mb-8">
              When DHAARA identifies a potential intervention site, it shows the exact hydrogeological and terrain factors behind the recommendation. No black-box guesses.
            </p>

            {/* Scientific Responsible Banner */}
            <div className="p-6 rounded-2xl glass-panel border border-emerald-400/40 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">Core Scientific Principle</span>
              </div>
              <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                "AI assists the decision. The field validates it."
              </p>
            </div>
          </div>

          {/* Factor Breakdown Card */}
          <div className="lg:col-span-6">
            <SpotlightCard className="p-8 rounded-3xl border border-emerald-500/40">
              <div className="flex items-center justify-between pb-6 border-b border-emerald-900/40 mb-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">Sample Intervention Report</span>
                  <h3 className="text-xl font-bold text-white">Phulbani Site #04 · Contour Trenching</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
                  AHP / MCE Verified
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {FACTORS.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/80 border border-emerald-900/40">
                    <span className="text-sm font-medium text-emerald-100/90">{f.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-dark-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${f.score}%` }} />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${f.bg} ${f.color} ${f.border} border`}>
                        {f.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs font-mono text-emerald-300/70 text-center">
                Multi-Criteria Evaluation based on SRTM 30m DEM & LULC hydrogeology models
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
};
