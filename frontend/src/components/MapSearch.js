import React, { Fragment } from "react";
import { useState, useEffect, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { mapboxAccessToken, mapboxStyles, getMissingPersons } from "./api";
import missingMarker from "../assets/images/missing.png";
import "./css/Map.css";

function MapSearch() {
  const [missingPersons, setMissingPersons] = useState([]);
  const [showPopUp, setShowPopUp] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 4.570868,
    longitude: -74.297333,
    zoom: 5,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const missingPersons = await getMissingPersons();
      setMissingPersons(missingPersons);
    })();
  }, []);

  const handleViewportChange = useCallback((newViewport) => {
    setViewport({ ...newViewport, width: "100%" });
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxAccessToken}
      mapStyle={mapboxStyles}
      onViewportChange={handleViewportChange}
    >
      {missingPersons.map((missingPerson) => (
        <Fragment key={missingPerson._id}>
          <Marker
            latitude={missingPerson.location.latitude}
            longitude={missingPerson.location.longitude}
          >
            <div
              onClick={() =>
                setShowPopUp({
                  ...showPopUp,
                  [missingPerson._id]: true,
                })
              }
            >
              <img
                src={missingMarker}
                width="24px"
                height="24px"
                alt="Missing Person"
              />
            </div>
          </Marker>
          {showPopUp[missingPerson._id] ? (
            <Popup
              latitude={missingPerson.location.latitude}
              longitude={missingPerson.location.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() =>
                setShowPopUp({ ...showPopUp, [missingPerson._id]: false })
              }
              anchor="top"
            >
              <div className="font-poppins Map-popup">
                <h3 className="Map-popup-text text-center">
                  {missingPerson.name} {missingPerson.surname}
                </h3>
                <p>
                  {" "}
                  <b>Edad </b> : {missingPerson.description.age}
                </p>
                <p>
                  <b>Descripción </b> : {missingPerson.description.detailed}
                </p>
                <h4 className="text-center">Ubicación</h4>
                <p>
                  {" "}
                  <b>Ciudad </b>: {missingPerson.location.city}
                </p>
                <p>
                  {" "}
                  <b>País </b> : {missingPerson.location.country}
                </p>
                <p>
                  {" "}
                  <b>Barrio </b>: {missingPerson.location.neighborhood}
                </p>
                {}
              </div>
            </Popup>
          ) : null}
        </Fragment>
      ))}
    </ReactMapGL>
  );
}

export default MapSearch;
