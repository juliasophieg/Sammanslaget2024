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
          borderRadius: "100%",
          width: "80px",
          height: "80px",
        }}
      >
        {text}
      </button>
    </>
  );
}
