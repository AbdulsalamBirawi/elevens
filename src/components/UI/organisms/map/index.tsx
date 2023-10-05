import React, { useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";

export const MapWithTabs = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: 0, // Replace with your desired latitude
    longitude: 0, // Replace with your desired longitude
    zoom: 10, // Adjust the initial zoom level
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <div className="w-full h-screen">
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY} // Replace with your Mapbox API key
      >
        {data.map((marker) => (
          <Marker
            key={marker.id}
            latitude={marker.latitude}
            longitude={marker.longitude}
          >
            <button
              className="text-blue-500 hover:text-blue-800"
              onClick={() => handleMarkerClick(marker)}
            >
              Marker
            </button>
          </Marker>
        ))}

        {selectedMarker && (
          <Popup
            latitude={selectedMarker.latitude}
            longitude={selectedMarker.longitude}
            onClose={() => setSelectedMarker(null)}
          >
            <div>{selectedMarker.name}</div>
          </Popup>
        )}
      </MapGL>

      {/* Tab Banner */}
      <div className="bg-gray-100 p-4">
        {/* Replace with your tab buttons */}
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md">
          Tab 1
        </button>
        <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md">
          Tab 2
        </button>
        {/* Add more tabs as needed */}
      </div>
    </div>
  );
};
