import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../kinetics/MagneticButton';

export const VisionSection = ({ onOpenDashboard }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-dark-900 border-b border-emerald-900/30">
      {/* Vibrant Lush Green Tree Backdrop Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tribal-huts.png"
          alt="Lush Green Mango Canopy & Tribal Huts"
          className="w-full h-full object-cover object-center opacity-70 filter saturate-[1.4] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-8">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Section 8 · The Vision</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-8">
          A living map of India's springs.
        </h2>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-emerald-100/90 leading-relaxed mb-10">
          DHAARA is built around a simple idea: <br />
          <strong className="text-emerald-400 font-medium">
            Better understanding of the landscape can lead to better decisions about the water that sustains it.
          </strong>
        </p>

        {/* 3 Step Simple Vision Bullets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-emerald-200/80 font-mono text-sm mb-16">
          <span className="px-4 py-2 rounded-xl bg-dark-800/80 border border-emerald-900/50">Start with one spring.</span>
          <span className="hidden sm:inline text-emerald-500">→</span>
          <span className="px-4 py-2 rounded-xl bg-dark-800/80 border border-emerald-900/50">Understand its watershed.</span>
          <span className="hidden sm:inline text-emerald-500">→</span>
          <span className="px-4 py-2 rounded-xl bg-dark-800/80 border border-emerald-900/50">Find where restoration can begin.</span>
        </div>

        {/* Final CTA Box */}
        <div className="relative overflow-hidden glass-panel p-10 sm:p-16 rounded-3xl border border-emerald-400/50 max-w-4xl mx-auto shadow-[0_0_60px_rgba(0,255,136,0.2)]">
          {/* CTA Internal Backdrop Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/natural-spring-well.png"
              alt="Natural Spring Orifice"
              className="w-full h-full object-cover opacity-50 filter saturate-[1.3] brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/70 to-dark-900/80" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Find where the water begins.
            </h3>

            <p className="text-emerald-100/90 text-lg mb-8 font-medium">
              Explore a spring. Map its recharge. Plan its revival.
            </p>

            <MagneticButton
              onClick={onOpenDashboard}
              className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 text-dark-900 font-bold px-10 py-5 text-xl shadow-[0_0_40px_rgba(0,255,136,0.7)]"
            >
              <span>See It Live</span>
              <ArrowRight className="w-6 h-6 ml-2" />
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};
