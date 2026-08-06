// ======================================
// Project 11
// Crop Health Monitoring using NDVI
// Córdoba, Spain
// ======================================

// ================================
// Load Córdoba Boundary
// ================================

var cordoba = ee.FeatureCollection('FAO/GAUL/2015/level2')
  .filter(ee.Filter.eq('ADM0_NAME', 'Spain'))
  .filter(ee.Filter.eq('ADM1_NAME', 'Andalucía'))
  .filter(ee.Filter.eq('ADM2_NAME', 'Córdoba'));

print('Features:', cordoba.size());

Map.centerObject(cordoba, 9);
Map.addLayer(cordoba, {color: 'red'}, 'Córdoba');


// ================================
// Sentinel-2 Image Collection
// ================================

var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(cordoba)
  .filterDate('2025-04-01', '2025-09-30')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

print('Number of Images:', s2.size());


// ================================
// Create Median Composite
// ================================

var image = s2
  .median()
  .clip(cordoba);

Map.addLayer(
  image,
  {
    bands: ['B4', 'B3', 'B2'],
    min: 0,
    max: 3000
  },
  'True Color'
);


// ================================
// Calculate NDVI
// ================================

var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

Map.addLayer(
  ndvi,
  {
    min: -1,
    max: 1,
    palette: [
      'blue',
      'white',
      'yellow',
      'green',
      'darkgreen'
    ]
  },
  'NDVI'
);


// ================================
// NDVI Statistics
// ================================

var stats = ndvi.reduceRegion({
  reducer: ee.Reducer.mean()
    .combine({
      reducer2: ee.Reducer.min(),
      sharedInputs: true
    })
    .combine({
      reducer2: ee.Reducer.max(),
      sharedInputs: true
    }),
  geometry: cordoba.geometry(),
  scale: 30,
  tileScale: 4,
  maxPixels: 1e13
});

print('NDVI Statistics', stats);


// ================================
// NDVI Classification
// ================================

var ndviClass = ee.Image(0)
  .where(ndvi.lt(0), 1)
  .where(ndvi.gte(0).and(ndvi.lt(0.2)), 2)
  .where(ndvi.gte(0.2).and(ndvi.lt(0.4)), 3)
  .where(ndvi.gte(0.4).and(ndvi.lt(0.6)), 4)
  .where(ndvi.gte(0.6), 5);

Map.addLayer(
  ndviClass,
  {
    min: 1,
    max: 5,
    palette: [
      '#2166ac', // Water / Urban
      '#fdae61', // Bare Soil
      '#ffffbf', // Poor Vegetation
      '#a6d96a', // Moderate Vegetation
      '#1a9850'  // Healthy Vegetation
    ]
  },
  'NDVI Classes'
);


// ================================
// Area of Each NDVI Class
// ================================

var areaImage = ee.Image.pixelArea()
  .divide(1e6)
  .addBands(ndviClass);

var areas = areaImage.reduceRegion({
  reducer: ee.Reducer.sum().group({
    groupField: 1,
    groupName: 'Class'
  }),
  geometry: cordoba.geometry(),
  scale: 30,
  tileScale: 4,
  maxPixels: 1e13
});

print('Area by NDVI Class (km²)', areas);
// ================================
// Export NDVI
// ================================

Export.image.toDrive({
  image: ndvi,
  description: 'Cordoba_NDVI_2025',
  folder: 'GEE_Projects',
  fileNamePrefix: 'Cordoba_NDVI_2025',
  region: cordoba.geometry(),
  scale: 10,
  maxPixels: 1e13
});
// ================================
// Export NDVI Classes
// ================================

Export.image.toDrive({
  image: ndviClass.toByte(),
  description: 'Cordoba_NDVI_Classes_2025',
  folder: 'GEE_Projects',
  fileNamePrefix: 'Cordoba_NDVI_Classes_2025',
  region: cordoba.geometry(),
  scale: 10,
  maxPixels: 1e13
});