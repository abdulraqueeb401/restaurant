import { useState } from "react";
import sampledata from "./utilities/data.json";
import Sidebar from "./components/Sidebar";
import MenuList from "./components/MenuList";

const App = () => {
  // const [state, setState] = useState({})
  // const cardlist = new Array(10)
  //   .fill(0)
  //   .map((item, index) => <Card key={index} />);
  const [cartIds, setCartIds] = useState([]);
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

  console.log(cartIds);

  const categories = sampledata.categories.map((item) => item.name);
  // console.log(sampledata);
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <Sidebar categories={categories} />
      <div className="flex flex-col gap-y-10 col-span-2">
        {sampledata.categories.map((menuitem, index) => (
          <MenuList
            key={index}
            onCardIdAddition={onCardIdAddition}
            onCardIdRemoval={onCardIdRemoval}
            menuitem={menuitem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
