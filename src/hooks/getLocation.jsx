import { useState, useEffect } from "react";

export const useMap = () => {
  const [position, setPosition] = useState({
    lat: 57.709,
    lng: 11.9376,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Function to handle position updates
    const handlePosition = (position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    // Function to handle errors
    const handleError = (error) => {
      setError(error.message);
    };

    // Start watching the position
    const watchId = navigator.geolocation.watchPosition(
      handlePosition,
      handleError,
      {
        enableHighAccuracy: true,
      }
    );

    // Cleanup function to stop watching the position
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { position, error };
};
