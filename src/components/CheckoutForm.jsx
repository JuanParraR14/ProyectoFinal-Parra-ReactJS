import React, { useState } from "react";

export default function CheckoutForm({ onConfirm }) {
   const [data, setData] = useState({
      nombre: "",
      email: "",
      telefono: "",
   });

   const handleChange = (e) => {
      setData({ 
         ...data, 
         [e.target.name]: e.target.value 
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!data.nombre || !data.email || !data.telefono) {
         alert("Por favor completa todos los campos");
         return;
      }

      onConfirm(data);
   };

   return (
      <form className="col-md-6 mx-auto mt-4" onSubmit={handleSubmit}>
         <h3 className="mb-4">Datos del comprador</h3>

         <div className="mb-3">
         <label className="form-label">Nombre</label>
         <input
            type="text"
            className="form-control"
            name="nombre"
            value={data.nombre}
            onChange={handleChange}
         />
         </div>

         <div className="mb-3">
         <label className="form-label">Email</label>
         <input
            type="email"
            className="form-control"
            name="email"
            value={data.email}
            onChange={handleChange}
         />
         </div>

         <div className="mb-3">
         <label className="form-label">Teléfono</label>
         <input
            type="text"
            className="form-control"
            name="telefono"
            value={data.telefono}
            onChange={handleChange}
         />
         </div>

         <button className="btn btn-success w-100" type="submit">
         Confirmar Compra
         </button>
      </form>
   );
}