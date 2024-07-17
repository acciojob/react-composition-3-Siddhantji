// App.js
import React from "react";
import Tooltip from "./Tooltip";

const App = () => (
  <div style={{ padding: "50px" }}>
    <Tooltip text="This is the tooltip text for the button">
      <h1>Hover over me.</h1>
    </Tooltip>

    <Tooltip text="Tooltip for a paragraph">
      <p>Hover over this text.</p>
    </Tooltip>
  </div>
);

export default App;
