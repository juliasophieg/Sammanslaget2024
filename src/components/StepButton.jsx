export default function StepButton({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          width: "70px",
          height: "80px",
          backgroundColor: "white",
          padding: "0px",
        }}
      >
        <img src="/stepsicon.svg" style={{ width: "50px" }} alt="Icon" />
        <div>{text}</div>
      </button>
    </>
  );
}
