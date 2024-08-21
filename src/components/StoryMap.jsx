import React, { useState, useEffect } from "react";
import StoryFooter from "./StoryFooter";
import { storyArray } from "../../data/supabase";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "../hooks/getLocation";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cpkibyqcwbytkhjcpowm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2lieXFjd2J5dGtoamNwb3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTg5NTcsImV4cCI6MjAzOTgzNDk1N30.4oxOYUovu-sUGHUcbv_yEJ8LNcvukj-8hGaqLMV2D74"
);

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
  console.log("stories:", stories);

  useEffect(() => {
    getStories();
  }, []);

  async function getStories() {
    const { data } = await supabase.from("stories").select();
    setStories(data);
  }

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

        {stories.map((story) => (
          <Marker key={story.id} position={story.position}>
            <Popup>
              <h1>{story.title}</h1>
              <p>{story.story}</p>
              <p>{story.category}</p>
              <div style={{ display: "flex", gap: "3px" }}>
                <p>{story.author}</p>
                <p>{story.age}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* {stories.map((location, index) => (
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
        ))} */}
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
