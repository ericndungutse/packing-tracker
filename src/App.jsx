import { useState } from "react";
import Logo from "./components/Logo.jsx";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats.component.jsx";
import Form from "./components/Form.component.jsx";

export default function App() {
  const [parkingList, setParkingList] = useState([
    {
      id: 1,
      description: "Bag",
      packed: false,
    },
    {
      id: 2,
      description: "Coat",
      packed: true,
    },
    {
      id: 3,
      description: "Boots",
      packed: false,
    },
    {
      id: 4,
      description: "Jacket",
      packed: true,
    },
  ]);

  function handleDeleteItem(id) {
    setParkingList((parkingList) =>
      parkingList.filter((item) => item.id !== id)
    );
  }

  function handleToggleItem(id) {
    setParkingList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleOnClearList() {
    if (confirm("Are you sure you want to delete?")) setParkingList([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form setParkingList={setParkingList} />
      <ParkingList
        parkingList={parkingList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleOnClearList}
      />
      <Stats items={parkingList} />
    </div>
  );
}
