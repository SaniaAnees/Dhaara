import React from 'react';
import { SpotlightCard } from '../kinetics/SpotlightCard';
import { PolarizedFoil } from '../kinetics/PolarizedFoil';
import { HeartHandshake, Droplets, Wheat, Footprints, Trees } from 'lucide-react';

export const HumanReasonSection = () => {
  return (
    <section id="human-reason" className="relative py-24 bg-dark-800/80 border-y border-emerald-900/30 overflow-hidden">
      {/* Background Image Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/tribal-community-1.png"
          alt="Tribal Village in Lush Forest Valley"
          className="w-full h-full object-cover opacity-60 filter saturate-[1.3] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/80 to-dark-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
            <HeartHandshake className="w-4 h-4" />
            <span>Section 2 · The Human Reason</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-6">
            For communities, a spring is more than a water source.
          </h2>
          <p className="text-emerald-100/70 text-lg">
            In indigenous mountain and forest belts across India, natural springs ("Naula" / "Dhara") sustain all human life, culture, and agriculture.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <SpotlightCard className="h-full flex flex-col justify-between">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It is drinking water.</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Clean, mineral-rich underground flow that supplies pristine water to villages throughout the dry months.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400/80 pt-4 border-t border-emerald-900/40">
              Daily Hydration Security
            </div>
          </SpotlightCard>

          <SpotlightCard className="h-full flex flex-col justify-between">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-900/60 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-4">
                <Wheat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It is agriculture.</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Nourishing terraced rice paddies, indigenous crops, and livestock across rugged hillside terrain.
              </p>
            </div>
            <div className="text-xs font-mono text-teal-300/80 pt-4 border-t border-emerald-900/40">
              Livelihood & Farming
            </div>
          </SpotlightCard>

          <SpotlightCard className="h-full flex flex-col justify-between">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Footprints className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It is a daily journey.</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                When springs dry up, women and children walk miles down steep ravines to collect remaining water drops.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400/80 pt-4 border-t border-emerald-900/40">
              Community Well-being
            </div>
          </SpotlightCard>

          <SpotlightCard className="h-full flex flex-col justify-between">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">It is part of the landscape.</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Sacred sacred heritage, forest ecosystems, and indigenous wisdom preserved for generations.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400/80 pt-4 border-t border-emerald-900/40">
              Generational Heritage
            </div>
          </SpotlightCard>

        </div>

        {/* Authentic User Images Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <PolarizedFoil className="group">
            <div className="h-64 overflow-hidden relative">
              <img
                src="/images/tribal-community-1.png"
                alt="Tribal Village in Forest Valley"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Tribal Settlement</span>
                <p className="text-sm font-semibold text-white">Forest Mountain Valley Community</p>
              </div>
            </div>
          </PolarizedFoil>

          <PolarizedFoil className="group">
            <div className="h-64 overflow-hidden relative">
              <img
                src="/images/tribal-village-hill.jpg"
                alt="Tribal Hillside Village"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Terrain Vulnerability</span>
                <p className="text-sm font-semibold text-white">Steep Slopes & Drying Watersheds</p>
              </div>
            </div>
          </PolarizedFoil>

          <PolarizedFoil className="group">
            <div className="h-64 overflow-hidden relative">
              <img
                src="/images/natural-spring-well.png"
                alt="Natural Spring Orifice"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-teal-300 uppercase tracking-widest block mb-1">The Natural Spring</span>
                <p className="text-sm font-semibold text-white">Traditional Stone Spring Orifice ("Naula")</p>
              </div>
            </div>
          </PolarizedFoil>

        </div>

        {/* Section Callout Line */}
        <div className="max-w-3xl mx-auto text-center glass-panel p-8 rounded-2xl border border-emerald-500/30">
          <p className="text-xl sm:text-2xl font-display font-medium text-emerald-200 leading-snug">
            "But when springs weaken, knowing where and how to restore them is difficult."
          </p>
        </div>

      </div>
    </section>
  );
};
