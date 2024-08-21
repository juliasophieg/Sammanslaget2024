import React, { useState } from "react";
import StoryForm from "./StoryForm";
import { storyArray } from "../../data/stories";

import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function StoryMap() {
  const startingPosition = [57.7067, 11.9373]; //Start position
  const [clickedPosition, setClickedPosition] = useState(null);
  const [formData, setFormData] = useState({ title: "", story: "" });

  const [stories, setStories] = useState(storyArray);

  console.log("stories:", stories);

  // Handle map click to place a marker
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        setClickedPosition(e.latlng); // Store the clicked position
      },
    });
    return null;
  }
  return (
    <>
      <MapContainer
        center={startingPosition}
        zoom={13}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          detectRetina={true}
        />

        <MapClickHandler />

        {clickedPosition && <Marker position={clickedPosition} />}

        {stories.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <h3>{location.title}</h3>
              <p>{location.story}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Form at the bottom of the viewport */}
      {clickedPosition && (
        <StoryForm
          setStories={setStories}
          formData={formData}
          setFormData={setFormData}
          clickedPosition={clickedPosition}
          setClickedPosition={setClickedPosition}
        />
      )}
    </>
  );
}
