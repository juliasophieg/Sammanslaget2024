import StoryButton from "./StoryButton";

export default function StoryForm({
  formData,
  setFormData,
  setStories,
  clickedPosition,
  setClickedPosition,
}) {
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (clickedPosition && formData.title && formData.story) {
      const newLocation = {
        position: [clickedPosition.lat, clickedPosition.lng],
        title: formData.title,
        story: formData.story,
      };
      setStories((prevStories) => [...prevStories, newLocation]);
      setFormData({ title: "", story: "" });
      setClickedPosition(null); // Clear the position after submission
    }
  }
  // Handle form input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <label htmlFor="story">Story:</label>
          <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleInputChange}
          />
          <StoryButton />
        </div>
      </form>
      <div>
        <StoryButton />
      </div>
      <div>
        <StoryButton />
      </div>
    </>
  );
}
