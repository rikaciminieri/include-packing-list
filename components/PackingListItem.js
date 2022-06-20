import Button from "./UI/Button";

const PackingListItem = ({
  packingList,
  setItemEditingID,
  handleDelete,
  id,
  quantity,
  item,
  isPacked,
  setPackingList,
}) => {
  
  const handleToggle = () => {
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

  return (
    <li>
      <div className="flex flex-row items-center justify-center">
        <input
          className="m-3"
          type="checkbox"
          defaultChecked={isPacked}
          onClick={() => handleToggle()}
        />

        <Button onClick={() => setItemEditingID(id)}>Edit</Button>

        <Button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(id);
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default PackingListItem;
