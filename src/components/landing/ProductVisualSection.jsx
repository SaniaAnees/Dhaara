import React from 'react';
import { ArrowRight, Layers, Eye, ShieldCheck, MapPin, Activity } from 'lucide-react';
import { MagneticButton } from '../kinetics/MagneticButton';
import { SpotlightCard } from '../kinetics/SpotlightCard';

export const ProductVisualSection = ({ onOpenDashboard }) => {
  return (
    <section className="relative py-24 bg-dark-900 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
            <Eye className="w-4 h-4" />
            <span>Section 5 · Product Visual</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            See the landscape differently.
          </h2>
          
          <p className="text-xl font-medium text-emerald-300 mb-6">
            One spring. One watershed. A map of possibilities.
          </p>

          <p className="text-emerald-100/70 text-base max-w-2xl mx-auto">
            DHAARA transforms complex geospatial signals into an understandable planning layer for the people responsible for restoring springs.
          </p>
        </div>

        {/* Mock GIS Map Dashboard Visual Container */}
        <SpotlightCard className="p-2 sm:p-4 rounded-3xl border border-emerald-500/30 mb-12 shadow-[0_0_50px_rgba(0,255,136,0.15)]">
          
          {/* Top Bar Mock Control */}
          <div className="flex items-center justify-between px-6 py-3 bg-dark-900/90 rounded-2xl border border-emerald-900/40 mb-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-emerald-300/80 border-l border-emerald-800 pl-3">
                DHAARA HydroGIS Engine v1.0 · Kandhamal Micro-Catchment Zone
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-mono flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                Active Model Layer
              </span>
            </div>
          </div>

          {/* Map Graphic Preview with Layers & Callouts */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden border border-emerald-900/50">
            <img
              src="/images/tribal-huts.png"
              alt="Spring Micro Watershed Terrain"
              className="w-full h-full object-cover filter brightness-75 contrast-125"
            />
            
            {/* Dark GIS Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

            {/* Simulated Vector Contour Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 1000 500">
              <path d="M 0 150 Q 250 80 500 200 T 1000 120" fill="none" stroke="#00ff88" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 0 250 Q 300 180 600 320 T 1000 220" fill="none" stroke="#00ff88" strokeWidth="1.5" />
              <path d="M 0 380 Q 400 280 750 420 T 1000 350" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="450" cy="210" r="70" fill="rgba(0, 255, 136, 0.15)" stroke="#00ff88" strokeWidth="2" />
            </svg>

            {/* Pulsating Spring Orifice Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative inline-block">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-dark-900 pulsating-marker">
                  <MapPin className="w-5 h-5 fill-dark-900" />
                </div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap glass-panel px-4 py-2 rounded-xl border border-emerald-400 text-left shadow-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-bold text-xs text-white">Dev-Dhara Spring #01</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-300 mt-0.5">
                    Flow: 12.4 LPM · Recharge Index: 92% (HIGH)
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Intervention Recommendation Card */}
            <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-xl border border-emerald-500/40 max-w-sm hidden sm:block">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-300 mb-1">
                <span>RECHARGE INTERVENTION</span>
                <span className="text-emerald-400 font-bold">MATCH 95%</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Staggered Contour Trenches</h4>
              <p className="text-xs text-emerald-100/70">
                120 units recommended across 15° slope line to capture 40% more monsoon runoff.
              </p>
            </div>

          </div>

        </SpotlightCard>

        {/* CTA Button */}
        <div className="text-center">
          <MagneticButton
            onClick={onOpenDashboard}
            className="bg-gradient-to-r from-emerald-400 to-teal-400 text-dark-900 font-bold px-8 py-4 text-lg shadow-[0_0_35px_rgba(0,255,136,0.5)]"
          >
            <span>Explore the Live Demo</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
