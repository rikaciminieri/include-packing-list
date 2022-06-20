import EditingListItem from "./EditingListItem";
import PackingListItem from "./PackingListItem";
import { useState } from "react";

const PackingList = ({ packingList, setPackingList }) => {
  // Value will be id being edited
  const [itemEditingID, setItemEditingID] = useState(null);

  const packedItems = packingList.filter((item) => item.isPacked);
  const unpackedItems = packingList.filter((item) => !item.isPacked);

  const itemBeingEdited = packingList.find((item) => item.id === itemEditingID);

  const handleDelete = (id) => {
    const updatedPackingList = packingList.filter((listItem) => {
      return listItem.id !== id;
    });

    setPackingList(updatedPackingList);
  };

  return (
    // Render text if packing list is empty, otherwise render the list
    <div>
      {packingList.length === 0 ? (
        <p>Add an item and start packing!</p>
      ) : (
        // 2 separate lists are being rendered - Unpacked items will be at the top of the list,
        // while packed items will move to the bottom so it is easier to see what still needs to be packed
        <ul>
          {unpackedItems.map(({ item, id, quantity, isPacked }) => {
            // If the item is being edited, render the editing state, otherwise render the list
            return itemBeingEdited?.id === id ? (
              <EditingListItem
                key={id}
                packingList={packingList}
                setPackingList={setPackingList}
                setItemEditingID={setItemEditingID}
                handleDelete={handleDelete}
                id={id}
                itemBeingEdited={itemBeingEdited}
              />
            ) : (
              <PackingListItem
                key={id}
                packingList={packingList}
                setItemEditingID={setItemEditingID}
                handleDelete={handleDelete}
                id={id}
                item={item}
                quantity={quantity}
                isPacked={isPacked}
                setPackingList={setPackingList}
              />
            );
          })}
          {packedItems.map(({ item, id, quantity, isPacked }) => {
            return itemBeingEdited?.id === id ? (
              <EditingListItem
                key={id}
                packingList={packingList}
                setPackingList={setPackingList}
                setItemEditingID={setItemEditingID}
                handleDelete={handleDelete}
                id={id}
                itemBeingEdited={itemBeingEdited}
              />
            ) : (
              <PackingListItem
                packingList={packingList}
                key={id}
                setItemEditingID={setItemEditingID}
                handleDelete={handleDelete}
                id={id}
                item={item}
                quantity={quantity}
                isPacked={isPacked}
                setPackingList={setPackingList}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PackingList;
