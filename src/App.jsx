import { useState } from "react";
import sampledata from "./utilities/data.json";
import Sidebar from "./components/Sidebar";
import MenuList from "./components/MenuList";
import { CartIdContext } from "./components/CartIdContext";
import { CardVariantContext } from "./components/CardVariantContext";
import Cart from "./components/Cart";
import Gallery from "./components/Gallery";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import { images } from "./assets/gallery_images.json";
import BannerGallery from "./components/BannerGallery";
import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Overview from "./routes/Overview";
import Order from "./routes/Order";
import Reviews from "./routes/Reviews";
import Photos from "./routes/Photos";
import BookTable from "./routes/BookTable";

const App = () => {
  // const [state, setState] = useState({})
  // const cardlist = new Array(10)
  //   .fill(0)
  //   .map((item, index) => <Card key={index} />);
  const [cartIds, setCartIds] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [carouselItem, setCarouselItem] = useState(0);
  const dishes = sampledata.categories
    .map((category) => category.dishes)
    .flat(1);
  function onCardIdAddition(id) {
    const index = cartIds.findIndex((cartId) => cartId[id]);
    if (index !== -1) {
      // console.log("existing cart id count ", id, cartIds[index][id]);
      const newCartIds = [
        ...cartIds.slice(0, index),
        { [id]: cartIds[index][id] + 1 },
        ...cartIds.slice(index + 1, cartIds.length),
      ];
      setCartIds(newCartIds);
    } else {
      const newCartIds = [...cartIds, { [id]: 1 }];
      setCartIds(newCartIds);
    }
  }
  function onCardIdRemoval(id) {
    const index = cartIds.findIndex((cartId) => cartId[id]);
    if (cartIds[index][id] - 1) {
      const newCartIds = [
        ...cartIds.slice(0, index),
        { [id]: cartIds[index][id] - 1 },
        ...cartIds.slice(index + 1, cartIds.length),
      ];
      setCartIds(newCartIds);
    } else {
      const newCartIds = [
        ...cartIds.slice(0, index),
        ...cartIds.slice(index + 1, cartIds.length),
      ];
      setCartIds(newCartIds);
    }
  }

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
  // console.log(cartIds);

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

  const categories = sampledata.categories.map((item) => item.name);
  // console.log(sampledata);
  return (
    //   <div className="grid grid-cols-4 gap-x-4">
    //     <Sidebar categories={categories} />
    //     <div className="flex flex-col gap-y-10 col-span-2">
    //       <CartIdContext.Provider value={cartIds}>
    //         <CardVariantContext.Provider value="MENU_CARD">
    //           {sampledata.categories.map((menuitem, index) => (
    //             <MenuList
    //               key={index}
    //               onCardIdAddition={onCardIdAddition}
    //               onCardIdRemoval={onCardIdRemoval}
    //               menuitem={menuitem}
    //             />
    //           ))}
    //         </CardVariantContext.Provider>
    //       </CartIdContext.Provider>
    //     </div>
    //     <CartIdContext.Provider value={cartIds}>
    //       <CardVariantContext.Provider value={"ORDER_CARD"}>
    //         <Cart
    //           dishes={dishes}
    //           onCardIdAddition={onCardIdAddition}
    //           onCardIdRemoval={onCardIdRemoval}
    //           cartIds={cartIds}
    //         />
    //       </CardVariantContext.Provider>
    //     </CartIdContext.Provider>
    //   </div>
    <>
      {/* {displayModal ? (
        <Modal closeModal={handleCloseModal}>
          <Carousel
            carouselItem={carouselItem}
            nextCaroselItem={nextCarouselItem}
            prevCarouselItem={prevCarouselItem}
            images={images}
          />
        </Modal>
      ) : (
        <Gallery images={images} displayModal={handleDisplayModal} />
      )} */}
      <div className="w-3/4 m-auto">
        <BannerGallery images={images} displayModal={handleDisplayModal} />
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

        <button className="flex items-center gap-1 font-light px-3 py-2 mt-3 border rounded border-gray-500 text-gray-700">
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
          Directions
        </button>

        <section className="flex justify-between text-gray-700 mt-3 relative">
          {tabLinks.map((tablink) => (
            <div key={tablink.id} className="relative">
              <div className={`text-red-500 px-3 py-4`}>
                <Link to={tablink.link}>{tablink.title}</Link>
              </div>
              <hr className="bg-red-500 h-1 absolute bottom-0 left-0 w-full z-10" />
            </div>
          ))}
          {/* inactive variant */}
          <div className="relative">
            <div className={`text-gray-500 font-light px-3 py-4`}>
              <Link href={"/"}>Inactive Tab</Link>
            </div>
            {/* <hr className="bg-red-500 h-1 absolute bottom-0 left-0 w-full z-10" /> */}
          </div>
          <hr className="bg-gray-400 h-0.5 absolute bottom-0 left-0 m-0 p-0 w-full" />
        </section>

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/order-online" element={<Order />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/book-table" element={<BookTable />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
