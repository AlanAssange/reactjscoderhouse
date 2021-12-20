import React from "react";
import { useContext } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";

export const CartView = ({}) => {
  const { carrito, vaciarCarrito, totalCompra } = useContext(CartContext);
  const terminarMiCompra = () => {
    vaciarCarrito();
    console.log("Compra realizada satisfactoriamente");
  };
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
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <Link to="/checkout" onClick={terminarMiCompra}>
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
};
