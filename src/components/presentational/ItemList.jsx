import React from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="row">
      {items.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};