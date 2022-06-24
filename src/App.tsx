import React, { useRef } from "react";
import RoadCanvas from "./roadCanvas";
import "./index.css";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <RoadCanvas width={200} />
      <div></div>
    </div>
  );
}

export default App;
