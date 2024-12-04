import { createSignal, createEffect, onMount, onCleanup } from "solid-js";

function CounterApp() {
  const [count, setCount] = createSignal(0);
  const [isRunning, setIsRunning] = createSignal(true); // To control the interval state
  let interval;

  // Lifecycle: Component mounts
  onMount(() => {
    console.log("CounterApp component mounted!");

    // Start the interval initially
    startInterval();

    // Cleanup: Clear the interval when the component is unmounted
    onCleanup(() => {
      console.log("CounterApp component unmounted!");
      stopInterval();
    });
  });

  // Start the interval
  const startInterval = () => {
    if (!interval) {
      interval = setInterval(() => {
        setCount(count() + 1);
      }, 1000);
    }
  };

  // Stop the interval
  const stopInterval = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Solid.js Counter with Pause/Resume</h1>
      <p>Current Count: {count()}</p>
      <div>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: isRunning() ? "red" : "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => {
            if (isRunning()) {
              stopInterval();
            } else {
              startInterval();
            }
            setIsRunning(!isRunning());
          }}
        >
          {isRunning() ? "Pause" : "Resume"}
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
