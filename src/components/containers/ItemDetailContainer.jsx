import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products as mockProducts } from "../../data/products";
import ItemDetail from "../ItemDetail";

function fetchProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = mockProducts.find((p) => String(p.id) === String(id));
      resolve(found || null);
    }, 600);
  });
}

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container mt-4">Cargando detalle...</div>;
  if (!item) return <div className="container mt-4">Producto no encontrado</div>;

  return (
    <div className="container mt-4">
      <ItemDetail item={item} />
    </div>
  );
};