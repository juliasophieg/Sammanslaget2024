import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const startingPosition = [57.7067, 11.9373]; //Koordinater

  function addStory(newLocation) {
    stories.push(newLocation);
  }

  const [stories, setStories] = useState([
    {
      position: [57.7067, 11.9373],
      title: "Berättelse av Anna",
      story: "Lorem ipsum osv osv",
    },
    {
      position: [57.71, 11.94],
      title: "Berättelse av Johan",
      story: "Lorem ipsum osv osv",
    },
    {
      position: [57.709, 11.94],
      title: "Berättelse av Maria",
      story: "Lorem ipsum osv osv",
    },
    {
      position: [57.7075, 11.9385],
      title: "Berättelse av Erik",
      story:
        "Erik's tale unfolds near the serene waters of Lindholmen, where history and innovation meet.",
    },
    {
      position: [57.7058, 11.9362],
      title: "Berättelse av Sofia",
      story:
        "Sofia shares her experiences growing up amidst the vibrant tech scene of Lindholmen.",
    },
    {
      position: [57.7089, 11.9396],
      title: "Berättelse av Oskar",
      story:
        "Oskar recounts his adventures exploring the hidden gems around Lindholmen's waterfront.",
    },
  ]);

  console.log("stories:", stories);

  const [clickedPosition, setClickedPosition] = useState(null);
  const [formData, setFormData] = useState({ title: "", story: "" });

  // Handle map click
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        setClickedPosition(e.latlng); // Store the clicked position
      },
    });
    return null; // This component doesn't render anything visible
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (clickedPosition && formData.title && formData.story) {
      const newLocation = {
        position: [clickedPosition.lat, clickedPosition.lng],
        title: formData.title,
        story: formData.story,
      };
      addStory(newLocation);
      setFormData({ title: "", story: "" });
      setClickedPosition(null);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <MapContainer
      center={startingPosition}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1>Map testing</h1>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapClickHandler />
      {clickedPosition && (
        <Popup position={clickedPosition}>
          <form onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />

              <label htmlFor="story">Story:</label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleInputChange}
              />

              <button type="submit">Submit</button>
            </div>
          </form>
          <div>You clicked the map at {clickedPosition.toString()}</div>
        </Popup>
      )}
      {stories.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            <h3>{location.title}</h3>
            <p>{location.story}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
