\# Agricultural Retail Site Selection



\## Objective

Identify and rank potential locations for an agricultural retail facility using GIS-based spatial analysis.



\## Study Area

Spain — selected agricultural areas.



\## Data Sources

\- OpenStreetMap / QuickOSM — Roads and Towns

\- SIGPAC 2026 — Agricultural Parcels

\- QGIS 3.44.12 — Spatial Analysis



\## Methodology

1\. Identified large agricultural parcels.

2\. Evaluated proximity to towns.

3\. Evaluated proximity to a second relevant location/network.

4\. Calculated a composite site suitability score.

5\. Selected the highest-ranking candidate sites.

6\. Exported the final candidate sites as a GeoPackage.



\## Final Output

\- `final\_candidate\_sites.gpkg` — final selected candidate sites.

\- `Final\_Site\_Selection\_Map.png` — final site selection map.



\## Site Score

Candidate sites were ranked using a weighted suitability score based on:

\- Proximity to towns

\- Proximity to the second accessibility factor

\- Agricultural parcel area



Higher scores indicate more suitable locations.

