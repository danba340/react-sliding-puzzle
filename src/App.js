import React, { useState } from "react";
import Board from "./Board";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };
  return (
    <div className="App">
      <Board rows={4} cols={4} width={320} height={320} image={imageUrl} />
      <label>
        Image:
        <input onChange={handleImageChange} type="text" name="name" />
      </label>
    </div>
  );
}

export default App;
