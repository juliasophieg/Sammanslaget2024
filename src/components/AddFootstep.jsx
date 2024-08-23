import React from "react";
import { supabase } from "../../data/supabase";
import { useMap } from "../hooks/getLocation";
import StepButton from "./StepButton";

const FootprintButton = ({ fetchSteps }) => {
  const { position } = useMap();

  const handleAddFootprint = async () => {
    if (!position) {
      console.error("Position is not available");
      return;
    }

    const newFootprint = {
      position: [position.lat, position.lng],
    };

    // insert the new story into Supabase
    const { error } = await supabase.from("steps").insert([newFootprint]);

    if (error) {
      console.error("Error adding footprint:", error.message);
    } else {
      console.log("Footprint added");
      if (fetchSteps) {
        fetchSteps();
      }
    }
  };

  return <StepButton text={"Fotsteg"} onClick={handleAddFootprint} />;
};

export default FootprintButton;
