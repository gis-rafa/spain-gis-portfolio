# Methodology

## Purpose

Evaluate vegetation health and agricultural drought conditions across Córdoba Province using Sentinel-2 imagery.

---

## Workflow

### Step 1

Load Córdoba administrative boundary.

### Step 2

Load Sentinel-2 Level-2A imagery.

### Step 3

Filter images by date and cloud cover.

### Step 4

Create a median composite.

### Step 5

Calculate NDVI.

### Step 6

Calculate NDVI statistics.

### Step 7

Classify vegetation health into five categories.

### Step 8

Calculate area for each class.

### Step 9

Export GeoTIFF products.

### Step 10

Create the final cartographic layout in QGIS.

---

## Software

- Google Earth Engine
- QGIS

---

## Expected Results

Healthy vegetation is represented by high NDVI values, while low NDVI values indicate bare soil, urban areas, water bodies, or vegetation under stress.