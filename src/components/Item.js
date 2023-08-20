import React, { useState } from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState("");
  function handleClick() {
    setIsIn("in-cart");
  }
  return (
    <li className={isIn}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {isIn ? "Remove from cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
