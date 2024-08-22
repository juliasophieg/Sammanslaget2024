export default function StoryButton({ text, formToggle, setFormToggle }) {
  const handleClick = () => {
    if (setFormToggle) {
      setFormToggle(!formToggle);
    }
  };
  return (
    <>
      <button
        className="menu-button"
        onClick={handleClick}
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
          src="/memoryicon.svg"
          className="default-icon"
          style={{ width: "32px" }}
        ></img>
        <img
          src="/memoryiconorange.svg"
          className="hover-icon"
          style={{ width: "32px" }}
        ></img>
        <div>{text}</div>
      </button>
    </>
  );
}
