import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const handleAdd = (cantidad) => {
    console.log(`Agregar ${cantidad} unidades del producto ${item.nombre} (id:${item.id})`);
    alert(`Has agregado ${cantidad} unidades de ${item.nombre} (simulación)`);
  };

  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={item.imagen}
            className="img-fluid rounded-start"
            alt={item.nombre}
            style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h2 className="card-title">{item.nombre}</h2>
            <p className="card-text">Categoría: {item.categoria}</p>
            <p className="card-text">Precio: ${item.precio}</p>
            <p className="card-text text-muted">
              Descripción:
            </p>

            <ItemCount initial={1} stock={20} onAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};