export default function FormButton({ text }) {
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
      >
        {text}
      </button>
    </>
  );
}
