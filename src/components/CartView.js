import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";

export const CartView = () => {
  const { carrito, vaciarCarrito, totalCompra } = useContext(CartContext);
  return (
    <div>
      <p>Cart View</p>
      <hr></hr>
      <section>
        {carrito.map((productos) => (
          <CartItem {...productos} />
        ))}
      </section>
      <hr></hr>
      <div>
        <p>Total: ${totalCompra()} </p>
        <button onClick={vaciarCarrito} className="buy-3">
          Vaciar Carrito
        </button>
        <Link to="/checkout">
          <button className="buy-4">Continuar</button>
        </Link>
      </div>
    </div>
  );
};
