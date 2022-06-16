import { useState } from "react";

export default function Home() {
  const [packingList, setPackingList] = useState([]);

  return (
    <div>
      <h3>Travel Must-Haves</h3>
      <form>
        <input type="text" placeholder="Type an item" />
        <input type="number" placeholder="Quantity" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {packingList.length >= 1
          ? packingList.map((todo, idx) => {
              return <li key={idx}>{todo}</li>;
            })
          : "Add an item and start packing!"}
      </ul>
    </div>
  );
}
