import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
   const { cart, totalPrice, clearCart } = useContext(CartContext);
   const [orderId, setOrderId] = useState("");

   const createOrder = async (buyerData) => {
      const order = {
         buyer: buyerData,
         items: cart,
         total: totalPrice(),
         date: Timestamp.now(),
      };

      try {
         const ordersRef = collection(db, "orders");
         const resp = await addDoc(ordersRef, order);

         setOrderId(resp.id);
         clearCart();
      } catch (error) {
         console.log("Error creando orden:", error);
      }
   };

   if (cart.length === 0 && !orderId) {
      return (
         <div className="container mt-5">
         <h3>No hay productos en el carrito</h3>
         </div>
      );
   }

   if (orderId) {
      return (
         <div className="container mt-5 text-center">
         <h2>¡Gracias por tu compra!</h2>
         <p>Tu número de orden es:</p>

         <h3 className="fw-bold">{orderId}</h3>

         <p className="mt-3">Guárdalo para futuras consultas.</p>
         </div>
      );
   }

   return (
      <div className="container mt-4">
         <CheckoutForm onConfirm={createOrder} />
      </div>
   );
}