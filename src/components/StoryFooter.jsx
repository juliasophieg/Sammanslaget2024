import StoryButton from "./StoryButton";
import StoryForm from "./StoryForm";

export default function StoryFooter() {
  return (
    <>
      {/* <StoryForm
        setStories={setStories}
        formData={formData}
        setFormData={setFormData}
        clickedPosition={clickedPosition}
        setClickedPosition={setClickedPosition}
      /> */}
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
        <StoryButton text={"story"} />
        <StoryButton text={"foot"} />
        <StoryButton text={"three"} />
      </section>
    </>
  );
}
