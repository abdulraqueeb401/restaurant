import PropTypes from "prop-types";
import { useState } from "react";

function AddButton({ id, addItemToCart, removeItemFromCart }) {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount((c) => c + 1);
    addItemToCart(id);
  }
  function handleRemove() {
    setCount((c) => c - 1);
    removeItemFromCart(id);
  }
  return count > 0 ? (
    <div className="add-btn add-btn-active">
      <button onClick={handleRemove}>-</button>
      {count}
      <button onClick={handleAdd}>+</button>
    </div>
  ) : (
    <button onClick={handleAdd} className="add-btn">
      ADD
    </button>
  );
}

export default AddButton;
