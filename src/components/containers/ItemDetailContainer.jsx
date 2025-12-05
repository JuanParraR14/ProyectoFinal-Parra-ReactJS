import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setItem({ id: resp.id, ...resp.data() });
        }
      })
      .finally(() => setLoading(false));
      
  }, [id]);

  return (
    <div container mt-4>
      {loading ? <p>Cargando...</p> : item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer