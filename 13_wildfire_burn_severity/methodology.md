\# Methodology



\## Step 1



Load the administrative boundary of Córdoba from the FAO GAUL Level 2 dataset.



\---



\## Step 2



Acquire Sentinel-2 Surface Reflectance imagery before the wildfire.



Filtering criteria:



\- Cloud cover < 20%

\- Area of Interest = Córdoba



\---



\## Step 3



Acquire Sentinel-2 imagery after the wildfire using identical filtering parameters.



\---



\## Step 4



Generate cloud-free median composites for both periods.



\---



\## Step 5



Calculate the Normalized Burn Ratio (NBR):



NBR = (NIR − SWIR2) / (NIR + SWIR2)



Sentinel-2 Bands:



\- NIR = B8

\- SWIR2 = B12



\---



\## Step 6



Calculate the Differenced Normalized Burn Ratio:



dNBR = NBR Before − NBR After



Higher dNBR values indicate greater burn severity.



\---



\## Step 7



Classify burn severity into five classes.



\- Unburned

\- Low Severity

\- Moderate-Low Severity

\- Moderate-High Severity

\- High Severity



\---



\## Step 8



Compute:



\- Minimum dNBR

\- Maximum dNBR

\- Mean dNBR



\---



\## Step 9



Calculate burned area (km²) for each severity class.



\---



\## Step 10



Export GeoTIFF products to Google Drive.

