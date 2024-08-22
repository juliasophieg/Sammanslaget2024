import React, { useState, useEffect } from "react";
import StoryFooter from "./StoryFooter";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  memory,
  memoryGrey,
  footstep,
  footstepGrey,
  currentLocation,
} from "../assets/customMarkers";
import { useMap } from "../hooks/getLocation";
import { supabase } from "../../data/supabase";
// import "../leafletpopup.css";

export default function StoryMap() {
  const { position } = useMap();
  const [stories, setStories] = useState([]);
  const [activeStory, setActiveStory] = useState(null);

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

  const [steps, setSteps] = useState([]);

  // Fetch the steps from the database
  const fetchSteps = async () => {
    const { data, error } = await supabase.from("steps").select();

    if (error) {
      console.error("Error fetching steps:", error.message);
    } else {
      setSteps(data);
    }
  };

  // Fetch steps when the component starts
  useEffect(() => {
    fetchSteps();
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toISOString().split("T")[0];
  };

  // Function to calculate distance between two points
  const isWithinRadius = (point, center, radiusInMeters) => {
    const distance = L.latLng(point).distanceTo(L.latLng(center));
    return distance <= radiusInMeters;
  };

  // Function to close the custom popup
  const closePopup = () => {
    setActiveStory(null);
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={14}
        maxZoom={22}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
        detectRetina={true}
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaHVnZ2lzaCIsImEiOiJjbTAyMnE5ZjIxeWZ4MmxzaWRkdWF3bWJyIn0.6NjX4MyKkyUFO9OeMRzHZg`}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          maxZoom={22}
          detectRetina={true}
        />

        <Marker position={position} icon={currentLocation} />

        {/* Display stories with different icons based on distance */}
        {stories.map((story) => {
          const isNearby = isWithinRadius(story.position, position, 50);
          return (
            <Marker
              key={story.id}
              position={story.position}
              icon={isNearby ? memory : memoryGrey}
              eventHandlers={{
                click: () => {
                  if (isNearby) {
                    setActiveStory(story); // Set the clicked story as active
                  }
                },
              }}
            >
              {!isNearby && (
                <Popup>
                  <p>Befinn dig inom 50m för att uppleva detta minne.</p>
                </Popup>
              )}
            </Marker>
          );
        })}

        {/* Display steps with different icons based on distance */}
        {steps.map((step) => {
          const isNearby = isWithinRadius(step.position, position, 50);
          return (
            <Marker
              key={step.id}
              position={step.position}
              icon={isNearby ? footstep : footstepGrey}
            >
              <Popup>
                {isNearby ? (
                  <>
                    <p>{formatDate(step.created_at)}</p>
                  </>
                ) : (
                  <p>Befinn dig inom 50m för att se detta fotsteg</p>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Conditionally render the custom popup */}
      {activeStory && (
        <section
          style={{
            position: "fixed",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "2rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            width: "80%",
            maxWidth: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/logo.svg" style={{ width: "150px" }}></img>
          </div>
          <button
            onClick={closePopup}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <div
            style={{
              backgroundColor: "bisque",
              padding: "2rem 4rem",
            }}
          >
            <h1 style={{ fontSize: "36px", fontWeight: "400" }}>
              {activeStory.title}
            </h1>
            <p>{activeStory.story}</p>
            <p>{activeStory.category}</p>
            <div style={{ display: "flex", gap: "3px" }}>
              <p>{activeStory.author}</p>
              <p>{activeStory.age}</p>
            </div>
          </div>
        </section>
      )}

      {/* Form at the bottom of the viewport */}
      <StoryFooter setStories={setStories} currentPosition={position} />
    </>
  );
}
