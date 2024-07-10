import React from "react";
import Card from "./components/Card";
import sampledata from "./utilities/sampledata.json";

const App = () => {
  const cardlist = new Array(10)
    .fill(0)
    .map((item, index) => <Card key={index} />);
  console.log(cardlist);
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex flex-col gap-y-2 "></div>
      <div className="flex flex-col gap-y-5 col-span-2">{cardlist}</div>
    </div>
  );
};

export default App;
