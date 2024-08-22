export default function IntroButton({ text, setIntroToggle }) {
  return (
    <>
      <button
        style={{
          height: "50px",
          width: "168px",
          borderRadius: "10px",
          backgroundColor: "#383f7e",
          color: "white",
        }}
        onClick={() => setIntroToggle(false)}
      >
        {text}
      </button>
    </>
  );
}
