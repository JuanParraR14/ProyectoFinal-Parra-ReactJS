import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
;

const CartItem = ({ item }) => {
   const { removeItem } = useContext(CartContext);

   return (
      <div className="card mb-3">
      <div className="row g-0 align-items-center">
        
         <div className="col-md-3 p-2">
            <img
               src={item.imagen}
               alt={item.nombre}
               className="img-fluid rounded"
               style={{ maxHeight: "150px", objectFit: "cover" }}
            />
         </div>

         <div className="col-md-6 p-3">
            <h5>{item.nombre}</h5>
            <p>Precio unitario: ${item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p className="fw-bold">
               Subtotal: ${item.precio * item.quantity}
            </p>
         </div>

         <div className="col-md-3 text-center">
            <button
               className="btn btn-danger"
               onClick={() => removeItem(item.id)}
            >
               Eliminar
            </button>
         </div>
         </div>
      </div>
   );
};

export default CartItem;