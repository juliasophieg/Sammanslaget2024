import { supabase } from "../../data/supabase";
import React, { useState } from "react";

export default function StoryForm({
  setStories,
  currentPosition,
  setFormToggle,
}) {
  const [formData, setFormData] = useState({
    title: "",
    story: "",
    category: "",
    author: "",
    age: "",
  });
  // handle form submission
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

      // insert the new story into Supabase
      const { error } = await supabase.from("stories").insert([newStory]);

      if (error) {
        alert("An error occurred while saving the story.");
        console.error(error);
        return;
      }

      // fetch updated stories after successful insertion
      const { data } = await supabase.from("stories").select();
      setStories(data);

      setFormData({ title: "", story: "", category: "", author: "", age: "" });
      setFormToggle(false); // close form
    } else {
      alert("Please fill in all fields");
    }
  }

  // handle form input changes
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
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <label htmlFor="title" style={{ fontSize: "14px" }}>
              Rubrik*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              style={{
                height: "2rem",
                border: "solid 1px black",
                borderRadius: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <label htmlFor="story" style={{ fontSize: "14px" }}>
              Minne:*
            </label>
            <textarea
              id="story"
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              required
              style={{
                height: "2rem",
                border: "solid 1px black",
                borderRadius: "5px",
                height: "12rem",
              }}
            />
          </div>
          <div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="category" style={{ fontSize: "14px" }}>
                Stämning:
              </label>
              <p
                style={{
                  fontSize: "10px",
                  margin: 0,
                }}
              >
                Valfritt
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="category1"
                  name="category"
                  value="Ögonblick"
                  checked={formData.category === "Ögonblick"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category1" style={{ fontSize: "12px" }}>
                  Ögonblick
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="category4"
                  name="category"
                  value="Spänning"
                  checked={formData.category === "Spänning"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category4" style={{ fontSize: "12px" }}>
                  Spänning
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="category5"
                  name="category"
                  value="Kärlek"
                  checked={formData.category === "Kärlek"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category5" style={{ fontSize: "12px" }}>
                  Kärlek
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="category6"
                  name="category"
                  value="Glädje"
                  checked={formData.category === "Glädje"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category6" style={{ fontSize: "12px" }}>
                  Glädje
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="category7"
                  name="category"
                  value="Nostalgi"
                  checked={formData.category === "Nostalgi"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category7" style={{ fontSize: "12px" }}>
                  Nostalgi
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  id="category8"
                  name="category"
                  value="Sorg"
                  checked={formData.category === "Sorg"}
                  onChange={handleInputChange}
                />
                <label htmlFor="category8" style={{ fontSize: "12px" }}>
                  Sorg
                </label>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="author" style={{ fontSize: "14px" }}>
                    Avsändare:
                  </label>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: 0,
                    }}
                  >
                    Valfritt
                  </p>
                </div>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  style={{ height: "2rem" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="age" style={{ fontSize: "14px" }}>
                    Ålder:
                  </label>
                  <p
                    style={{
                      fontSize: "10px",
                      margin: 0,
                    }}
                  >
                    Valfritt
                  </p>
                </div>
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
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                borderRadius: "5px",
                width: "60%",
                height: "80px",
                backgroundColor: "#383F7E",
                color: "white",
                marginTop: "2rem",
                fontWeight: "700",
              }}
            >
              PUBLICERA
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
