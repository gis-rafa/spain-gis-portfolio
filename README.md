# Project 11 — Agricultural Drought Monitoring using NDVI & NDMI

## Overview

This project evaluates vegetation health and agricultural drought conditions across Córdoba Province, Andalusia, Spain using Sentinel-2 satellite imagery processed in Google Earth Engine.

Normalized Difference Vegetation Index (NDVI) was used to assess vegetation vigor, classify crop health, and quantify the spatial distribution of vegetation conditions.

---

## Study Area

- Córdoba Province
- Andalusia
- Spain

---

## Objectives

- Monitor crop health.
- Calculate NDVI.
- Classify vegetation condition.
- Estimate the spatial distribution of vegetation health.
- Produce a professional GIS map for agricultural monitoring.

---

## Data Sources

- Sentinel-2 Level-2A
- FAO GAUL Administrative Boundaries
- Google Earth Engine

---

## Methodology

1. Define Córdoba boundary.
2. Load Sentinel-2 imagery.
3. Generate a median composite.
4. Calculate NDVI.
5. Classify NDVI into five vegetation classes.
6. Calculate NDVI statistics.
7. Estimate area for each vegetation class.
8. Export GeoTIFF products.
9. Produce final maps.

---

## Outputs

- NDVI Raster
- NDVI Classification Raster
- NDVI Statistics
- Area by Vegetation Class
- GeoTIFF Outputs
- QGIS Layout
- PNG Map
- PDF Map

---

## Skills Demonstrated

- Google Earth Engine
- QGIS
- Sentinel-2 Processing
- Remote Sensing
- NDVI Analysis
- Agricultural Monitoring
- Raster Analysis
- Spatial Statistics
- Cartographic Design

---

## Software

- Google Earth Engine
- QGIS

---

## Project Structure

project11_agricultural_drought_monitoring/
│
├── README.md
├── methodology.md
├── data_sources.md
├── script.js
├── outputs/
├── images/
└── project11_agricultural_drought_monitoring.qgz