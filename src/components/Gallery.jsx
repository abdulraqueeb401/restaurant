import { useOutletContext } from "react-router-dom";
import GalleryImage from "./GalleryImage";
import PropTypes from "prop-types";

function Gallery({ images }) {
  const { handleDisplayModal } = useOutletContext();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 w-4/5 m-auto mt-3">
      {images.map((imageurl, index) => {
        return (
          <div className="h-48 rounded-lg overflow-hidden" key={index}>
            <GalleryImage
              url={imageurl}
              index={index}
              displayModal={handleDisplayModal}
            />
          </div>
        );
      })}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
