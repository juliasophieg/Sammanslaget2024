import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const position = [57.7067, 11.9373]; //Koordinater

  const locations = [
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
  ];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
    >
      <h1>Map testing</h1>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
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
