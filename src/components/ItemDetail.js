import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ id, title, image, description, price, stock }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [cantidad, setCantidad] = useState(0);

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

  return (
    <div className="item">
      <h2>{title}</h2>
      <img className="card-img" src={image} alt={title} />
      <p>{description}</p>
      <p>Precio: ${price}</p>

      {!isInCart(id) ? (
        <ItemCount
          max={stock}
          cantidad={cantidad}
          onAdd={handleAgregar}
          setCantidad={setCantidad}
        />
      ) : (
        <Link to="/cart">
          <button className="buy-1">Terminar mi compra</button>
        </Link>
      )}

      <button className="buy-2" onClick={handleVolverInicio}>
        Volver al inicio
      </button>
    </div>
  );
};
