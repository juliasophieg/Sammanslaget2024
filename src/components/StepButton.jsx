export default function StepButton({ text, onClick }) {
  return (
    // stepbutton
    <>
      <button
        className="menu-button"
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
        <img
          src="/stepsicon.svg"
          className="default-icon"
          style={{ width: "32px" }}
          alt="Icon"
        />
        <img
          src="/stepsiconorange.svg"
          className="hover-icon"
          style={{ width: "32px" }}
          alt="Icon"
        />
        <div>{text}</div>
      </button>
    </>
  );
}
