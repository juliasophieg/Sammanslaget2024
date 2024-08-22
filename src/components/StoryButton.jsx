export default function StoryButton({ text, formToggle, setFormToggle }) {
  const handleClick = () => {
    if (setFormToggle) {
      setFormToggle(!formToggle);
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          width: "80x",
          height: "80x",
          backgroundColor: "white",
          padding: "0px",
        }}
      >
        <img src="../public/skapaminnealt1.svg" style={{ width: "50px" }}></img>
        <div>{text}</div>
      </button>
    </>
  );
}
