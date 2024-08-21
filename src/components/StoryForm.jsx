export default function StoryForm({
  formData,
  setFormData,
  setStories,
  currentPosition,
  setFormToggle,
}) {
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (currentPosition && formData.title && formData.story) {
      const newLocation = {
        position: [currentPosition.lat, currentPosition.lng],
        title: formData.title,
        story: formData.story,
        category: formData.category,
        author: formData.author,
        age: formData.age,
      };
      setStories((prevStories) => [...prevStories, newLocation]);
      setFormData({ title: "", story: "", category: "", author: "", age: "" });
      setFormToggle(false); // Close window
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
          <label htmlFor="title">Rubrik*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            style={{ height: "2rem" }}
          />

          <label htmlFor="story">Minne:*</label>
          <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleInputChange}
            required
            style={{ height: "12rem" }}
          />
          <div>
            <div>
              <label htmlFor="category">Kategori:</label>
              <div>
                <input
                  type="radio"
                  id="category1"
                  name="category"
                  value="Ögonblick"
                  checked={formData.category === "Ögonblick"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category1">Ögonblick</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="category2"
                  name="category"
                  value="Exceptionellt"
                  checked={formData.category === "Exceptionellt"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category2">Exceptionellt</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="category3"
                  name="category"
                  value="Skoj"
                  checked={formData.category === "Skoj"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category3">Skoj</label>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="author">Avsändare:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
                style={{ height: "2rem" }}
              />
              <label htmlFor="age">Ålder:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                style={{ height: "2rem" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                borderRadius: "5px",
                width: "60%",
                height: "80px",
              }}
            >
              Publicera
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
