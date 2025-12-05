import React, { useState } from "react";

export default function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => setCount((c) => Math.min(c + 1, stock));
  const decrease = () => setCount((c) => Math.max(c - 1, 1));
  const handleAdd = () => onAdd && onAdd(count);

  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <div className="btn-group" role="group">
        <button onClick={decrease} className="btn btn-outline-secondary">-</button>
        <button className="btn btn-light disabled">{count}</button>
        <button onClick={increase} className="btn btn-outline-secondary">+</button>
      </div>
      <button onClick={handleAdd} className="btn btn-success">Agregar al carrito</button>
    </div>
  );
};