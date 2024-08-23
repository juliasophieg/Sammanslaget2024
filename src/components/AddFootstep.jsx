import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { footstep } from "../assets/customMarkers";
import { useMap } from "../hooks/getLocation";
import StepButton from "./StepButton";

const FootprintButton = () => {
  const { position } = useMap();
  const [showPopup, setShowPopup] = useState(false);
  const [footprintPosition, setFootprintPosition] = useState(null);

  const handleAddFootprint = () => {
    // Logic to handle adding footprint...
    setFootprintPosition([position.lat, position.lng]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <StepButton text={"Fotsteg"} onClick={handleAddFootprint} />

      {/* This Marker should be within MapContainer */}
      {showPopup && footprintPosition && (
        <Marker position={footprintPosition} icon={footstep}>
          <Popup>Footprint submitted!</Popup>
        </Marker>
      )}
    </>
  );
};

export default FootprintButton;
