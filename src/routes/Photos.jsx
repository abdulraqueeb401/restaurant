import Gallery from "../components/Gallery";
import PropTypes from "prop-types";

function Photos({ images, handleDisplayModal }) {
  return <Gallery images={images} displayModal={handleDisplayModal} />;
}

Photos.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDisplayModal: PropTypes.func.isRequired,
};

export default Photos;
