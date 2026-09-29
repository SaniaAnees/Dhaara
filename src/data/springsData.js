export const SPRINGS_DATA = [
  {
    id: "SP-ORG-01",
    name: "Kandhamal Dev-Dhara Spring",
    village: "Phulbani Tribal Belt",
    district: "Kandhamal",
    state: "Odisha",
    lat: 20.4725,
    lng: 84.2312,
    elevation: 685, // meters
    status: "Seasonal / Weakening", // "Active", "Weakening", "Dried"
    dischargeLpm: 12.4, // Liters per Minute
    historicalDischargeLpm: 45.0,
    ph: 6.8,
    turbidityNtu: 1.2,
    coliformStatus: "Safe",
    aquiferType: "Fractured Weathered Khondalite Rock",
    rechargeZoneAreaSqKm: 1.85,
    rechargePotential: "HIGH",
    terrainSuitability: "HIGH",
    runoffPotential: "HIGH",
    landslideRisk: "LOW",
    confidenceScore: 92,
    factors: {
      slopeDeg: 14.2,
      lineamentDensity: "High (2.4 km/sq.km)",
      soilPermeability: "Moderate-High Infiltration (Sandy Loam)",
      vegetationNdvi: 0.68,
      annualRainfallMm: 1450
    },
    recommendedStructures: [
      {
        type: "Contour Trenches",
        units: 120,
        estimatedCost: "₹1,45,000",
        impact: "+40% Infiltration increase",
        description: "Staggered contour trenches along 15° slope line to capture monsoon runoff."
      },
      {
        type: "Loose Boulder Check Dam",
        units: 4,
        estimatedCost: "₹85,000",
        impact: "Reduces peak stream velocity by 65%",
        description: "Dry stone masonry check dams across 2nd order stream channel."
      }
    ]
  },
  {
    id: "SP-WGH-04",
    name: "Sahyadri Amba-Jhar Spring",
    village: "Maldoli Tribal Hamlet",
    district: "Ratnagiri",
    state: "Maharashtra (Western Ghats)",
    lat: 17.2911,
    lng: 73.6820,
    elevation: 840,
    status: "Weakening",
    dischargeLpm: 8.2,
    historicalDischargeLpm: 38.0,
    ph: 7.1,
    turbidityNtu: 0.9,
    coliformStatus: "Safe",
    aquiferType: "Vesicular Basalt & Fractured Deccan Trap",
    rechargeZoneAreaSqKm: 2.40,
    rechargePotential: "HIGH",
    terrainSuitability: "HIGH",
    runoffPotential: "VERY HIGH",
    landslideRisk: "MEDIUM",
    confidenceScore: 89,
    factors: {
      slopeDeg: 22.5,
      lineamentDensity: "High (3.1 km/sq.km)",
      soilPermeability: "High Infiltration (Weathered Basalt Soil)",
      vegetationNdvi: 0.74,
      annualRainfallMm: 3100
    },
    recommendedStructures: [
      {
        type: "Staggered Infiltration Pits",
        units: 85,
        estimatedCost: "₹1,10,000",
        impact: "Direct aquifer recharge boost",
        description: "Deep gravel-filled percolation shafts near lineament intersection."
      },
      {
        type: "Percolation Tank with Gabion Structure",
        units: 1,
        estimatedCost: "₹2,30,000",
        impact: "Sustains spring flow through dry summer months",
        description: "Gabion reinforced holding pond upstream of main spring orifice."
      }
    ]
  },
  {
    id: "SP-JHK-09",
    name: "Netarhat Chhuwa Spring",
    village: "Palamu Tribal Settlement",
    district: "Latehar",
    state: "Jharkhand",
    lat: 23.4833,
    lng: 84.2667,
    elevation: 980,
    status: "Drying",
    dischargeLpm: 2.1,
    historicalDischargeLpm: 28.0,
    ph: 6.4,
    turbidityNtu: 2.8,
    coliformStatus: "Requires Filtration",
    aquiferType: "Lateritic Cap over Precambrian Gneiss",
    rechargeZoneAreaSqKm: 1.20,
    rechargePotential: "MEDIUM",
    terrainSuitability: "HIGH",
    runoffPotential: "HIGH",
    landslideRisk: "LOW",
    confidenceScore: 86,
    factors: {
      slopeDeg: 11.8,
      lineamentDensity: "Moderate (1.8 km/sq.km)",
      soilPermeability: "Moderate Infiltration (Porous Laterite)",
      vegetationNdvi: 0.52,
      annualRainfallMm: 1280
    },
    recommendedStructures: [
      {
        type: "Sub-surface Dyke / Clay Core Wall",
        units: 1,
        estimatedCost: "₹1,80,000",
        impact: "Blocks underground seepage outflow",
        description: "Impenetrable subsurface barrier installed at narrow valley bottleneck."
      }
    ]
  },
  {
    id: "SP-UK-12",
    name: "Almora Naula Revival",
    village: "Jainti Tribal Watershed",
    district: "Almora",
    state: "Uttarakhand",
    lat: 29.5986,
    lng: 79.6482,
    elevation: 1640,
    status: "Active / Monitored",
    dischargeLpm: 24.5,
    historicalDischargeLpm: 50.0,
    ph: 7.4,
    turbidityNtu: 0.5,
    coliformStatus: "Pristine",
    aquiferType: "Quartzite & Muscovite Schist Fractures",
    rechargeZoneAreaSqKm: 3.10,
    rechargePotential: "HIGH",
    terrainSuitability: "VERY HIGH",
    runoffPotential: "MODERATE",
    landslideRisk: "LOW",
    confidenceScore: 95,
    factors: {
      slopeDeg: 18.0,
      lineamentDensity: "Very High (3.8 km/sq.km)",
      soilPermeability: "High Infiltration (Forest Oak Soil)",
      vegetationNdvi: 0.81,
      annualRainfallMm: 1620
    },
    recommendedStructures: [
      {
        type: "Bio-fencing & Oak Afforestation",
        units: 500, // Trees
        estimatedCost: "₹95,000",
        impact: "Long-term soil organic carbon & root retention",
        description: "Native broad-leaf oak plantation on structural recharge crown."
      }
    ]
  }
];
