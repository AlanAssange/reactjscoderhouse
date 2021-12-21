import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../firebase/config";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "productos");
    const docRef = doc(productosRef, itemId);
    getDoc(docRef)
      .then((doc) => {
        setProductos({
          id: doc.id,
          ...doc.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);
  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemDetail {...productos} />}</div>
  );
};
