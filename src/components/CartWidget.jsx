import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
   const { totalItems } = useContext(CartContext);
   const navigate = useNavigate();

   return (
      <button
         className="btn btn-custom position-relative"
         onClick={() => navigate("/cart")}
      >
         <BsCart3 size={20} />

         <span
         className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
         style={{ fontSize: "0.7rem" }}
         >
         {totalItems()}
         </span>
      </button>
   );
};