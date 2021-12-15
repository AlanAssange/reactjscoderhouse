import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=11")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .then((resp) => {
        console.log(resp);
        if (!catId) {
          setProductos(resp);
        } else {
          setProductos(resp.filter((prod) => prod.category.includes(catId)));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

  return <>{loading ? <h2>Cargando...</h2> : <ItemList items={productos} />}</>;
};
