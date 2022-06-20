import { useState } from "react";
import PackingForm from "../components/PackingForm";
import PackingList from "../components/PackingList";

export default function Home() {
  // Index file is rather slim because I chose to co-locate relevant state to where
  // it is being used. This makes the code easier to read/maintain - the more disconnected
  // the state is from the UI components, the harder to maintain.

  const [packingList, setPackingList] = useState([]);

  return (
    <div className="w-3/4 mx-auto text-center">
      <h1 className="text-4xl pt-12">Travel Must Haves</h1>
      <PackingForm packingList={packingList} setPackingList={setPackingList} />
      <h2 className="pt-10 py-5 font-semibold">My List</h2>
      <PackingList packingList={packingList} setPackingList={setPackingList} />
    </div>
  );
}
