import { useState } from "react";
import RestaurantHero from "./components/RestaurantHero";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import { images } from "./assets/gallery_images.json";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Overview from "./routes/Overview";
import Order from "./routes/Order";
import Reviews from "./routes/Reviews";
import Photos from "./routes/Photos";
import BookTable from "./routes/BookTable";
import TabLinks from "./components/TabLinks";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [carouselItem, setCarouselItem] = useState(0);

  function handleDisplayModal(e, index) {
    e.stopPropagation();
    setDisplayModal((d) => !d);
    setCarouselItem(index);
  }

  function handleCloseModal(e) {
    e.stopPropagation();
    setDisplayModal(false);
  }

  function nextCarouselItem() {
    const totalImages = images.length;
    if (carouselItem + 1 < totalImages) {
      setCarouselItem(carouselItem + 1);
    } else {
      setCarouselItem(0);
    }
  }

  function prevCarouselItem() {
    const totalImages = images.length;
    if (carouselItem - 1 >= 0) {
      setCarouselItem(carouselItem - 1);
    } else {
      setCarouselItem(totalImages - 1);
    }
  }

  const tabLinks = [
    {
      title: "Overview",
      link: "/",
      id: "tabid1",
    },
    {
      title: "Order Online",
      link: "/order-online",
      id: "tabid2",
    },
    {
      title: "Reviews",
      link: "/reviews",
      id: "tabid3",
    },
    {
      title: "Photos",
      link: "/photos",
      id: "tabid4",
    },
    {
      title: "Book a Table",
      link: "/book-table",
      id: "tabid5",
    },
  ];

  return (
    //
    <>
      {displayModal ? (
        <Modal closeModal={handleCloseModal}>
          <Carousel
            carouselItem={carouselItem}
            nextCaroselItem={nextCarouselItem}
            prevCarouselItem={prevCarouselItem}
            images={images}
          />
        </Modal>
      ) : (
        <div className="w-3/4 m-auto">
          <RestaurantHero
            images={images}
            handleDisplayModal={handleDisplayModal}
          />
          <TabLinks tabLinks={tabLinks} />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/order-online" element={<Order />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route
              path="/photos"
              element={
                <Photos
                  images={images}
                  handleDisplayModal={handleDisplayModal}
                />
              }
            />
            <Route path="/book-table" element={<BookTable />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
