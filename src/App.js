import "./App.css";
import React, { useState } from "react";
function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <h1>{state ? "Welcome" : "Login"}</h1>
      <button onClick={() => setState(!state)}>
        {state ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default App;
