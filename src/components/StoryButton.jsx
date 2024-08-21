export default function StoryButton({ text, handleSubmit }) {
  return (
    <>
      <button
        type="submit"
        style={{
          borderRadius: "100%",
          width: "80px",
          height: "80px",
        }}
      >
        {text}
      </button>
    </>
  );
}
