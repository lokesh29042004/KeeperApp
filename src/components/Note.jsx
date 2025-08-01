import React from "react";

function Note(props) {
  function handleClick() {
    props.onChecked(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button type="button" onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
