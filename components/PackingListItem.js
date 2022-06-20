import cx from "classnames";
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
        {/* Used 'classnames' library to conditionally style item based on packed state.*/}
        {/* I stumbled across this library and wanted to incorporate it in this project */}
        {/* Strikethrough makes it easy for users to distinguish what still needs to be packed */}
        <p className={cx({ "line-through": isPacked })}>
          <span>{quantity}</span>
          <span> {item} </span>
        </p>

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
