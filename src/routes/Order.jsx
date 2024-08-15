import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MenuList from "../components/MenuList";
import { CartIdContext } from "../components/CartIdContext";
import { CardVariantContext } from "../components/CardVariantContext";
import Cart from "../components/Cart";
import sampledata from "../utilities/data.json";

function Order() {
  const [cartIds, setCartIds] = useState([]);
  const categories = sampledata.categories.map((item) => item.name);
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
  return (
    <div className="grid grid-cols-4 gap-4 relative">
      <Sidebar categories={categories} />
      <div className="flex flex-col col-start-2 col-span-2 gap-10 mt-3">
        <CartIdContext.Provider value={cartIds}>
          <CardVariantContext.Provider value="MENU_CARD">
            {sampledata.categories.map((menuitem, index) => (
              <MenuList
                key={index}
                onCardIdAddition={onCardIdAddition}
                onCardIdRemoval={onCardIdRemoval}
                menuitem={menuitem}
              />
            ))}
          </CardVariantContext.Provider>
        </CartIdContext.Provider>
      </div>
      <CartIdContext.Provider value={cartIds}>
        <CardVariantContext.Provider value={"ORDER_CARD"}>
          <Cart
            dishes={dishes}
            onCardIdAddition={onCardIdAddition}
            onCardIdRemoval={onCardIdRemoval}
            cartIds={cartIds}
          />
        </CardVariantContext.Provider>
      </CartIdContext.Provider>
    </div>
  );
}

export default Order;
