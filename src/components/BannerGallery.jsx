import PropTypes from "prop-types";

function BannerGallery({ images }) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2 h-96">
      <div className="h-full row-span-2 col-span-3">
        <img
          className="object-cover object-center w-full h-full"
          src={images[0]}
          alt="banner image 1"
        />
      </div>
      <div className="row-span-2">
        <div className="grid grid-cols-1 grid-rows-2 gap-2 h-full w-full">
          <div className="w-full h-full row-span-1">
            <img
              className="object-cover object-center h-full w-full"
              src={images[1]}
              alt="banner image 2"
            />
          </div>
          <div className="w-full h-full row-span-1">
            <img
              className="object-cover object-center h-full w-full"
              src={images[2]}
              alt="banner image 3"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-2 h-full w-full">
        <img
          className="object-cover object-center h-full"
          src={images[3]}
          alt="banner image 4"
        />
      </div>
    </div>
  );
}

BannerGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BannerGallery;
