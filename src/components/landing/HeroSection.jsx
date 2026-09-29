import React from 'react';
import { ArrowRight, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { MagneticButton } from '../kinetics/MagneticButton';
import { ScrambleText } from '../kinetics/ScrambleText';
import { Typewriter } from '../kinetics/Typewriter';

export const HeroSection = ({ onOpenDashboard }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-24 overflow-hidden">
      {/* Background Image Layer with Emerald Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-landscape.png"
          alt="Indian Mountain Terraced Landscape"
          className="w-full h-full object-cover object-center opacity-30 filter saturate-[1.2] brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/80 to-dark-900" />
        <div className="absolute inset-0 dither-grid opacity-25 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Brand Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-8 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Geo-AI Spring Recharge Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          <span className="block text-emerald-100 mb-2">Water begins somewhere.</span>
          <span className="shimmer-text">
            <ScrambleText text="We help you find where it comes from." speed={30} />
          </span>
        </h1>

        {/* Paragraph Description */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-emerald-100/80 font-normal leading-relaxed mb-10">
          AI-powered geospatial intelligence for spring recharge, revival, and watershed planning in India's vulnerable and tribal regions.
        </p>

        {/* Typewriter Interactive Tagline */}
        <div className="mb-10 text-emerald-300/90 font-mono text-sm sm:text-base h-8 flex items-center justify-center">
          <span className="text-emerald-500/70 mr-2">&gt;</span>
          <Typewriter
            phrases={[
              "Delineating structural recharge aquifers automatically...",
              "Mapping micro-catchments in Western & Eastern Ghats...",
              "Prioritizing check dams & contour trenches for Jal Saths...",
              "Protecting tribal water security against seasonal drought..."
            ]}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <MagneticButton
            onClick={onOpenDashboard}
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 text-dark-900 font-bold text-base px-8 py-4 shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_45px_rgba(0,255,136,0.7)]"
          >
            <span>See It Live</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </MagneticButton>

          <MagneticButton
            href="https://github.com/SaniaAnees"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto glass-panel border border-emerald-500/30 text-emerald-200 hover:text-emerald-400 hover:border-emerald-400 font-medium text-base px-8 py-4"
          >
            <span>Get Started</span>
          </MagneticButton>
        </div>

        {/* Supporting Micro Copy */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300/60 uppercase tracking-wider">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>From landscape data to actionable intervention sites.</span>
        </div>
      </div>
    </section>
  );
};
