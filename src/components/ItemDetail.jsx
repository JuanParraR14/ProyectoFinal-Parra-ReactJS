import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ nombre, precio, categoria, imagen, id, stock }) {
  const handleAdd = (cantidad) => {
    console.log(`Agregar ${cantidad} unidades del producto ${nombre} (id:${id})`);
    alert(`Has agregado ${cantidad} unidades de ${nombre} (simulación)`);
  };

  return (
    <div className="card m-4">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={imagen}
            className="img-fluid rounded m-1 border"
            alt={nombre}
            style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h2 className="card-title">{nombre}</h2>
            <p className="card-text">Categoría: {categoria}</p>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">Stock: {stock} und.</p>
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