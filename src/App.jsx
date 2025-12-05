import React from "react";
import { Route, Routes } from "react-router-dom";

import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import ItemListContainer from "./components/containers/ItemListContainer";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

function app() {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Reshipi Supermarket - Catálogo" />}/>
            <Route path="/category/:categoriaId" element={<ItemListContainer greeting="Catálogo por categoría" />}/>
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
            <Route path="*" element={<NotFound />}/>
         </Routes>
      </>
   );
}

export default app;