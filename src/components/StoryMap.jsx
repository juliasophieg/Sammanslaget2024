import React, { useEffect, useState } from "react";
import StoryFooter from "./StoryFooter";
// import { storyArray } from "../../data/stories";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "../hooks/getLocation";

export default function StoryMap() {
  const { position } = useMap();
  const [formData, setFormData] = useState({
    title: "",
    story: "",
    category: "",
    author: "",
    age: "",
  });
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem("stories")) || [];
    console.log("Saved stories:", savedStories);
    setStories(savedStories);
  }, []);

  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  console.log("Position", position.lat);
  console.log("Stories", stories);

  const currentLocation = new L.Icon({
    iconUrl: "/currentlocation.png",
    iconSize: [38, 38],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

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

        {stories.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <h3>{location.title}</h3>
              <p>{location.story}</p>
              <p>{location.category}</p>
              <div style={{ display: "flex", gap: "3px" }}>
                <p>{location.author}</p>
                <p>{location.age}</p>
              </div>
            </Popup>
          </Marker>
        ))}
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
