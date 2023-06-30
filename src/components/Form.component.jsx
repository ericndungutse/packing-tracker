import { useState } from "react";

export default function Form({ setParkingList }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    if (!description) return;

    setDescription("");
    setQuantity(1);

    setParkingList((curList) => {
      return [...curList, newItem];
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        name=""
        id=""
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button>Add</button>
    </form>
  );
}
