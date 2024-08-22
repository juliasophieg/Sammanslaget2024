export default function StepButton({ text }) {
  return (
    <>
      <button
        style={{
          width: "70px",
          height: "80px",
          backgroundColor: "white",
          padding: "0px",
        }}
      >
        <img src="../public/Karta.svg" style={{ width: "50px" }}></img>
        <div>{text}</div>
      </button>
    </>
  );
}
