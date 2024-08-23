import { useState } from "react";
import StoryButton from "./StoryButton";
import StoryForm from "./StoryForm";
import FootprintButton from "./AddFootstep";

export default function StoryFooter({
  setStories,
  currentPosition,
  fetchSteps,
  onStepButtonClick,
}) {
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
            zIndex: 2100, // ensure the form is above other elements
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "500px",
            }}
          >
            <button
              onClick={() => setFormToggle(false)} // Close form button
              style={{
                position: "absolute",
                right: "40px",
                top: "20px",
                padding: "0",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "32px",
                opacity: "0.3",
              }}
            >
              x
            </button>
            <section style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <img
                  style={{
                    width: "30px",
                  }}
                  src="/logosimple.svg"
                ></img>
                <h2 style={{ margin: 0, fontWeight: 400 }}>Ditt minne</h2>
              </div>
            </section>

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
          justifyContent: "center",
          gap: "3rem",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#FEF2E3",
          zIndex: 1001,
        }}
      >
        <FootprintButton
          fetchSteps={fetchSteps}
          text={"Fotsteg"}
          onStepButtonClick={onStepButtonClick}
        />

        <StoryButton
          text={"Dela minne"}
          formToggle={formToggle}
          setFormToggle={setFormToggle}
        />

        {/* <MusicButton text={"Music"} /> */}
      </section>
    </>
  );
}
