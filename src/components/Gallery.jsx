import { images } from "../assets/gallery_images.json";
import PropTypes from "prop-types";

function Gallery({ displayModal }) {
  console.log(images);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-2/5 m-auto">
      {images.map((imageurl, index) => {
        return (
          <div className="rounded-lg overflow-hidden" key={index}>
            <img
              loading="lazy"
              className="object-cover object-center w-full h-48 max-w-full rounded-lg hover:scale-110 transition cursor-pointer"
              onClick={(e) => displayModal(e, index)}
              src={imageurl}
              alt="gallery image"
            />
          </div>
        );
      })}
    </div>
  );
}

Gallery.propTypes = {
  displayModal: PropTypes.func.isRequired,
};

export default Gallery;
