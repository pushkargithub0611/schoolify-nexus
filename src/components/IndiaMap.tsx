
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const IndiaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Replace this with your Mapbox token
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 4,
      minZoom: 3,
      maxZoom: 12
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold text-sm mb-2">Schools Distribution</h4>
        <p className="text-xs text-gray-600">Interactive map of schools across India</p>
      </div>
    </div>
  );
};

export default IndiaMap;
