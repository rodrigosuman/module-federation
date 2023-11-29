import React from "react";

import counterStore from "store/counterStore";

const App = () => {
  const { count, increment, decrement, clear } = counterStore();
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1>App 1 with new updates</h1>
      <div>
        <center>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={clear}>Clear</button>

          <h2>Counter: {count}</h2>
        </center>
      </div>
    </div>
  );
};

export default App;
