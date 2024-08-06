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
import { images as carouselImages } from "./assets/gallery_images.json";

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
    const totalImages = carouselImages.length;
    if (carouselItem + 1 < totalImages) {
      setCarouselItem(carouselItem + 1);
    } else {
      setCarouselItem(0);
    }
  }

  function prevCarouselItem() {
    const totalImages = carouselImages.length;
    if (carouselItem - 1 >= 0) {
      setCurrent(carouselItem - 1);
    } else {
      setCurrent(totalImages - 1);
    }
  }
  // console.log(cartIds);

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
    displayModal ? (
      <Modal closeModal={handleCloseModal}>
        <Carousel
          carouselItem={carouselItem}
          nextCaroselItem={nextCarouselItem}
          prevCarouselItem={prevCarouselItem}
          images={carouselImages}
        />
      </Modal>
    ) : (
      <Gallery displayModal={handleDisplayModal} />
    )
  );
};

export default App;
