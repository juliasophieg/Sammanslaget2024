import { useState, useEffect } from "react";

export const useMap = () => {
  const [position, setPosition] = useState({
    lat: 57.709,
    lng: 11.9376,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ lat: coords.latitude, lng: coords.longitude });
      },
      (blocked) => {
        if (blocked) {
          console.log("Location blocked");
        }
      }
    );
  }, []);
  return { position };
};
