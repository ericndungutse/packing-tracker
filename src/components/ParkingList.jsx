import { useState } from "react";
import Item from "./Item";

export default function ParkingList({
  parkingList,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;

  if (sortby === "input") sortedItems = [...parkingList];
  if (sortby === "description") {
    sortedItems = parkingList
      .slice()
      .sort((item_a, item_b) =>
        item_a.description.localeCompare(item_b.description)
      );
  }

  if (sortby === "packed")
    sortedItems = parkingList.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Packed</option>
        </select>

        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
