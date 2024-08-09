import PropTypes from "prop-types";
import GalleryImage from "./GalleryImage";

function BannerGallery({ images, displayModal }) {
  const newImages = images.slice(0, 5);
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2 h-96">
      <div className="h-full row-span-2 col-span-3 overflow-hidden">
        <GalleryImage
          url={newImages[0]}
          displayModal={displayModal}
          index={0}
        />
      </div>
      <div className="row-span-2">
        <div className="grid grid-cols-1 grid-rows-2 gap-2 h-full w-full">
          <div className="w-full h-full row-span-1 overflow-hidden">
            <GalleryImage
              url={newImages[1]}
              displayModal={displayModal}
              index={1}
            />
          </div>
          <div className="w-full h-full row-span-1 overflow-hidden">
            <GalleryImage
              url={newImages[2]}
              displayModal={displayModal}
              index={2}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-2 h-full w-full overflow-hidden relative">
        <GalleryImage
          url={newImages[3]}
          displayModal={displayModal}
          index={3}
        />
        {/* TODO: Add routing to Gallery page */}
        <div className="h-full w-full absolute top-0 right-0  z-10 bg-gray-900/60 text-slate-200 font-light flex items-center justify-center cursor-pointer">
          View Gallery
        </div>
      </div>
    </div>
  );
}

BannerGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  displayModal: PropTypes.func.isRequired,
};

export default BannerGallery;
