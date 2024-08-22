import React, { useState, useEffect } from "react";
import StoryFooter from "./StoryFooter";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "../hooks/getLocation";
import { supabase } from "../../data/supabase";

export default function StoryMap() {
  const { position } = useMap();
  const [stories, setStories] = useState([]);
  console.log("stories:", stories);

  // Control the position
  if (!position) {
    console.log("No position yet");
  } else {
    console.log("Current Position:", position);
  }

  useEffect(() => {
    getStories();
  }, []);

  async function getStories() {
    const { data } = await supabase.from("stories").select();
    setStories(data);
  }

  // Custom icons for markers
  const currentLocation = new L.Icon({
    iconUrl: "/currentlocation.png",
    iconSize: [38, 38],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

  const withinRadius = new L.Icon({
    iconUrl: "/memory.svg",
    iconSize: [38, 38],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

  const outsideRadius = new L.Icon({
    iconUrl: "/memorygrey.svg",
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
          <Popup>
            Här är du nu: Lat: {position.lat}, Lng: {position.lng}
          </Popup>
        </Marker>

        {/* Display stories with different icons based on distance */}
        {stories.map((story) => {
          const isNearby = isWithinRadius(story.position, position, 50);
          return (
            <Marker
              key={story.id}
              position={story.position}
              icon={isNearby ? withinRadius : outsideRadius}
            >
              <Popup>
                {isNearby ? (
                  <>
                    <h1>{story.title}</h1>
                    <p>{story.story}</p>
                    <p>{story.category}</p>
                    <div style={{ display: "flex", gap: "3px" }}>
                      <p>{story.author}</p>
                      <p>{story.age}</p>
                    </div>
                  </>
                ) : (
                  <p>Befinn dig inom 50m för att uppleva detta minne.</p>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Form at the bottom of the viewport */}
      <StoryFooter setStories={setStories} currentPosition={position} />
    </>
  );
}
