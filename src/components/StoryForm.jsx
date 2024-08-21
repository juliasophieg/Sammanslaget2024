import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cpkibyqcwbytkhjcpowm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2lieXFjd2J5dGtoamNwb3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTg5NTcsImV4cCI6MjAzOTgzNDk1N30.4oxOYUovu-sUGHUcbv_yEJ8LNcvukj-8hGaqLMV2D74"
);

export default function StoryForm({
  formData,
  setFormData,
  setStories,
  currentPosition,
  setFormToggle,
}) {
  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    if (currentPosition && formData.title && formData.story) {
      const newStory = {
        position: [currentPosition.lat, currentPosition.lng],
        title: formData.title,
        story: formData.story,
        category: formData.category,
        author: formData.author,
        age: formData.age,
      };

      // Insert the new story into Supabase
      const { error } = await supabase.from("stories").insert([newStory]);

      if (error) {
        alert("An error occurred while saving the story.");
        console.error(error);
        return;
      }

      // Fetch updated stories after successful insertion
      const { data } = await supabase.from("stories").select();
      setStories(data);

      setFormData({ title: "", story: "", category: "", author: "", age: "" });
      setFormToggle(false); // Close form
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
