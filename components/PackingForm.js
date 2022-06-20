import Button from "./UI/Button";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const initialInputState = {
  item: "",
  quantity: 1,
};

const initialFormErrors = {
  item: "",
  quantity: "",
};

const PackingForm = ({ packingList, setPackingList }) => {
  const [userInput, setUserInput] = useState(initialInputState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();

    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.item) {
      errors.item = "Please type an item";
    }
    if (values.quantity < 1) {
      errors.quantity = "Please enter a positive integer";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(userInput));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    const newPackingListItem = {
      id: uuidv4(),
      item: userInput.item,
      quantity: userInput.quantity,
      isPacked: false,
    };
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setPackingList([newPackingListItem, ...packingList])
      setUserInput(initialInputState);
    }
  }, [formErrors]);

  return (
    <form className="pt-12 flex flex-col items-center">
      <p className="text-red-500">{formErrors.item}</p>
      <label htmlFor="item" className="p-3">Item:</label>
      <input
        className="border-2 border-slate-300 rounded p-2"
        type="text"
        placeholder="Type an item to pack..."
        onChange={handleChange}
        name="item"
        value={userInput.item}
      />
      <p className="text-red-500">{formErrors.quantity}</p>
      <label htmlFor="quantity" className="p-3">Quantity:</label>
      <input
        className="border-2 border-slate-300 rounded p-2"
        type="number"
        min="0"
        onChange={handleChange}
        name="quantity"
        value={userInput.quantity}
      />

      <Button type="submit" className="mt-5" onClick={handleSubmit}>
        Add
      </Button>
    </form>
  );
};

export default PackingForm;
