import React from 'react';
import { PacketTrace } from '../kinetics/PacketTrace';
import { Mountain, CloudRain, GitBranch, Layers, Trees, Map } from 'lucide-react';

export const ProblemSection = () => {
  const SIGNALS = [
    { icon: Mountain, name: "Terrain Elevation", detail: "DEM Slope & Aspect contours" },
    { icon: CloudRain, name: "Rainfall Patterns", detail: "Isohyetal precipitation density" },
    { icon: GitBranch, name: "Drainage Channels", detail: "Stream orders & runoff lines" },
    { icon: Layers, name: "Geology & Lithology", detail: "Fractured rock permeability" },
    { icon: Trees, name: "Vegetation & Canopy", detail: "NDVI Infiltration index" },
    { icon: Map, name: "Land Use / LULC", detail: "Micro-catchment soil cover" }
  ];

  return (
    <section className="relative py-24 bg-dark-900 border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-4">
              <span>Section 3 · The Core Challenge</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              The water is there.<br />
              <span className="shimmer-text">The challenge is knowing where to look.</span>
            </h2>

            <p className="text-emerald-100/80 text-lg leading-relaxed mb-6">
              Spring recharge zones are shaped by terrain, rainfall, drainage, geology, vegetation, and land use. Finding that relationship traditionally requires tedious, physical hydrogeological field surveys across thousands of square kilometers.
            </p>

            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 font-mono text-sm">
              <span className="text-emerald-400 font-bold mr-2">&gt; DHAARA Signal Integration:</span>
              Synthesizing multi-spectral satellite remote sensing, SRTM elevation, and structural fracture lines into unified recharge layers.
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-3">Live Signal Network Stream</span>
              <PacketTrace />
              <div className="mt-4 text-xs font-mono text-emerald-200/60 text-center">
                Real-time geospatial packet synthesis active
              </div>
            </div>
          </div>

        </div>

        {/* 6 Environmental Signal Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SIGNALS.map((signal, idx) => {
            const IconComponent = signal.icon;
            return (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-emerald-900/40 hover:border-emerald-500/40 transition-colors">
                <IconComponent className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">{signal.name}</h4>
                <p className="text-[11px] text-emerald-100/60 leading-tight">{signal.detail}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
