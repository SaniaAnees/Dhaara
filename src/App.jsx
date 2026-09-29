import React, { useState } from 'react';
import { Header } from './components/landing/Header';
import { HeroSection } from './components/landing/HeroSection';
import { HumanReasonSection } from './components/landing/HumanReasonSection';
import { ProblemSection } from './components/landing/ProblemSection';
import { HowItWorksSection } from './components/landing/HowItWorksSection';
import { ProductVisualSection } from './components/landing/ProductVisualSection';
import { ExplainabilitySection } from './components/landing/ExplainabilitySection';
import { TargetAudienceSection } from './components/landing/TargetAudienceSection';
import { VisionSection } from './components/landing/VisionSection';
import { Footer } from './components/landing/Footer';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { CursorTrail } from './components/kinetics/CursorTrail';

export function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'dashboard'

  return (
    <div className="relative min-h-screen bg-dark-900 text-emerald-50 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Kinetics Cursor Trail */}
      <CursorTrail />

      {currentView === 'landing' ? (
        <>
          <Header onOpenDashboard={() => setCurrentView('dashboard')} />
          <main>
            <HeroSection onOpenDashboard={() => setCurrentView('dashboard')} />
            <HumanReasonSection />
            <ProblemSection />
            <HowItWorksSection />
            <ProductVisualSection onOpenDashboard={() => setCurrentView('dashboard')} />
            <ExplainabilitySection />
            <TargetAudienceSection />
            <VisionSection onOpenDashboard={() => setCurrentView('dashboard')} />
          </main>
          <Footer onOpenDashboard={() => setCurrentView('dashboard')} />
        </>
      ) : (
        <DashboardLayout onBackToLanding={() => setCurrentView('landing')} />
      )}
    </div>
  );
}

export default App;
