import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import ItemList from "../presentational/ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    let q = productsRef;

    if (categoriaId) {
      q = query(productsRef, where("categoria", "==", categoriaId));
    }

    getDocs(q)
      .then((resp) => {
        const products = resp.docs.map((doc) => ({ firebaseId: doc.id, ...doc.data() }));
        setItems(products);
      })
      .finally(() => setLoading(false));

  }, [categoriaId]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;