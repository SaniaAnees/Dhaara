import { assessmentFor, DEMO_PROFILE } from '../data/demoAnalysis';

// Deliberately local and deterministic: this is a demo model, not a simulated API.
export async function runDemoAnalysis(spring, onStage) {
  const assessment = assessmentFor(spring);
  const stages = [
    ['context', 'Reading spring and terrain context'],
    ['evidence', 'Assessing available evidence layers'],
    ['screening', 'Screening recharge and terrain risk'],
  ];

  for (const [id, label] of stages) {
    onStage({ id, label });
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }

  return {
    spring,
    profile: {
      ...DEMO_PROFILE,
      elevation: `${spring.elevation} m`,
      geology: spring.geology,
      landCover: spring.land,
      observations: spring.discharge2010 ? `2010: ${spring.discharge2010} → ${spring.observation_date}: ${spring.observed_discharge}` : spring.observed_discharge,
    },
    evidence: [['Terrain', assessment.terrain], ['Rainfall', assessment.rainfall], ['Drainage', assessment.drainage], ['Risk screening', assessment.risk]],
    rechargeScore: assessment.suitability,
    confidence: assessment.confidence >= 70 ? 'Good' : 'Partial',
    confidenceScore: assessment.confidence,
  };
}
