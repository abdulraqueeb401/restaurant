import Gallery from "../components/Gallery";
import PropTypes from "prop-types";
import {images} from "../assets/gallery_images.json";

function Photos() {
  return <Gallery images={images} />;
}

Photos.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDisplayModal: PropTypes.func.isRequired,
};

export default Photos;
