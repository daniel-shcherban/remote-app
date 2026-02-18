import { useState } from "react";

export default function Remote() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Remote</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
