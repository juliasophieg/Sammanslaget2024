export default function StepButton({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          width: "auto",
          height: "87px",
          fontWeight: "bold",
          fontSize: "14px",
          backgroundColor: "#FEF2E3",
          padding: "0px",
        }}
      >
        <img src="/stepsicon.svg" style={{ width: "32px" }} alt="Icon" />
        <div>{text}</div>
      </button>
    </>
  );
}
