import cx from "classnames";
import { useEffect, useState } from "react";
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

  const handleDelete = (id) => {
    const updatedPackingList = packingList.filter((listItem) => {
      return listItem.id !== id;
    });

    setPackingList(updatedPackingList);
  };

  const editListItem = (id) => {};

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
          ? packingList
              .filter(({ isPacked }) => !isPacked)
              .map(({ item, id, quantity, isPacked }) => {
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
          : "Add an item and start packing!"}

        {packingList
          .filter(({ isPacked }) => isPacked)
          .map(({ item, id, quantity, isPacked }) => {
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
