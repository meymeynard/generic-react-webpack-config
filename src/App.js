import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => setCounter(counter + 1)

  return (
    <div className="App">
      <h1>I'm configuring and setting up Webpack!</h1>
      <p>{`The count now is: ${counter}`}</p>
      <button onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}

export default App;
