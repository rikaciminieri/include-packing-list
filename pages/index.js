import cx from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const initialInputState = {
    id: uuidv4(),
    item: "",
    quantity: 1,
    isPacked: false,
  };
  const [userInput, setUserInput] = useState(initialInputState);

  const [packingList, setPackingList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();

    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPackingList([userInput, ...packingList]);

    setUserInput(initialInputState);
  };

  const handleToggle = (id) => {
    const mapped = packingList.map((listItem) => {
      if (listItem.id === id) {
        return {
          ...listItem,
          isPacked: !listItem.isPacked,
        };
      }
      return listItem;
      // listItem.id === id
      //   ? {
      //       ...listItem,
      //       isPacked: !listItem.isPacked,
      //     }
      //   : listItem;
    });
    setPackingList(mapped);
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
          ? packingList.map(({ item, id, quantity, isPacked }) => {
              return (
                <div key={id} className={cx("item", { isPacked })}>
                  <input
                    type="checkbox"
                    defaultChecked={isPacked}
                    onClick={() => handleToggle(id)}
                  />
                  <li>
                    {quantity} {item}
                  </li>
                </div>
              );
            })
          : "Add an item and start packing!"}
      </ul>
    </div>
  );
}
