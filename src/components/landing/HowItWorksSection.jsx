import React from 'react';
import { MapPin, Sliders, ShieldAlert, ArrowRight } from 'lucide-react';
import { SpotlightCard } from '../kinetics/SpotlightCard';

export const HowItWorksSection = () => {
  const STEPS = [
    {
      num: "01",
      tag: "MAP",
      title: "Identify Recharge Zones",
      description: "Identify probable spring recharge zones using geospatial, elevation, fracture lineament, and environmental satellite data.",
      icon: MapPin,
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "rgba(0, 255, 136, 0.15)"
    },
    {
      num: "02",
      tag: "PRIORITIZE",
      title: "Rank Interventions",
      description: "Find and rank micro-catchment locations where artificial recharge structures (check dams, contour trenches) have greatest impact potential.",
      icon: Sliders,
      accent: "text-teal-300",
      border: "border-teal-500/30",
      glow: "rgba(6, 182, 212, 0.15)"
    },
    {
      num: "03",
      tag: "PROTECT",
      title: "Risk & Landslide Screening",
      description: "Screen proposed sites against landslide susceptibility, steep slope instability, and hydro-geological terrain hazards.",
      icon: ShieldAlert,
      accent: "text-amber-400",
      border: "border-amber-500/30",
      glow: "rgba(245, 158, 11, 0.15)"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-dark-800/90 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
            <span>Section 4 · What DHAARA Does</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            From terrain to intervention.
          </h2>
          <p className="text-emerald-100/70 text-lg">
            A 3-step decision support system built specifically for spring-dependent mountain landscapes.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <SpotlightCard key={idx} glowColor={step.glow} className={`h-full flex flex-col justify-between border ${step.border}`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-emerald-500/40">{step.num}</span>
                    <span className={`font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-dark-900 border ${step.border} ${step.accent}`}>
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <StepIcon className={`w-6 h-6 ${step.accent}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-emerald-100/70 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-900/40 flex items-center text-xs font-mono text-emerald-300/80">
                  <span>Step {idx + 1} Automated Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto text-emerald-400" />
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
