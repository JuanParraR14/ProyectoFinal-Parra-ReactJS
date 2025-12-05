import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
   const { cart, clearCart, totalPrice } = useContext(CartContext);

   if (cart.length === 0) {
      return (
         <div className="container mt-5 text-center">
            <h2>Tu carrito está vacío</h2>
            <Link to="/" className="btn btn-primary mt-3">
               Volver al catálogo
            </Link>
         </div>
      );
   }

   return (
      <div className="container mt-4">
         <h2 className="mb-4">Carrito de compras</h2>
         {cart.map((item) => (
         <CartItem key={item.id} item={item} />
         ))}

         <hr />

         <h3 className="text-end">Total: ${totalPrice()}</h3>
         <div className="d-flex justify-content-between mt-4">
         <button className="btn btn-danger" onClick={clearCart}>
            Vaciar carrito
         </button>
         <Link to="/checkout" className="btn btn-success">
            Finalizar compra
         </Link>
         </div>
      </div>
   );
};

export default Cart;