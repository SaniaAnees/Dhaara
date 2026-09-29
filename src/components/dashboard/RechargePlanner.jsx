import React, { useState } from 'react';
import { Sliders, Wrench, ShieldCheck, CheckCircle, Sparkles, DollarSign, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SpotlightCard } from '../kinetics/SpotlightCard';

export const RechargePlanner = ({ spring, onOpenHealthCard }) => {
  const [trenchCount, setTrenchCount] = useState(120);
  const [checkDamCount, setCheckDamCount] = useState(4);
  const [submitted, setSubmitted] = useState(false);

  const estimatedCost = (trenchCount * 1200) + (checkDamCount * 21000);
  const calculatedInfiltrationGain = Math.min(85, Math.round((trenchCount * 0.3) + (checkDamCount * 6.5)));

  const handleApplyPlan = () => {
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00ff88', '#06b6d4', '#10b981']
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <SpotlightCard className="p-6 rounded-2xl border border-emerald-500/30">
      
      <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40 mb-6">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">MODULE 02</span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Wrench className="w-5 h-5 text-emerald-400" />
            Artificial Recharge Structure (ARS) Planner
          </h3>
        </div>
        <button
          onClick={onOpenHealthCard}
          className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-xs hover:bg-emerald-500/30 transition-colors flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Export Spring Health Card (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Trench Slider */}
        <div className="p-4 rounded-xl bg-dark-900/80 border border-emerald-900/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white">Staggered Contour Trenches</span>
            <span className="text-sm font-mono font-bold text-emerald-400">{trenchCount} Units</span>
          </div>
          <input
            type="range"
            min="20"
            max="300"
            value={trenchCount}
            onChange={(e) => setTrenchCount(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer h-2 bg-dark-800 rounded-lg"
          />
          <p className="text-[11px] text-emerald-100/60 mt-2">
            Captures runoff along 15° contour slope lines. Recommended length: 3m x 0.5m x 0.5m.
          </p>
        </div>

        {/* Check Dam Slider */}
        <div className="p-4 rounded-xl bg-dark-900/80 border border-emerald-900/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white">Loose Boulder Check Dams</span>
            <span className="text-sm font-mono font-bold text-teal-300">{checkDamCount} Structures</span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            value={checkDamCount}
            onChange={(e) => setCheckDamCount(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer h-2 bg-dark-800 rounded-lg"
          />
          <p className="text-[11px] text-emerald-100/60 mt-2">
            Placed across 2nd order stream gullies to reduce peak runoff speed and siltation.
          </p>
        </div>

      </div>

      {/* Impact & Cost Summary Bar */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 to-teal-950/90 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono text-emerald-300/80 uppercase block">Estimated MGNREGA Budget</span>
          <span className="text-2xl font-bold text-white">₹{estimatedCost.toLocaleString('en-IN')}</span>
        </div>

        <div>
          <span className="text-xs font-mono text-emerald-300/80 uppercase block">Infiltration Boost</span>
          <span className="text-2xl font-bold text-emerald-400">+{calculatedInfiltrationGain}%</span>
        </div>

        <button
          onClick={handleApplyPlan}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-dark-900 font-bold text-sm shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] transition-all"
        >
          {submitted ? 'Intervention Saved!' : 'Approve & Save Masterplan'}
        </button>
      </div>

      {submitted && (
        <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-400 text-emerald-300 text-xs font-mono text-center animate-fade-in">
          ✓ Intervention masterplan registered for District Watershed Department approval.
        </div>
      )}

    </SpotlightCard>
  );
};
