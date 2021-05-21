import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {
    0 ? <h1>{1}</h1> : <h1>{0}</h1>
  }
    </div>
  );
}

export default App;
