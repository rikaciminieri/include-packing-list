import { useState } from "react";

const PackingList = ({ packingList, setPackingList }) => {
  // Value will be id being edited
  const [itemEditingID, setItemEditingID] = useState(null);
  const handleDelete = (id) => {
    const updatedPackingList = packingList.filter((listItem) => {
      return listItem.id !== id;
    });

    setPackingList(updatedPackingList);
  };

  return (
    <div>
        <p>Add an item and start packing!</p>
    </div>
  );
};

export default PackingList;
