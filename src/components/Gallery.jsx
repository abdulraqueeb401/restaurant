import GalleryImage from "./GalleryImage";
import PropTypes from "prop-types";

function Gallery({ displayModal, images }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-2/5 m-auto">
      {images.map((imageurl, index) => {
        return (
          <div className="h-48 rounded-lg overflow-hidden" key={index}>
            <GalleryImage
              displayModal={displayModal}
              url={imageurl}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

Gallery.propTypes = {
  displayModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
