import React, { useState } from "react";
function DisplayNumber({ value }) {
  return <h2>Giá trị hiện tại: {value}</h2>;
}

function App() {
  const [dem, setCount] = useState(0);
  return (
    <div>
      <DisplayNumber value={dem} />

      <div>
        <button onClick={() => setCount(dem + 1)}>+</button>
        <button onClick={() => setCount(dem - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;

