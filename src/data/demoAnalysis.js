export const DEMO_NOTICE = 'Historical springshed intervention records supplied for DHAARA. They are evidence, not proof that the same intervention will work elsewhere.';

export const DEMO_SPRINGS = [
  { spring_id: 'AITA-INT', name: 'Aita Barey Dhara', latitude: 27.189017, longitude: 88.23105, elevation: 1600, region: 'Deythang GP, Kaluk Block, Sikkim', geology: 'Phyllite + quartzite', land: 'Community', type: 'Fracture spring', rechargeArea: '5 ha', structureVolume: '454 m³', discharge2010: '3 L/min', observed_discharge: '11 L/min', observation_date: '2011', source: 'Historical intervention study' },
  { spring_id: 'DOKUNG-INT', name: 'Dokung Dhara', latitude: 27.1976, longitude: 88.300467, elevation: 1200, region: 'Takuthang GP, Kaluk Block, Sikkim', geology: 'Phyllite', land: 'Reserve forest', type: 'Depression spring', rechargeArea: '7 ha', structureVolume: '349 m³', discharge2010: '4 L/min', observed_discharge: '17 L/min', observation_date: '2011', source: 'Historical intervention study' },
  { spring_id: 'NUNTHALEY-INT', name: 'Nunthaley Dhara', latitude: 27.1888, longitude: 88.231, elevation: 1600, region: 'Deythang GP, Kaluk Block, Sikkim', geology: 'Quartzite + phyllite', land: 'Community', type: 'Depression spring', rechargeArea: '5 ha', structureVolume: '152 m³', discharge2010: '3 L/min', observed_discharge: '11 L/min', observation_date: '2011', source: 'Historical intervention study' },
  { spring_id: 'KHARKHAREY-INT', name: 'Kharkharey Dhara', latitude: 27.2019, longitude: 88.239183, elevation: 1560, region: 'Deythang GP, Kaluk Block, Sikkim', geology: 'Phyllite', land: 'Reserve forest', type: 'Fracture spring', rechargeArea: '5 ha', structureVolume: '222 m³', discharge2010: '2 L/min', observed_discharge: '8 L/min', observation_date: '2011', source: 'Historical intervention study' },
  { spring_id: 'MALAGIRI-INT', name: 'Malagiri Dhara', latitude: null, longitude: null, elevation: 975, region: 'Lungchok Kamarey GP, Melli Block, Sikkim', geology: 'Phyllite', land: 'Private', type: 'Depression spring', rechargeArea: '13 ha', structureVolume: '841 m³', discharge2010: '7 L/min', observed_discharge: '20 L/min', observation_date: '2011', source: 'Historical intervention study · coordinates unavailable in supplied record' },
  { spring_id: 'SP1', name: 'Karkharey Khola', latitude: 27.2019, longitude: 88.239183, elevation: 1562, region: 'Kaluk Block, Sikkim', geology: 'Not specified in technical record', land: 'Not specified', type: 'Fracture spring', observed_discharge: 'Historical discharge not supplied', observation_date: 'Technical study', source: 'Government technical study · SP1' },
  { spring_id: 'SP2', name: 'Nun Thaley', latitude: 27.1888, longitude: 88.231, elevation: 1604, region: 'Kaluk Block, Sikkim', geology: 'Not specified in technical record', land: 'Not specified', type: 'Depression spring', observed_discharge: 'Historical discharge not supplied', observation_date: 'Technical study', source: 'Government technical study · SP2' },
  { spring_id: 'SP3', name: 'Aita Barey', latitude: 27.189017, longitude: 88.23105, elevation: 1604, region: 'Kaluk Block, Sikkim', geology: 'Not specified in technical record', land: 'Not specified', type: 'Fracture spring', observed_discharge: 'Historical discharge not supplied', observation_date: 'Technical study', source: 'Government technical study · SP3' },
  { spring_id: 'SP4', name: 'Dhokung Dhara', latitude: 27.1976, longitude: 88.300467, elevation: 1192, region: 'Kaluk Block, Sikkim', geology: 'Not specified in technical record', land: 'Not specified', type: 'Depression spring', observed_discharge: 'Historical discharge not supplied', observation_date: 'Technical study', source: 'Government technical study · SP4' },
];

export const DEMO_PROFILE = { elevation: '685 m', annualRainfall: '1,450 mm', slope: '14.2°', landCover: 'Forest / mixed agriculture', drainage: '1.7 km/km²', geology: 'Unavailable in demo', observations: 3 };
export const EVIDENCE = [['Terrain', 'Strong'], ['Rainfall', 'Strong'], ['LULC', 'Strong'], ['Geology', 'Unavailable'], ['Field data', 'Limited']];
export const CANDIDATE_SITES = [
  { id: 'SITE A', name: 'Upper contour', score: 91, risk: 'Low', intervention: 'Contour trench', why: ['High recharge suitability', 'Compatible 14° slope', 'Suitable drainage relationship', 'Lower identified risk'] },
  { id: 'SITE B', name: 'East drainage edge', score: 87, risk: 'High', intervention: 'Do not prioritise', why: ['Recharge suitability is high', 'High landslide susceptibility outweighs recharge potential', 'Do not prioritise without specialist field and engineering review'] },
  { id: 'SITE C', name: 'Lower recharge pocket', score: 76, risk: 'Moderate', intervention: 'Recharge pit', why: ['Moderate recharge suitability', 'Drainage relationship is suitable', 'Field verification is required before selection'] },
];

export const rechargeGeoJson = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { suitability: 91, class: 'High' }, geometry: { type: 'Polygon', coordinates: [[[84.208,20.46],[84.23,20.49],[84.255,20.48],[84.246,20.455],[84.208,20.46]]] } }, { type: 'Feature', properties: { suitability: 67, class: 'Moderate' }, geometry: { type: 'Polygon', coordinates: [[[84.245,20.45],[84.264,20.47],[84.277,20.45],[84.26,20.432],[84.245,20.45]]] } }] };
export const sitesGeoJson = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { id: 'SITE A', score: 91, risk: 'Low' }, geometry: { type: 'Point', coordinates: [84.231,20.473] } }, { type: 'Feature', properties: { id: 'SITE B', score: 84, risk: 'Moderate' }, geometry: { type: 'Point', coordinates: [84.25,20.455] } }, { type: 'Feature', properties: { id: 'SITE C', score: 73, risk: 'High' }, geometry: { type: 'Point', coordinates: [84.261,20.482] } }] };

export function spatialDataFor(spring) {
  if (!Number.isFinite(spring.longitude) || !Number.isFinite(spring.latitude)) return { spring: { type: 'FeatureCollection', features: [] }, recharge: { type: 'FeatureCollection', features: [] }, sites: { type: 'FeatureCollection', features: [] } };
  const [lng, lat] = [spring.longitude, spring.latitude];
  const point = (x, y) => [lng + x, lat + y];
  return {
    spring: { type: 'FeatureCollection', features: [{ type: 'Feature', properties: { name: spring.name, source: 'Demonstration spring record' }, geometry: { type: 'Point', coordinates: [lng, lat] } }] },
    recharge: { type: 'FeatureCollection', features: [
      { type: 'Feature', properties: { suitability: 88, class: 'High', source: 'Derived demonstration layer' }, geometry: { type: 'Polygon', coordinates: [[point(-.018,-.010), point(-.005,.018), point(.019,.010), point(.011,-.014), point(-.018,-.010)]] } },
      { type: 'Feature', properties: { suitability: 67, class: 'Moderate', source: 'Derived demonstration layer' }, geometry: { type: 'Polygon', coordinates: [[point(.014,-.020), point(.032,-.002), point(.043,-.020), point(.026,-.034), point(.014,-.020)]] } },
    ] },
    sites: { type: 'FeatureCollection', features: CANDIDATE_SITES.map((site, index) => ({ type: 'Feature', properties: { id: site.id, score: site.score, risk: site.risk, intervention: site.intervention, source: 'Derived demonstration candidate' }, geometry: { type: 'Point', coordinates: point([.004,.026,.035][index], [.006,-.018,.014][index]) } })) },
  };
}
