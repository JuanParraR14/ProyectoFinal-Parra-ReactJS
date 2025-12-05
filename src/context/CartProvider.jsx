import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const isInCart = (id) => {
      return cart.some((item) => item.id === id);
   };

   const addItem = (item, quantity) => {
      if (isInCart(item.id)) {
         setCart((prev) => 
            prev.map((prod) => 
               prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            )
         );
      } else {
         setCart((prev) => [...prev, { ...item, quantity}]);
      }
   };

   const removeItem = (id) => {
      setCart((prev) => prev.filter((item) => item.id !== id));
   };

   const clearCart = () => {
      setCart([]);
   };

   const totalItems = () => {
      return cart.reduce((acc, item) => acc + item.quantity, 0);
   };

   const totalPrice = () => {
      return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);
   };

   return (
      <CartContext.Provider
         value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalItems,
            totalPrice,
         }}
      >
         {children}
      </CartContext.Provider>   
   );
};