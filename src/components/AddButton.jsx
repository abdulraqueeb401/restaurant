import PropTypes from "prop-types";

function AddButton({ id, addItemToCart, removeItemFromCart, count }) {
  return count > 0 ? (
    <div className="add-btn add-btn-active">
      <button onClick={() => removeItemFromCart(id)}>-</button>
      {count}
      <button onClick={() => addItemToCart(id)}>+</button>
    </div>
  ) : (
    <button onClick={() => addItemToCart(id)} className="add-btn">
      ADD
    </button>
  );
}

AddButton.propTypes = {
  id: PropTypes.string.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default AddButton;
