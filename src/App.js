import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"

function App() {
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return (
    <div className="App">
      <h1>React sliding puzzle</h1>
      <Board imgUrl={imgUrl} />
      <input value={imgUrl} onChange={handleImageChange} />
    </div>
  );
}

export default App;
