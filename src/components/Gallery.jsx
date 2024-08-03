import { images } from "../assets/gallery_images.json";

function Gallery() {
  console.log(images);
  function displayLightBox() {
    console.log("display lightbox");
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-2/5 m-auto">
      {images.map((imageurl, index) => {
        return (
          <div
            onClick={displayLightBox}
            className="rounded-lg overflow-hidden"
            key={index}
          >
            <img
              loading="lazy"
              className="object-cover object-center w-full h-48 max-w-full rounded-lg hover:scale-110 transition"
              src={imageurl}
              alt="gallery image"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
