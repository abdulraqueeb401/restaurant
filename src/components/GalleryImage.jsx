import PropTypes from "prop-types";

function GalleryImage({ url, index, displayModal }) {
  return (
    <img
      loading="lazy"
      className={`object-cover object-center w-full h-full max-w-full hover:scale-110 transition cursor-pointer`}
      onClick={(e) => displayModal(e, index)}
      src={url}
      alt="gallery image"
    />
  );
}

GalleryImage.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default GalleryImage;
