import React, { useState, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GoogleMap = () => {
  const [center, setCenter] = useState({ lat: 28.6139, lng: 77.209 });
  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

  const mapContainerStyle = {
    height: "500px",
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  };

  return (
    <div className="map-container">
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        React-Leaflet Map Centered on New Delhi
      </h2>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        style={mapContainerStyle}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default GoogleMap;
