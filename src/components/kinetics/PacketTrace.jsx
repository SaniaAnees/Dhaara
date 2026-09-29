import React from 'react';

/**
 * 7. Packet Trace (Kinetics #7)
 * Network topology visualization with animated packet transmission streams.
 */
export const PacketTrace = () => {
  return (
    <div className="relative w-full h-24 flex items-center justify-between px-8 bg-dark-900/80 rounded-xl border border-emerald-900/40 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 100">
        <path
          d="M 50 50 L 200 20 L 350 50"
          fill="none"
          stroke="rgba(0, 255, 136, 0.15)"
          strokeWidth="2"
        />
        <path
          d="M 50 50 L 200 80 L 350 50"
          fill="none"
          stroke="rgba(6, 182, 212, 0.15)"
          strokeWidth="2"
        />

        {/* Animated Packet Stream 1 */}
        <path
          d="M 50 50 L 200 20 L 350 50"
          fill="none"
          stroke="#00ff88"
          strokeWidth="3"
          strokeDasharray="20 180"
          className="animate-[dash_2s_linear_infinite]"
        />

        {/* Animated Packet Stream 2 */}
        <path
          d="M 50 50 L 200 80 L 350 50"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="3"
          strokeDasharray="20 180"
          className="animate-[dash_2.5s_linear_infinite]"
        />
      </svg>

      {/* Nodes */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_#00ff88] border-2 border-emerald-200" />
        <span className="text-[10px] font-mono text-emerald-300 mt-1">Satellite DEM</span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_12px_#06b6d4] border-2 border-teal-200 animate-pulse" />
        <span className="text-[10px] font-mono text-teal-300 mt-1">AI Geo-Engine</span>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#00ff88] border-2 border-emerald-200" />
        <span className="text-[10px] font-mono text-emerald-300 mt-1">Field Action</span>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -200;
          }
        }
      `}</style>
    </div>
  );
};
