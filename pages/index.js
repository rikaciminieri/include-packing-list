import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState({
    item: "",
    quantity: 0,
  });

  const [packingList, setPackingList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();

    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });

    console.log(userInput);
  };
  return (
    <div>
      <h3>Travel Must-Haves</h3>
      <form>
        <input
          type="text"
          placeholder="Type an item"
          onChange={handleChange}
          name="item"
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          name="quantity"
        />
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
