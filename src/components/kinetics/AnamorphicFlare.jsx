import React from 'react';

/**
 * 17. Anamorphic Flare (Kinetics #17)
 * Cinematic horizontal lens flare with blue/amber streaks across black header.
 */
export const AnamorphicFlare = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden z-20">
      <div className="relative w-full h-full">
        {/* Moving Lens Streak Point */}
        <div className="animate-flare absolute top-1/2 left-0 w-48 h-1 -translate-y-1/2 rounded-full blur-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #38bdf8 30%, #ffffff 50%, #f59e0b 70%, transparent 100%)',
            boxShadow: '0 0 25px 8px rgba(0, 255, 136, 0.4)'
          }}
        />
      </div>
    </div>
  );
};
