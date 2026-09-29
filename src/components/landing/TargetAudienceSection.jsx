import React from 'react';
import { Landmark, Compass, Users } from 'lucide-react';
import { SpotlightCard } from '../kinetics/SpotlightCard';

export const TargetAudienceSection = () => {
  const AUDIENCES = [
    {
      icon: Landmark,
      title: "Watershed & Government Teams",
      desc: "Plan interventions across springs and watersheds at district scale with MGNREGA integration.",
      badge: "Policy & Scale"
    },
    {
      icon: Compass,
      title: "Hydrogeologists & Researchers",
      desc: "Explore recharge patterns, validate fracture zones, and refine multi-criteria environmental models.",
      badge: "Scientific Analysis"
    },
    {
      icon: Users,
      title: "Field Teams & Communities",
      desc: "Bring observations from the ground back into the planning process via mobile Spring Health Cards.",
      badge: "Ground Validation"
    }
  ];

  return (
    <section id="who-its-for" className="relative py-24 bg-dark-900 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
            <span>Section 7 · Who It's For</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Built for the people who restore landscapes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUDIENCES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <SpotlightCard key={idx} className="h-full flex flex-col justify-between border border-emerald-500/30">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 inline-block mb-4">
                    {item.badge}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-emerald-100/70 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
