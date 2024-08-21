import StoryButton from "./StoryButton";

export default function StoryForm({
  formData,
  setFormData,
  setStories,
  currentPosition,
}) {
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (currentPosition && formData.title && formData.story) {
      const newLocation = {
        position: [currentPosition.lat, currentPosition.lng],
        title: formData.title,
        story: formData.story,
      };
      setStories((prevStories) => [...prevStories, newLocation]);
      setFormData({ title: "", story: "" });
    } else {
      alert("Please fill in all fields");
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
          <button
            type="submit"
            style={{
              borderRadius: "100%",
              width: "80px",
              height: "80px",
              color: "red",
            }}
          ></button>
        </div>
      </form>
    </>
  );
}
