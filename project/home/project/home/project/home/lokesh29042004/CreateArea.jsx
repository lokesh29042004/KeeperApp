import React, { useState } from "react";

function CreateArea(props) {
  const [inputContent, setInputContent] = useState({
    title: "",
    content: "",
  });

  function handleClick() {
    event.preventDefault();
    props.onChecked(inputContent);
    setInputContent({ title: "", content: "" });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setInputContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputContent.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputContent.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
``;
