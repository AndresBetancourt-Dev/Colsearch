import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { mapboxAccessToken, mapboxStyles, getMissingPersons } from "./api";
import missingMarker from "../assets/images/missing.png";

function MapSearch() {
  const [missingPersons, setMissingPersons] = useState([]);
  const [showPopUp, setShowPopUp] = useState({});
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 4.570868,
    longitude: -74.297333,
    zoom: 5,
  });

  useEffect(() => {
    (async () => {
      const missingPersons = await getMissingPersons();
      setMissingPersons(missingPersons);
    })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxAccessToken}
      mapStyle={mapboxStyles}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {missingPersons.map((missingPerson) => (
        <>
          <Marker
            key={missingPerson._id}
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
              <div>
                <h3>
                  {missingPerson.name} {missingPerson.surname}
                </h3>
                <p>
                  <b>Edad:</b> {missingPerson.description.age}
                </p>
                <p></p>
              </div>
            </Popup>
          ) : null}
        </>
      ))}
    </ReactMapGL>
  );
}

export default MapSearch;
