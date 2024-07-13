// import {useState} from "react";
import sampledata from "./utilities/data.json";
import Sidebar from "./components/Sidebar";
import MenuList from "./components/MenuList";

const App = () => {
  // const [state, setState] = useState({})
  // const cardlist = new Array(10)
  //   .fill(0)
  //   .map((item, index) => <Card key={index} />);
  const categories = sampledata.categories.map((item) => item.name);
  console.log(sampledata);
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <Sidebar categories={categories} />
      <div className="flex flex-col gap-y-10 col-span-2">
        {sampledata.categories.map((menuitem, index) => (
          <MenuList key={index} menuitem={menuitem} />
        ))}
      </div>
    </div>
  );
};

export default App;
