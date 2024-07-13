// import {useState} from "react";
import Card from "./components/Card";
import sampledata from "./utilities/sampledata.json";
import Sidebar from "./components/Sidebar";

const App = () => {
  // const [state, setState] = useState({})
  const cardlist = new Array(10)
    .fill(0)
    .map((item, index) => <Card key={index} />);
  const categories = sampledata.categories.map((item) => item.name);
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <Sidebar categories={categories} />
      <div className="flex flex-col gap-y-5 col-span-2">{cardlist}</div>
    </div>
  );
};

export default App;
