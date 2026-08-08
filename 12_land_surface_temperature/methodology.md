\# Methodology



\## Objective



Generate a Land Surface Temperature (LST) map for Córdoba, Spain.



\---



\## Workflow



\### 1. Administrative Boundary



FAO GAUL Level 2 administrative boundaries were used to define the study area.



\---



\### 2. Satellite Data



Dataset:



LANDSAT/LC08/C02/T1\_L2



Date:



2025-04-01 to 2025-09-30



Cloud Cover:



Less than 20%.



\---



\### 3. Image Composite



A median composite was generated to reduce cloud contamination.



\---



\### 4. Surface Temperature



Band:



ST\_B10



Conversion:



Kelvin → Celsius



\---



\### 5. Temperature Statistics



Calculated:



\- Minimum

\- Mean

\- Maximum



\---



\### 6. Classification



Five temperature classes were created:



1\. Cool (<30°C)

2\. Mild (30–35°C)

3\. Warm (35–40°C)

4\. Hot (40–45°C)

5\. Very Hot (>45°C)



\---



\### 7. Area Calculation



Pixel area was converted into square kilometers.



Area was calculated for each temperature class.



\---



\### 8. Export



Results were exported as GeoTIFF files for GIS visualization.

