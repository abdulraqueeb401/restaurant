import BannerGallery from "./BannerGallery";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const RestaurantHero = forwardRef(function RestaurantHero(
  { images, handleDisplayModal, isSticky, hideDirection },
  ref
) {
  const { galleryRef, infoRef } = ref;
  return (
    <>
      <BannerGallery
        ref={galleryRef}
        images={images}
        displayModal={handleDisplayModal}
      />
      <div
        ref={infoRef}
        className={`${isSticky ? "sticky top-4 z-10 pt-4" : ""} bg-white`}
      >
        <h1 className="text-4xl font-semibold tracking-wide">
          The Lemonade Kitchen
        </h1>
        <p className="text-sm font-light text-gray-700 mt-1">
          South Indian, North Indian, Biryani, Chinese, Desserts, Beverages
        </p>
        <p className="text-sm font-light text-gray-500 mt-1">
          Gachibowli, Hyderabad
        </p>
        <p className="text-sm font-light text-gray-500 mt-1">
          <span className="text-orange-300">Closed</span> - Opens at 12noon
        </p>
        <Link
          className={`block w-32 px-4 py-2 mt-3 border rounded-lg cursor-pointer transition-opacity duration-300 ${
            hideDirection ? "opacity-0" : "opacity-100"
          }`}
          to="https://www.google.com/maps/dir/?api=1&destination=17.4537844736,78.3640545979"
          target="_blank"
        >
          <div className="flex gap-2 items-center">
            <i size="16" color="#EF4F5F">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#EF4F5F"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <title>direction-line</title>
                <path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM18.16 11.38l-7.2 7.2c-0.24 0.24-0.58 0.38-0.94 0.38s-0.72-0.14-0.96-0.38v0l-7.22-7.2c-0.24-0.24-0.4-0.58-0.4-0.96s0.16-0.7 0.4-0.94v0l7.2-7.22c0.24-0.24 0.58-0.4 0.96-0.4s0.7 0.16 0.94 0.4l7.2 7.2c0.24 0.24 0.4 0.58 0.4 0.94s-0.16 0.72-0.4 0.96v0zM12.2 6.96c-0.040-0.040-0.080-0.060-0.12-0.060-0.1 0-0.18 0.080-0.18 0.18 0 0 0 0 0 0v0 1.66h-3.56c-1.18 0-2.14 0.96-2.14 2.16v0 2.38c0 0.26 0.2 0.46 0.46 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-2.38c0-0.4 0.32-0.72 0.72-0.72h3.56v1.66c0 0 0 0 0 0 0 0.1 0.080 0.18 0.18 0.18 0.040 0 0.080-0.020 0.12-0.060v0l2.34-2.32c0.040-0.040 0.080-0.1 0.080-0.18s-0.040-0.12-0.080-0.16v0z"></path>
              </svg>
            </i>
            Direction
          </div>
        </Link>
      </div>
    </>
  );
});

RestaurantHero.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDisplayModal: PropTypes.func.isRequired,
  isSticky: PropTypes.bool.isRequired,
  hideDirection: PropTypes.bool.isRequired,
};

export default RestaurantHero;
