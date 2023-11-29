import React, { Suspense } from "react";
import counterStore from "store/counterStore";

const RemoteApp1 = React.lazy(() => import("app1/App"));
const RemoteApp2 = React.lazy(() => import("app2/App"));

const App = () => {
  const { count, increment, decrement, clear } = counterStore();

  return (
    <div
      style={{
        display: "grid",
        rowGap: 30,
        padding: 4,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: "dashed",
        borderColor: "black",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "deepskyblue",
        }}
      >
        <h1>Shell</h1>
      </div>
      <div>
        <center>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={clear}>Clear</button>

          <h2>Counter: {count}</h2>
        </center>
      </div>

      <div
        style={{
          textAlign: "center",
          borderWidth: 2,
          borderRadius: 10,
          borderStyle: "dashed",
          borderColor: "red",
        }}
      >
        <Suspense fallback={"...loading"}>
          <RemoteApp1 />
        </Suspense>
      </div>

      <div
        style={{
          textAlign: "center",
          borderWidth: 2,
          borderRadius: 10,
          borderStyle: "dashed",
          borderColor: "orange",
        }}
      >
        <Suspense fallback={"...loading"}>
          <RemoteApp2 />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
