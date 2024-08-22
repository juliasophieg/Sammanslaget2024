export default function MusicButton({ text }) {
  return (
    <>
      <button
        style={{
          width: "auto",
          height: "87px",
          fontWeight: "bold",
          fontSize: "14px",
          backgroundColor: "#FEF2E3",
          padding: "0px",
        }}
      >
        <img src="musicicon.svg" style={{ width: "32px" }}></img>
        <div>{text}</div>
      </button>
    </>
  );
}
