import React, { useState } from "react";
function Bai3() {
  const [color, setColor] = useState("white");
  const colors = ["red", "green", "blue", "yellow"];
  return (
    <div>
      <h2>Bài 3: Ứng dụng đổi màu nền</h2>
      <div>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
          >
            {c}
          </button>
        ))}
      </div>
            <div
        style={{
          width: "250px",
          height: "200px",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}
export default Bai3;