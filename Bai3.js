import React, { useState } from "react";

function Bai3() {
  const products = [
    { id: 1, name: "Sách", price: 10000 },
    { id: 2, name: "Bút", price: 5000 },
    { id: 3, name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <h2>Sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}₫{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}

      <h2>Giỏ hàng</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}₫
          </li>
        ))}
      </ul>
      <p>Tổng tiền: {total}₫</p>
    </div>
  );
}

export default Bai3;
