import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)
    return (
        <div>
            <FaShoppingCart/>
            <span>{totalCantidad()}</span>
        </div>
    )
}

export default CartWidget;