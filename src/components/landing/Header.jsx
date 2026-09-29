import React from 'react';
import { Droplet, MapPin, Layers, Sparkles } from 'lucide-react';
import { MagneticButton } from '../kinetics/MagneticButton';
import { AnamorphicFlare } from '../kinetics/AnamorphicFlare';

export const Header = ({ onOpenDashboard }) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-emerald-900/30">
      <AnamorphicFlare />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.3)]">
            <Droplet className="w-6 h-6 text-dark-900 fill-dark-900" />
          </div>
          <div>
            <span className="font-display font-bold text-2xl tracking-wider text-emerald-400">DHAARA</span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300">
              Spring AI
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-100/70">
          <a href="#human-reason" className="underline-draw hover:text-emerald-300 transition-colors">Why Springs</a>
          <a href="#how-it-works" className="underline-draw hover:text-emerald-300 transition-colors">3-Step System</a>
          <a href="#explainability" className="underline-draw hover:text-emerald-300 transition-colors">Explainable AI</a>
          <a href="#who-its-for" className="underline-draw hover:text-emerald-300 transition-colors">Who It's For</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <MagneticButton
            onClick={onOpenDashboard}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-dark-900 font-semibold shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)]"
          >
            <Sparkles className="w-4 h-4 fill-dark-900" />
            <span>Launch Live GIS Demo</span>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
