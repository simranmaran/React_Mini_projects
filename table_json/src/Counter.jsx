import { useState } from "react"
const Counter = () => {

// useState hook to store and update count
const [count, setCount] = useState(0);

  // Increment by 10
  const increase = () => {
    setCount(count + 10);
  };

  // Decrement by 10
  const decrease = () => {
    setCount(count - 10);
  };


  return (
    <>
          <h2 style={{ textAlign: "center" }}>React Counter</h2>

    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>{count}</h1>

      <button onClick={increase} style={{ marginRight: "10px" }}>
        +10
      </button>

      <button onClick={decrease}>
        -10
      </button>
    </div>
    </>
  )
}

export default Counter