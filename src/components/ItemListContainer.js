import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "productos");
    const q = catId
      ? query(productosRef, where("category", "==", catId))
      : productosRef;
    getDocs(q)
      .then((collection) => {
        const items = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}</>;
};
