import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

    const handleAdd = (cantidad) => {
      addItem(item, cantidad);
      setAdded(true);
  };

  if (!item) return <p>Producto no encontrado</p>

  return (
    <div className="card m-4">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={item.imagen}
            className="img-fluid rounded m-1 border"
            alt={item.nombre}
            style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h2 className="card-title">{item.nombre}</h2>
            <p className="card-text">Categoría: {item.categoria}</p>
            <p className="card-text">Precio: ${item.precio}</p>
            <p className="card-text">Stock: {item.stock} und.</p>

            {!added ? (
              <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
            ) : (
              <div>
                <h5 className="text-success">Producto agregado</h5>
                <Link to="/cart" className="btn btn-primary mt-3">Ir al carrito</Link>  
              </div>            
            )}            
          </div>
        </div>
      </div>
    </div>
  );
};