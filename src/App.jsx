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
import { useRef } from "react";
import { useEffect } from "react";

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [carouselItem, setCarouselItem] = useState(0);
  const [stickyTabs, setStickyTabs] = useState(false);
  const tabLinkRef = useRef(null);
  const infoRef = useRef(null);
  const galleryRef = useRef(null);
  const [stickyInfo, setStickyInfo] = useState(false);
  const [hideDirection, setHideDirection] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // console.log(galleryRef.current, infoRef.current, tabLinkRef.current);
      if (galleryRef.current && infoRef.current) {
        // console.log("hey");
        const galleryBottom = galleryRef.current.getBoundingClientRect().bottom;

        if (galleryBottom <= 0) {
          setStickyInfo(true);
        } else setStickyInfo(false);
      }
      if (infoRef.current && tabLinkRef.current) {
        const infoBottom = infoRef.current.getBoundingClientRect().bottom;
        const tabLinksTop = tabLinkRef.current.getBoundingClientRect().top;

        if (tabLinksTop <= infoBottom) {
          setHideDirection(true);
          setStickyTabs(true);
        } else {
          setHideDirection(false);
          setStickyTabs(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
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
        <div className="w-3/4 m-auto relative">
          <RestaurantHero
            ref={{ galleryRef, infoRef }}
            images={images}
            isSticky={stickyInfo}
            hideDirection={hideDirection}
            handleDisplayModal={handleDisplayModal}
          />
          <TabLinks
            ref={tabLinkRef}
            tabLinks={tabLinks}
            enableStickyTabs={stickyTabs}
          />
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
