import "./assets/App.css";
import { useState } from "react";

import ListItem from "./components/ListItem";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var day = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    hours + ":" + minutes + " " + ampm + "," + month + "/" + day + "/" + year;
  return strTime;
}

const options = [
  { value: "all", text: "All" },
  { value: "true", text: "checked" },
  { value: "false", text: "notChecked" },
];

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(options[0].value);

  const handlSelect = (e) => {
    setSelected(e.target.value);
  };
  function handelAddItem() {
    if (input.trim()) {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: input,
        date: formatAMPM(new Date()),
        isDone: false,
      };
      setItems((e) => [...e, item]);
      setInput("");
    } else {
      alert("enter todo ");
    }
  }
  function handelDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handelEditItem(id, e) {
    const arr = items.map((item) => {
      if (item.id === id) {
        return { ...item, value: e.target.value };
      }
      return item;
    });
    setItems(arr);
  }

  function habdleDone(id) {
    const arr = items.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
        return item;
      }
      return item;
    });

    setItems(arr);
  }

  return (
    <>
      <h1 className="App">TODO LIST</h1>
      <header className="head">
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          required
        />
        <button className="add-btn" onClick={() => handelAddItem()}>
          Add Task
        </button>

        <select className="select" value={selected} onChange={handlSelect}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </header>
      <div className="main">
        <div className="ul">
          <ul>
            {items
              .sort((a, b) => b.id - a.id)
              .filter((item) => {
                return selected !== "all"
                  ? item.isDone.toString() === selected
                  : item;
              })
              .map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    item={item}
                    deleteItem={handelDeleteItem}
                    edit={handelEditItem}
                    habdleDone={habdleDone}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
