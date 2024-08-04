import { useState } from "react";
import { images } from "../assets/gallery_images.json";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const totalImages = images.length;
  function nextImage() {
    if (current + 1 < totalImages) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }
  function prevImage() {
    if (current - 1 >= 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(totalImages - 1);
    }
  }
  return (
    <div className="h-screen bg-gray-950/30 flex justify-center align-center">
      <div className="w-2/5 h-500 m-auto relative">
        <div className="inline-block w-full h-full">
          <img
            className="object-contain object-center w-full h-full max-w-full"
            src={images[current]}
            alt="lightbox image"
          />
        </div>
        <span className="inline-block text-left">
          <p className="text-left">
            {current + 1}/{totalImages}
          </p>
        </span>
        <div className="absolute top-1/2 -left-14 -translate-y-1/2">
          <button
            className="size-12 bg-gray-600/50 rounded-full flex items-center justify-center"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
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
            className="size-12 bg-gray-600/50 rounded-full flex items-center justify-center"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
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
    </div>
  );
}

export default Carousel;
