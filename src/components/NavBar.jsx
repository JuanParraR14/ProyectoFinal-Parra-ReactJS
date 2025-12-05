import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/ReshipiLogo.png";
import CartWidget from "./CartWidget";

const categories = ["Desayunos", "Almuerzos", "Cenas"];

export default function navBar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark">
         <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
               <img src={Logo} alt="Logo de Reshipi" height={100} className="me-2" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
               <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navMenu">
               <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                  <NavLink to="/" className="nav-link">Inicio</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Categorías
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                        {categories.map(cat => (
                        <li key={cat}>
                           <Link className="dropdown-item" to={`/category/${cat}`}>
                              {cat}
                           </Link>
                        </li>
                        ))}
                     </ul>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/contact" className="nav-link">Contacto</NavLink>
                  </li>
               </ul>
               <div className="d-flex align-items-center">
                  <CartWidget />
               </div>
            </div>
         </div>
      </nav>
   );
};