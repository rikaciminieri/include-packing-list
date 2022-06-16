import { useState } from "react";

export default function Home() {
  const initialInputState = {
    item: "",
    quantity: 0,
  };
  const [userInput, setUserInput] = useState(initialInputState);

  const [packingList, setPackingList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();

    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });

    console.log(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPackingList([userInput, ...packingList]);

    setUserInput(initialInputState);
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
          value={userInput.item}
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          name="quantity"
          value={userInput.quantity}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <ul>
        {packingList.length >= 1
          ? packingList.map((todo, idx) => {
              return (
                <li key={idx}>
                  <input type="checkbox" />
                  {todo.quantity} {todo.item}{" "}
                </li>
              );
            })
          : "Add an item and start packing!"}
      </ul>
    </div>
  );
}
