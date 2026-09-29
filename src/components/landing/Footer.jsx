import React from 'react';
import { Droplet } from 'lucide-react';

export const Footer = ({ onOpenDashboard }) => {
  return (
    <footer className="bg-dark-900 pt-16 pb-12 border-t border-emerald-900/40 text-emerald-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/30">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <Droplet className="w-5 h-5 text-dark-900 fill-dark-900" />
              </div>
              <span className="font-display font-bold text-2xl text-emerald-400 tracking-wider">DHAARA</span>
            </div>
            
            <p className="text-emerald-100/80 text-base max-w-sm mb-6">
              Spring Intelligence for Resilient Communities.
            </p>

            <div className="text-xs font-mono text-emerald-400/80">
              Built for India's spring-dependent tribal communities.
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4">PRODUCT</h4>
              <ul className="space-y-2.5">
                <li><button onClick={onOpenDashboard} className="hover:text-emerald-400 transition-colors">Live Demo</button></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
                <li><a href="#explainability" className="hover:text-emerald-400 transition-colors">Methodology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4">PLATFORM</h4>
              <ul className="space-y-2.5">
                <li><button onClick={onOpenDashboard} className="hover:text-emerald-400 transition-colors">Recharge Mapping</button></li>
                <li><button onClick={onOpenDashboard} className="hover:text-emerald-400 transition-colors">Intervention Planning</button></li>
                <li><button onClick={onOpenDashboard} className="hover:text-emerald-400 transition-colors">Risk Assessment</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-4">ABOUT</h4>
              <ul className="space-y-2.5">
                <li><a href="#human-reason" className="hover:text-emerald-400 transition-colors">Our Approach</a></li>
                <li><a href="#who-its-for" className="hover:text-emerald-400 transition-colors">Who It Serves</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Microcopy & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/50">
          <p>© 2026 DHAARA. All rights reserved.</p>
          <p className="font-mono text-[11px] text-emerald-400/70 text-center sm:text-right">
            Decision support for field action. Not a substitute for hydrogeological validation.
          </p>
        </div>

      </div>
    </footer>
  );
};
