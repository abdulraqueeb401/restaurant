import PropTypes from "prop-types";

function AddButton() {
  return (
    <div className="add-btn add-btn-active">
      <button>-</button>
      {1}
      <button>+</button>
    </div>
  );

  // <button className="add-btn">ADD</button>;
}

export default AddButton;
