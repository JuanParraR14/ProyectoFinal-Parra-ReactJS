import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h2>404 — Página no encontrada</h2>
      <p>La ruta que intentaste ingresar no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};