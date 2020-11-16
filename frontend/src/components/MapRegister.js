import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useContext } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { MissingPersonContext } from "../context/MissingPersonContext";

import { mapboxAccessToken, mapboxStyles, getCityAndCountry } from "./api";

const MapRegister = () => {
  const { location, setLocation } = useContext(MissingPersonContext);
  const [viewport, setViewport] = useState({
    latitude: 4.570868,
    longitude: -74.297333,
    zoom: 4,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 250 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const handleMapClick = useCallback(
    async ({ lngLat }) => {
      let {
        country,
        city,
        town,
        state,
        neighbourhood,
        suburb,
      } = await getCityAndCountry(lngLat[1], lngLat[0]);
      setLocation({
        ...location,
        country: country || "Colombia",
        city: city || town || state || "Colombia",
        neighborhood:
          neighbourhood ||
          suburb ||
          city ||
          town ||
          state ||
          country ||
          "Colombia",
        latitude: lngLat[1],
        longitude: lngLat[0],
      });
    },
    [location, setLocation]
  );

  return (
    <div style={{ height: "100vh", maxHeight: "50vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        mapStyle={mapboxStyles}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={mapboxAccessToken}
        onClick={handleMapClick}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={mapboxAccessToken}
          position="top-left"
        />
      </MapGL>
    </div>
  );
};

export default MapRegister;
