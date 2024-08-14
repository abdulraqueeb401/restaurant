import PropTypes from "prop-types";

function Carousel({ carouselItem, nextCaroselItem, prevCarouselItem, images }) {
  const current = carouselItem;
  const totalImages = images.length;
  return (
    <div className="w-2/5 h-500 m-auto relative">
      <div className="inline-block w-full h-full">
        <img
          className="object-contain object-center w-full h-full max-w-full"
          src={images[current]}
          alt="lightbox image"
        />
      </div>
      <span className="inline-block text-left">
        <p className="text-left text-slate-200">
          {current + 1}/{totalImages}
        </p>
      </span>
      <div className="absolute top-1/2 -left-14 -translate-y-1/2">
        <button
          className="size-12 bg-gray-400/95 rounded-full flex items-center justify-center"
          onClick={prevCarouselItem}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#000000"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 -right-14 -translate-y-1/2">
        <button
          className="size-12 bg-gray-400/95 rounded-full flex items-center justify-center"
          onClick={nextCaroselItem}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#000000"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  carouselItem: PropTypes.number.isRequired,
  nextCaroselItem: PropTypes.func.isRequired,
  prevCarouselItem: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
