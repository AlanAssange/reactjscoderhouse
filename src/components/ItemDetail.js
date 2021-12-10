import React, { useContext, useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ id, title, image, description, price, stock }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [cantidad, setCantidad] = useState(0);

  const handleVolver = () => {
    navigate(-1);
  };

  const handleVolverInicio = () => {
    navigate("/");
  };

  const handleAgregar = () => {
    if (cantidad > 0) {
      agregarAlCarrito({
        id,
        title,
        price,
        image,
        cantidad,
      });
    }
  };
  console.log(image);

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Precio: ${price}</p>

      {!isInCart(id) ? (
        <ItemCount
          max={stock}
          cantidad={cantidad}
          setCantidad={setCantidad}
          onAdd={handleAgregar}
        />
      ) : (
        <Link to="/cart" className="btn btn-success d-block">
          Terminar mi compra
        </Link>
      )}

      <button onClick={handleVolver}>Volver</button>
      <button onClick={handleVolverInicio}>Volver al inicio</button>
    </div>
  );
};
