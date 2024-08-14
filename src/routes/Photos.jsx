import Gallery from "../components/Gallery";
import { images } from "../assets/gallery_images.json";

function Photos() {
  function handleDisplayModal() {}
  return <Gallery images={images} displayModal={handleDisplayModal} />;
}

export default Photos;
