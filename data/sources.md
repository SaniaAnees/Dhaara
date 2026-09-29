# DHAARA data provenance

This prototype currently uses **demonstration data** for its spring profile, suitability, candidate sites, and risk screening. It must not be interpreted as a site-specific hydrogeological assessment.

| Dataset | Provider | URL | Intended use | Status / limitation |
|---|---|---|---|---|
| CartoDEM and thematic layers | ISRO / NRSC Bhuvan | https://bhuvan.nrsc.gov.in/ | Future AOI terrain, LULC, geomorphology and lineament pipeline | Endpoint, licence, resolution and coverage must be recorded at acquisition time. |
| Thematic products overview | NRSC | https://www.nrsc.gov.in/nrscnew/Dataproducts_Thematic_overview.php | Dataset selection and provenance | Not yet ingested by prototype. |
| Water resources services | NRSC | https://www.nrsc.gov.in/nrscnew/Services_Bhuvan_WaterResources.php | Future hydrology evidence | Not yet ingested by prototype. |
| Landslide Atlas | NRSC | https://www.nrsc.gov.in/nrscnew/resources_atlas_landslide.php | Future landslide screening evidence | Risk display is demonstration-only until acquired and processed. |
| Basemap | OpenFreeMap / OpenStreetMap | https://openfreemap.org/ | Public cartographic context | Style: `https://tiles.openfreemap.org/styles/liberty`; not analytical evidence. |
| Rainfall | To be selected (IMD, CHIRPS or NASA) | — | Annual, seasonal and variability features | No historical rainfall is represented as live weather. |

## Provenance rules

- **Real data**: acquired from a documented provider and retained with acquisition metadata.
- **Derived data**: created from real inputs with a recorded method/version.
- **Demonstration data**: clearly labelled illustrative and never substituted for real evidence.
- The model is decision support; field and engineering validation remain required.
