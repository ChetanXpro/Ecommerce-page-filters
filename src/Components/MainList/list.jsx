import React from "react";
import "./list.css";
import ListItem from "./listItem";

const ItemList = ({ list }) => {
  return (
    <div className="list-wrap">
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
