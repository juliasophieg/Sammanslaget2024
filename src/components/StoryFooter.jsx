import { useState } from "react";
import StoryButton from "./StoryButton";
import StoryForm from "./StoryForm";

export default function StoryFooter({ setStories, currentPosition }) {
  const [formToggle, setFormToggle] = useState(false);
  return (
    <>
      {/* Overlay Form */}
      {formToggle && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            zIndex: 1001, // ensure the form is above other elements
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "500px",
            }}
          >
            <button
              onClick={() => setFormToggle(false)} // Close form button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                marginBottom: "10px",
                backgroundColor: "#ff5e5e",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <StoryForm
              setStories={setStories}
              currentPosition={currentPosition}
              setFormToggle={setFormToggle}
            />
          </div>
        </div>
      )}
      <section
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "black",

          paddingTop: "2rem",
          paddingBottom: "2rem",
          backgroundColor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        <StoryButton text={"foot"} />
        <StoryButton
          text={"Add story"}
          formToggle={formToggle}
          setFormToggle={setFormToggle}
        />
        <StoryButton text={"three"} />
      </section>
    </>
  );
}
