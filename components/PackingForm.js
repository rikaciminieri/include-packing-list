import { useEffect, useState } from "react";

const initialInputState = {
  item: "",
  quantity: 1,
};
const PackingForm = ({ packingList, setPackingList }) => {
  const [userInput, setUserInput] = useState(initialInputState);
  const handleChange = (event) => {
    event.preventDefault();

    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <form className="pt-12 flex flex-col items-center">
      <label htmlFor="item" className="p-3">Item:</label>
      <input
        className="border-2 border-slate-300 rounded p-2"
        type="text"
        placeholder="Type an item to pack..."
        onChange={handleChange}
        name="item"
        value={userInput.item}
      />
      <label htmlFor="quantity" className="p-3">Quantity:</label>
      <input
        className="border-2 border-slate-300 rounded p-2"
        type="number"
        min="0"
        onChange={handleChange}
        name="quantity"
        value={userInput.quantity}
      />

    </form>
  );
};

export default PackingForm;
