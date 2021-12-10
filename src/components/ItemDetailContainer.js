import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const { itemId, catId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .then((resp) => {
        if (!catId) {
          setProductos(resp);
        } else {
          setProductos(resp.filter((prod) => prod.category.includes(itemId)));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);
  console.log(productos);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemDetail {...productos} />}</div>
  );
};
