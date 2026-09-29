import React, { useRef } from 'react';
import { X, Download, ShieldCheck, Droplets, MapPin, Award } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const HealthCardModal = ({ spring, onClose }) => {
  const cardRef = useRef(null);

  const handleExportPDF = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`DHAARA_Spring_Health_Card_${spring.id}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-400/40 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40 mb-6">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-400" />
            <span className="font-display font-bold text-xl text-white">Spring Health Card</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportPDF}
              className="px-4 py-2 rounded-xl bg-emerald-500 text-dark-900 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_#00ff88]"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button onClick={onClose} className="p-2 rounded-xl bg-dark-900 text-emerald-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Card Area */}
        <div ref={cardRef} className="p-6 bg-dark-900 rounded-2xl border border-emerald-500/30 space-y-6">
          
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-emerald-900/50 pb-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">SIH 2026 HYDROGEOLOGY REPORT</span>
              <h2 className="text-2xl font-bold text-white">{spring.name}</h2>
              <p className="text-xs text-emerald-200/70">{spring.village}, {spring.district}, {spring.state}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                ID: {spring.id}
              </span>
              <div className="text-[10px] font-mono text-emerald-400/80 mt-1">
                Elev: {spring.elevation}m ASL
              </div>
            </div>
          </div>

          {/* Flow & Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 rounded-xl bg-dark-800 border border-emerald-900/40 text-center">
              <span className="text-[10px] font-mono text-emerald-300 uppercase block">Current Discharge</span>
              <span className="text-xl font-bold text-emerald-400">{spring.dischargeLpm} LPM</span>
            </div>
            <div className="p-3 rounded-xl bg-dark-800 border border-emerald-900/40 text-center">
              <span className="text-[10px] font-mono text-emerald-300 uppercase block">Water pH</span>
              <span className="text-xl font-bold text-teal-300">{spring.ph}</span>
            </div>
            <div className="p-3 rounded-xl bg-dark-800 border border-emerald-900/40 text-center">
              <span className="text-[10px] font-mono text-emerald-300 uppercase block">Recharge Area</span>
              <span className="text-xl font-bold text-emerald-400">{spring.rechargeZoneAreaSqKm} km²</span>
            </div>
          </div>

          {/* Geological Factors Table */}
          <div>
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">Hydrogeological Indicators</h4>
            <div className="p-4 rounded-xl bg-dark-800/80 border border-emerald-900/40 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-emerald-200/70">Aquifer Type:</span>
                <span className="font-bold text-white">{spring.aquiferType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200/70">Lineament Density:</span>
                <span className="font-bold text-white">{spring.factors.lineamentDensity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200/70">Soil Permeability:</span>
                <span className="font-bold text-white">{spring.factors.soilPermeability}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200/70">Annual Rainfall:</span>
                <span className="font-bold text-white">{spring.factors.annualRainfallMm} mm</span>
              </div>
            </div>
          </div>

          {/* Scientific Disclaimer */}
          <div className="pt-2 text-[10px] font-mono text-emerald-300/60 text-center border-t border-emerald-900/40">
            DHAARA Decision Support System · Decision support for field action. Not a substitute for hydrogeological validation.
          </div>

        </div>

      </div>
    </div>
  );
};
