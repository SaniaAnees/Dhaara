import React, { useState } from 'react';
import { SPRINGS_DATA } from '../../data/springsData';
import { MapPin, Layers, Info, Compass, ShieldAlert, Sparkles, Droplets } from 'lucide-react';

export const InteractiveMap = ({ selectedSpring, onSelectSpring }) => {
  const [activeLayer, setActiveLayer] = useState('ALL'); // 'ALL', 'RECHARGE', 'LINEAMENTS', 'DEM'

  return (
    <div className="relative w-full h-full min-h-[550px] bg-dark-900 rounded-2xl overflow-hidden border border-emerald-900/50 flex flex-col">
      
      {/* Top Map Layer Controls */}
      <div className="absolute top-4 left-4 z-[1000] glass-panel p-2.5 rounded-xl border border-emerald-500/30 flex items-center gap-2">
        <span className="text-xs font-mono text-emerald-400 font-bold px-2">LAYERS:</span>
        <button
          onClick={() => setActiveLayer('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${activeLayer === 'ALL' ? 'bg-emerald-500 text-dark-900 font-bold' : 'text-emerald-300 hover:bg-emerald-950'}`}
        >
          Spring Markers
        </button>
        <button
          onClick={() => setActiveLayer('RECHARGE')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${activeLayer === 'RECHARGE' ? 'bg-emerald-500 text-dark-900 font-bold' : 'text-emerald-300 hover:bg-emerald-950'}`}
        >
          Recharge Polygons
        </button>
        <button
          onClick={() => setActiveLayer('LINEAMENTS')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${activeLayer === 'LINEAMENTS' ? 'bg-emerald-500 text-dark-900 font-bold' : 'text-emerald-300 hover:bg-emerald-950'}`}
        >
          Lineaments & Fractures
        </button>
      </div>

      {/* Simulated Interactive HydroGIS Graphic Map Interface */}
      <div className="relative flex-1 bg-[#02180e] overflow-hidden flex items-center justify-center p-6">
        
        {/* Synthetic Vector Topography & Contours */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Topography Contours */}
            <path d="M 50 100 Q 250 20 500 120 T 950 80" fill="none" stroke="#00ff88" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 50 200 Q 300 140 600 240 T 950 180" fill="none" stroke="#00ff88" strokeWidth="2" />
            <path d="M 50 320 Q 350 220 700 360 T 950 280" fill="none" stroke="#06b6d4" strokeWidth="2" />
            <path d="M 50 450 Q 400 350 750 480 T 950 400" fill="none" stroke="#00ff88" strokeWidth="1" strokeDasharray="2 4" />

            {/* Fracture Lineament Lines */}
            {(activeLayer === 'ALL' || activeLayer === 'LINEAMENTS') && (
              <>
                <line x1="200" y1="50" x2="450" y2="450" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="8 4" />
                <line x1="600" y1="100" x2="800" y2="500" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
              </>
            )}

            {/* Recharge Zone Heatmap Polygons */}
            {(activeLayer === 'ALL' || activeLayer === 'RECHARGE') && (
              <>
                <path d="M 180 180 Q 260 120 340 200 T 260 320 Z" fill="rgba(0, 255, 136, 0.2)" stroke="#00ff88" strokeWidth="2" />
                <path d="M 520 280 Q 640 200 740 320 T 600 440 Z" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
              </>
            )}
          </svg>
        </div>

        {/* Interactive Spring Location Nodes */}
        <div className="relative z-10 w-full max-w-4xl h-[420px] flex items-center justify-around">
          
          {SPRINGS_DATA.map((spring, idx) => {
            const isSelected = selectedSpring?.id === spring.id;
            return (
              <div
                key={spring.id}
                onClick={() => onSelectSpring(spring)}
                className="group relative cursor-pointer flex flex-col items-center transition-all duration-300"
              >
                {/* Node Marker Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-emerald-400 text-dark-900 shadow-[0_0_25px_#00ff88] scale-125 ring-4 ring-emerald-300/40'
                      : 'bg-emerald-950/90 border-2 border-emerald-400 text-emerald-300 hover:scale-110'
                  }`}
                >
                  <Droplets className="w-5 h-5 fill-current" />
                </div>

                {/* Status Indicator Tag */}
                <div className={`mt-2 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold shadow-lg border ${
                  spring.status.includes('Active')
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                    : spring.status.includes('Weakening')
                    ? 'bg-amber-950 border-amber-500 text-amber-300'
                    : 'bg-rose-950 border-rose-500 text-rose-300'
                }`}>
                  {spring.name}
                </div>

                {/* Tooltip Card */}
                <div className="absolute top-16 z-20 w-64 glass-panel p-4 rounded-xl border border-emerald-400/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                  <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300 mb-1">
                    <span>{spring.village}</span>
                    <span className="text-emerald-400 font-bold">{spring.dischargeLpm} LPM</span>
                  </div>
                  <p className="text-xs font-bold text-white mb-2">{spring.aquiferType}</p>
                  <div className="text-[10px] font-mono text-emerald-200/70">
                    Recharge Area: {spring.rechargeZoneAreaSqKm} km² · Score: {spring.confidenceScore}%
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 glass-panel p-3 rounded-xl border border-emerald-900/40 text-[11px] font-mono space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-200">Structural Recharge Polygon</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-amber-400" />
            <span className="text-emerald-200">Fracture Lineament</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            <span className="text-emerald-200">Active Spring Orifice</span>
          </div>
        </div>

      </div>

    </div>
  );
};
