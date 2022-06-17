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
  // Value will be id we are editing
  const [itemEditing, setItemEditing] = useState(null);
  const [editingText, setEditingText] = useState({});

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
      return listItem.id === id
        ? {
            ...listItem,
            isPacked: !listItem.isPacked,
          }
        : listItem;
    });
    setPackingList(mapped);
  };

  const handleDelete = (id) => {
    const updatedPackingList = packingList.filter((listItem) => {
      return listItem.id !== id;
    });

    setPackingList(updatedPackingList);
  };

  const handleEditingChange = (event) => {
    event.preventDefault();

    setEditingText({
      ...editingText,
      [event.target.name]: event.target.value,
    });
  };

  const editListItem = (id) => {
    const updatedPackingList = packingList.map((listItem) => {
      return listItem.id === id ? (listItem.item = editingText) : listItem;
    });
    setPackingList(updatedPackingList);
    setItemEditing(null);
    setEditingText("");
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
                    {id === itemEditing ? (
                      <div>
                        <input
                          type="text"
                          onChange={handleEditingChange}
                          value={editingText.item}
                          name="item"
                        />
                        <input
                          type="number"
                          onChange={handleEditingChange}
                          value={editingText.quantity}
                          name="quantity"
                        />
                      </div>
                    ) : (
                      <li>
                        {quantity} {item}
                      </li>
                    )}

                    {itemEditing === id ? (
                      <button onClick={() => editListItem(id)}>Done</button>
                    ) : (
                      <button onClick={() => setItemEditing(id)}>Edit</button>
                    )}

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
                <button>Edit</button>
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
