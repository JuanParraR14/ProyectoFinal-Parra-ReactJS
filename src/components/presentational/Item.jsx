import React from "react";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: ${producto.precio}</p>
          <div className="mt-auto">
            <Link to={`/detail/${producto.id}`} className="btn btn-primary">
              Ver detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};