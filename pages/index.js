import { useState } from "react";
import PackingForm from "../components/PackingForm";
import PackingList from "../components/PackingList";

export default function Home() {

  const [packingList, setPackingList] = useState([]);

  return (
    <div className="w-3/4 mx-auto text-center">
      <h3 className="text-4xl pt-12">Travel Must Haves</h3>
      <PackingForm packingList={packingList} setPackingList={setPackingList} />
      <h2 className="pt-10 py-5 font-semibold">My List</h2>
      <PackingList packingList={packingList} setPackingList={setPackingList} />
    </div>
  );
}
