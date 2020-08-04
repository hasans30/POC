import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        onClick={async () => {
          myfunction().then(
            (val) => (document.getElementById("myid").innerText = val.score)
          );
        }}
      >
        Button
      </button>
    </div>
  );
}

export default App;

function myfunction() {
  const zxlib = import("zxcvbn");
  return zxlib.then((l) => l.default("mypass"));
}
