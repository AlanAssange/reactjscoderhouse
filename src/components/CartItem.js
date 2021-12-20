import React from "react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

export const CartItem = ({ title, price, cantidad, id }) => {
  const { removerDelCarrito } = useContext(CartContext);

  return (
    <div>
      <h3>{title}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {cantidad}</p>
      <button
        onClick={() => {
          removerDelCarrito(id);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
};
