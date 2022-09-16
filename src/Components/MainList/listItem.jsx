import React from "react";
import "./listItem.css";
const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => {
  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt="item" />
      <header>
        <h4>{title}</h4>
        <span> ⭐ {rating} </span>
      </header>
      <footer>
        <p>
          <b>{serviceTime}</b> <span>Delivery Fee ${deliveryFee}</span>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </footer>
    </div>
  );
};

export default ListItem;
