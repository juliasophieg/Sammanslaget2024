import React, { useState } from "react";
import StoryFooter from "./StoryFooter";
import { storyArray } from "../../data/stories";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "../hooks/getLocation";

export default function StoryMap() {
  const { position } = useMap();
  const [formData, setFormData] = useState({ title: "", story: "" });
  const [stories, setStories] = useState(storyArray);

  // Log the position
  console.log("Current Position:", position);

  if (!position) {
    console.log("No position yet");
  }
  console.log("stories:", stories);

  // Custom icons for markers
  const currentLocation = new L.Icon({
    iconUrl: "/currentlocation.png",
    iconSize: [38, 38],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

  const withinRadius = new L.Icon({
    iconUrl: "/withinradius.png",
    iconSize: [38, 38],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

  const outsideRadius = new L.Icon({
    iconUrl: "/outsideradius.png",
    iconSize: [38, 38],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

  // Function to calculate distance between two points
  const isWithinRadius = (point, center, radiusInMeters) => {
    const distance = L.latLng(point).distanceTo(L.latLng(center));
    return distance <= radiusInMeters;
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={14}
        maxZoom={22}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaHVnZ2lzaCIsImEiOiJjbTAyMnE5ZjIxeWZ4MmxzaWRkdWF3bWJyIn0.6NjX4MyKkyUFO9OeMRzHZg`}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          maxZoom={22}
          accessToken={
            "pk.eyJ1IjoiaHVnZ2lzaCIsImEiOiJjbTAyMnE5ZjIxeWZ4MmxzaWRkdWF3bWJyIn0.6NjX4MyKkyUFO9OeMRzHZg"
          }
        />

        <Marker position={position} icon={currentLocation}>
          <Popup>Det här är du!</Popup>
        </Marker>

        {/* Display stories with different icons based on distance */}
        {stories.map((location, index) => {
          const isNearby = isWithinRadius(location.position, position, 50);
          return (
            <Marker
              key={index}
              position={location.position}
              icon={isNearby ? withinRadius : outsideRadius}
            >
              <Popup autoPan={false}>
                {isNearby ? (
                  <>
                    <h3>{location.title}</h3>
                    <p>{location.story}</p>
                    <p>{location.category}</p>
                    <div style={{ display: "flex", gap: "3px" }}>
                      <p>{location.author}</p>
                      <p>{location.age}</p>
                    </div>
                  </>
                ) : (
                  <p>Go closer to open this story.</p>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Form at the bottom of the viewport */}
      <StoryFooter
        formData={formData}
        setFormData={setFormData}
        stories={stories}
        setStories={setStories}
        currentPosition={position}
      />
    </>
  );
}
