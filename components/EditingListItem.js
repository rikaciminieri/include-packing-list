import Button from "./UI/Button";
import { useState } from "react";

const EditingListItem = ({
  handleDelete,
  id,
  setItemEditingID,
  setPackingList,
  packingList,
  itemBeingEdited,
}) => {
  // Setting the initial state to the item that is being edited allows for the input fields to
  // populate with the initial user input. User can fix any input errors they might have made initially
  // without losing their original item.
  const [editUserInput, setEditUserInput] = useState(itemBeingEdited);

  const handleEditingChange = (event) => {
    event.preventDefault();

    setEditUserInput({
      ...editUserInput,
      [event.target.name]: event.target.value,
    });
  };

  const editListItem = (id) => {
    const updatedPackingList = packingList.map((listItem) => {
      return listItem.id === id ? editUserInput : listItem;
    });
    setPackingList(updatedPackingList);
    setItemEditingID(null);
  };

  return (
    <div>
      <input
        className="border-2 border-slate-300 rounded p-2 m-2"
        type="text"
        placeholder="Update your item..."
        onChange={handleEditingChange}
        value={editUserInput.item}
        name="item"
      />
      <input
        className="border-2 border-slate-300 rounded p-2 m-2"
        type="number"
        min="0"
        placeholder="Quantity"
        onChange={handleEditingChange}
        value={editUserInput.quantity}
        name="quantity"
      />
      <Button onClick={() => editListItem(id)}>Done</Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleDelete(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default EditingListItem;
