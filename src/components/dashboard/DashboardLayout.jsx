import React, { useState } from 'react';
import { SPRINGS_DATA } from '../../data/springsData';
import { InteractiveMap } from './InteractiveMap';
import { RechargePlanner } from './RechargePlanner';
import { HealthCardModal } from './HealthCardModal';
import { ArrowLeft, Droplets, MapPin, Activity, ShieldCheck, Download, Search, LogOut } from 'lucide-react';
import { SpotlightCard } from '../kinetics/SpotlightCard';

export const DashboardLayout = ({ onBackToLanding, onLogout, user }) => {
  const [selectedSpring, setSelectedSpring] = useState(SPRINGS_DATA[0]);
  const [showHealthCard, setShowHealthCard] = useState(false);

  return (
    <div className="min-h-screen bg-dark-900 text-emerald-50">
      
      {/* Dashboard Topbar */}
      <header className="sticky top-0 z-40 glass-panel border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToLanding}
              className="p-2 rounded-xl bg-dark-800 text-emerald-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Landing Page</span>
            </button>
            <div className="h-6 w-px bg-emerald-900/60" />
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              <span className="font-display font-bold text-lg text-white">DHAARA HydroGIS Console</span>
            </div>
          </div>

          {/* Spring Selector dropdown */}
          <div className="flex items-center gap-3">
            {user && (
              <button onClick={onLogout} className="px-3 py-1.5 rounded-xl bg-dark-800 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-1.5 hover:text-white transition-colors" title={`Sign out ${user.email || ''}`}>
                <LogOut className="w-3.5 h-3.5" />
                <span>Log out</span>
              </button>
            )}
            <select
              value={selectedSpring.id}
              onChange={(e) => {
                const s = SPRINGS_DATA.find((item) => item.id === e.target.value);
                if (s) setSelectedSpring(s);
              }}
              className="px-3 py-1.5 rounded-xl bg-dark-800 border border-emerald-500/30 text-emerald-300 text-xs font-mono cursor-pointer outline-none"
            >
              {SPRINGS_DATA.map((sp) => (
                <option key={sp.id} value={sp.id}>
                  {sp.name} ({sp.district})
                </option>
              ))}
            </select>
          </div>

        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Selected Spring Info Bar */}
        <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                {selectedSpring.id}
              </span>
              <span className="text-xs text-emerald-300/80 font-mono">
                {selectedSpring.village}, {selectedSpring.district}, {selectedSpring.state}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">{selectedSpring.name}</h1>
          </div>

          {/* Key Quick Stats */}
          <div className="flex items-center gap-4 text-center">
            <div className="px-4 py-2 rounded-xl bg-dark-900 border border-emerald-900/50">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Flow Discharge</span>
              <span className="text-lg font-bold text-white">{selectedSpring.dischargeLpm} LPM</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-dark-900 border border-emerald-900/50">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Recharge Index</span>
              <span className="text-lg font-bold text-emerald-400">{selectedSpring.confidenceScore}%</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-dark-900 border border-emerald-900/50">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Status</span>
              <span className="text-xs font-bold text-amber-300">{selectedSpring.status}</span>
            </div>
          </div>
        </div>

        {/* Map & Hydro Factors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 h-[550px]">
            <InteractiveMap selectedSpring={selectedSpring} onSelectSpring={setSelectedSpring} />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <SpotlightCard className="p-6 rounded-2xl border border-emerald-500/30">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">RECHARGE SCORING</span>
              <h3 className="text-lg font-bold text-white mb-4">Multi-Criteria Evaluation</h3>

              <div className="space-y-3 text-xs mb-6">
                <div className="flex justify-between p-2.5 rounded-lg bg-dark-900 border border-emerald-900/40">
                  <span className="text-emerald-200/80">Recharge Potential:</span>
                  <span className="font-bold text-emerald-400">{selectedSpring.rechargePotential}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-dark-900 border border-emerald-900/40">
                  <span className="text-emerald-200/80">Terrain Suitability:</span>
                  <span className="font-bold text-emerald-400">{selectedSpring.terrainSuitability}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-dark-900 border border-emerald-900/40">
                  <span className="text-emerald-200/80">Runoff Potential:</span>
                  <span className="font-bold text-teal-300">{selectedSpring.runoffPotential}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-dark-900 border border-emerald-900/40">
                  <span className="text-emerald-200/80">Landslide Susceptibility:</span>
                  <span className="font-bold text-emerald-400">{selectedSpring.landslideRisk}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                ✓ Structural catchment verified via DEM slope gradient ({selectedSpring.factors.slopeDeg}°)
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Structure Planner Section */}
        <RechargePlanner spring={selectedSpring} onOpenHealthCard={() => setShowHealthCard(true)} />

      </main>

      {/* PDF Modal */}
      {showHealthCard && (
        <HealthCardModal spring={selectedSpring} onClose={() => setShowHealthCard(false)} />
      )}

    </div>
  );
};
