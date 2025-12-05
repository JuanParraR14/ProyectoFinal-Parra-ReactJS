import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products as mockProducts } from "../../data/products";
import ItemList from "../presentational/ItemList";

function fetchProducts() {
   return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts), 600);
   });
};

export default function ItemListContainer({ greeting }) {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const { categoriaId } = useParams();

   useEffect(() => {
      setLoading(true);
      fetchProducts()
         .then((data) => {
            if (categoriaId) {
               const filtered = data.filter(
                  (p) => p.categoria.toLowerCase() === categoriaId.toLocaleLowerCase()
               );
               setItems(filtered);
            }  else {
               setItems(data);
            }
         })
      .finally(() => setLoading(false));   
   }, [categoriaId]);

   return (
      <div className="container mt-4">
         <h2 className="mb-4">{greeting}</h2>

         {loading ? (
         <p>Cargando productos...</p>
         ) : items.length === 0 ? (
         <p>No hay productos en esta categoría.</p>
         ) : (
         <ItemList items={items} />
         )}
      </div>
   );
};