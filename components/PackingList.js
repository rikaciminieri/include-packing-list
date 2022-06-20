import EditingListItem from "./EditingListItem";
import PackingListItem from "./PackingListItem";
import { useState } from "react";

const PackingList = ({ packingList, setPackingList }) => {
  // Value will be id of item being edited
  const [itemEditingID, setItemEditingID] = useState(null);

  // Descriptive variables declared in the beginning makes code easier for me to read and understand.
  // If I need to add to the code later, this saves tons of time!
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
        // while packed items will move to the bottom. Although duplicate code exists, I think the user
        // benefits from being able to see which items still need to be packed.

        // There is some prop drilling happening here - in the case of a larger project,
        // I'd use a state management library to avoid this.
        <ul>
          {unpackedItems.map(({ item, id, quantity, isPacked }) => {
            // If the item is being edited, render the editing state, otherwise render the packing list
            // Separating the editing state and list state into two different components makes the code more
            // modular and easy to follow.
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
