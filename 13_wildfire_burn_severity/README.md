\# Project 13 – Wildfire Burn Severity Assessment using dNBR



\## Overview



This project evaluates wildfire burn severity across Córdoba, Spain using Sentinel-2 imagery and the Differenced Normalized Burn Ratio (dNBR) within Google Earth Engine.



The workflow compares pre-fire and post-fire satellite imagery to identify burned areas and classify fire severity.



\---



\## Objectives



\- Delineate wildfire affected areas

\- Calculate dNBR

\- Classify burn severity

\- Compute burn severity statistics

\- Estimate burned area by severity class

\- Export burn severity products



\---



\## Study Area



\- Province: Córdoba

\- Country: Spain



\---



\## Dataset



\- Sentinel-2 Surface Reflectance Harmonized

\- FAO GAUL Administrative Boundaries



\---



\## Methodology



1\. Load Córdoba boundary

2\. Collect Sentinel-2 images before wildfire

3\. Collect Sentinel-2 images after wildfire

4\. Create cloud-free median composites

5\. Calculate NBR for each period

6\. Compute dNBR

7\. Generate burn severity classes

8\. Calculate burn severity statistics

9\. Estimate burned area

10\. Export GeoTIFF outputs



\---



\## Outputs



\- True Color (Before Fire)

\- True Color (After Fire)

\- dNBR Map

\- Burn Severity Map

\- Burn Severity Statistics

\- Burn Severity Area Table



\---



\## Software



\- Google Earth Engine

