export default function MusicButton({ text }) {
  return (
    <>
      <button
        className="menu-button"
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
          src="/musicicon.svg"
          className="default-icon"
          style={{ width: "32px" }}
        ></img>
        <img
          src="/musiciconorange.svg"
          className="hover-icon"
          style={{ width: "32px" }}
        ></img>
        <div>{text}</div>
      </button>
    </>
  );
}
