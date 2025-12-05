import React from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import ItemListContainer from "./components/containers/ItemListContainer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

function App() {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Reshipi Supermarket - Catálogo" />}/>
            <Route path="/category/:categoriaId" element={<ItemListContainer greeting="Catálogo por categoría" />}/>
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   );
}

export default App;