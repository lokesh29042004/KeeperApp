import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [content, setcontent] = useState([]);
  function addContent(inputContent) {
    setcontent((prevValue) => [...prevValue, inputContent]);
  }
  function deleteContent(id) {
    setcontent((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onChecked={addContent} />
      {content.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onChecked={deleteContent}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
