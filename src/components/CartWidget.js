import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  return (
    <div>
      <Link to="/cart" className="nav-li">
        <FaShoppingCart />
        <span>{totalCantidad()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
