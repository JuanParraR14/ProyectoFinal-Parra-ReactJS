import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import ItemDetail from "../presentational/Item";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setItem({ ...resp.data(), firebaseId: resp.id });
        }
      })
      .finally(() => setLoading(false));
      
  }, [id]);

  return (
    <div>
      {loading ? <p>Cargando...</p> : item ? <ItemDetail {...item} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer