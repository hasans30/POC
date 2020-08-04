import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Enter a password to know score</p>
      <input
        type={"password"}
        onChange={async (event) => {
          let password = event.target.value;
          console.log(password);
          let result = await myfunction(password);
          document.getElementById(
            "myid"
          ).innerText = `current score: ${result.score}`;
        }}
      ></input>
      <div id="myid">current score: 0</div>
    </div>
  );
}

export default App;

function myfunction(pass) {
  const zxlib = import("zxcvbn");
  return zxlib.then((l) => l.default(pass));
}
