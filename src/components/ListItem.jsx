import { AiTwotoneDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import React, { useState } from "react";
import "../assets/App.css";

const ListItem = ({ item, edit, deleteItem, habdleDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const classsName = "checked";

  return (
    <div key={item.id} className="list">
      <input
        className="checkBox"
        checked={item.isDone}
        type="checkbox"
        onChange={() => habdleDone(item.id)}
      />
      <li key={item.id} id={item.selected}>
        <input
          className={item.isDone && classsName}
          disabled={!isEditing}
          style={!isEditing ? { border: "none" } : {}}
          value={item.value}
          onChange={(e) => edit(item.id, e)}
        ></input>

        <button className="deleted" onClick={() => deleteItem(item.id)}>
          <AiTwotoneDelete />
        </button>

        <button
          className="edited"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? <GiConfirmed /> : <MdModeEditOutline />}
        </button>
        <p className="date">{item.date}</p>
      </li>
    </div>
  );
};

export default ListItem;
