import cx from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {

  const [packingList, setPackingList] = useState([]);
  const [editingText, setEditingText] = useState({});

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
    </div>
  );
}
