import PropTypes from "prop-types";

function Modal({ children, closeModal }) {
  return (
    <div className="h-screen bg-gray-950/95 flex justify-center align-center relative">
      <button onClick={closeModal} className="absolute top-6 right-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeModal: PropTypes.func.isRequired,
  // display: PropTypes.bool.isRequired,
};

export default Modal;
