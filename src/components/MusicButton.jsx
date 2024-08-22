export default function MusicButton({ text }) {
  return (
    <>
      <button
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "white",
          padding: "0px",
        }}
      >
        <img src="musicicon.svg" style={{ width: "50px" }}></img>
        <div>{text}</div>
      </button>
    </>
  );
}
